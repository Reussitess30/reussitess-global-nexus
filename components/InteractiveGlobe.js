import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Html } from '@react-three/drei'
import * as THREE from 'three'

// Coordonnées géographiques des pays (latitude, longitude)
const COUNTRY_COORDINATES = {
  'États-Unis': { lat: 37.0902, lon: -95.7129, continent: 'Amérique du Nord' },
  'Canada': { lat: 56.1304, lon: -106.3468, continent: 'Amérique du Nord' },
  'Brésil': { lat: -14.2350, lon: -51.9253, continent: 'Amérique du Sud' },
  'Royaume-Uni': { lat: 55.3781, lon: -3.4360, continent: 'Europe' },
  'France': { lat: 46.2276, lon: 2.2137, continent: 'Europe' },
  'Allemagne': { lat: 51.1657, lon: 10.4515, continent: 'Europe' },
  'Italie': { lat: 41.8719, lon: 12.5674, continent: 'Europe' },
  'Espagne': { lat: 40.4637, lon: -3.7492, continent: 'Europe' },
  'Pays-Bas': { lat: 52.1326, lon: 5.2913, continent: 'Europe' },
  'Belgique': { lat: 50.5039, lon: 4.4699, continent: 'Europe' },
  'Suède': { lat: 60.1282, lon: 18.6435, continent: 'Europe' },
  'Inde': { lat: 20.5937, lon: 78.9629, continent: 'Asie' },
  'Singapour': { lat: 1.3521, lon: 103.8198, continent: 'Asie' },
  'Australie': { lat: -25.2744, lon: 133.7751, continent: 'Océanie' }
}

// Conversion des coordonnées géographiques en position 3D sur une sphère
function latLonToVector3(lat, lon, radius = 2) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const y = radius * Math.cos(phi)
  const z = radius * Math.sin(phi) * Math.sin(theta)
  
  return new THREE.Vector3(x, y, z)
}

// Point de boutique sur le globe
function ShopMarker({ position, shop, onClick, isSelected }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current && (hovered || isSelected)) {
      meshRef.current.scale.x = meshRef.current.scale.y = meshRef.current.scale.z = 
        1 + Math.sin(state.clock.elapsedTime * 3) * 0.2
    } else if (meshRef.current) {
      meshRef.current.scale.x = meshRef.current.scale.y = meshRef.current.scale.z = 1
    }
  })
  
  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={() => onClick(shop)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial 
          color={isSelected ? "#FFD700" : (hovered ? "#FF6B6B" : "#FF4444")}
          emissive={isSelected ? "#FFD700" : (hovered ? "#FF6B6B" : "#FF4444")}
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {(hovered || isSelected) && (
        <Html distanceFactor={10}>
          <div style={{
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '8px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            {shop.nom}
          </div>
        </Html>
      )}
    </group>
  )
}

// Ligne de connexion entre les points
function ConnectionLine({ start, end, color = "#4A90E2" }) {
  const points = []
  const segments = 50
  
  for (let i = 0; i <= segments; i++) {
    const t = i / segments
    const point = new THREE.Vector3().lerpVectors(start, end, t)
    point.normalize().multiplyScalar(2 + Math.sin(t * Math.PI) * 0.3)
    points.push(point)
  }
  
  const curve = new THREE.CatmullRomCurve3(points)
  const curvePoints = curve.getPoints(50)
  
  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={curvePoints.length}
          array={new Float32Array(curvePoints.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} opacity={0.3} transparent />
    </line>
  )
}

// Globe principal
function Globe({ shops, selectedShop, onShopClick }) {
  const globeRef = useRef()
  
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001
    }
  })
  
  // Créer les positions des boutiques
  const shopPositions = shops.map(shop => {
    const countryName = shop.nom.split(']')[1].trim()
    const coords = COUNTRY_COORDINATES[countryName]
    if (coords) {
      return {
        shop,
        position: latLonToVector3(coords.lat, coords.lon)
      }
    }
    return null
  }).filter(Boolean)
  
  return (
    <group ref={globeRef}>
      {/* Globe terrestre */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#1a1a2e"
          roughness={0.7}
          metalness={0.2}
        />
      </Sphere>
      
      {/* Continents (effet simplifié) */}
      <Sphere args={[2.01, 64, 64]}>
        <meshStandardMaterial
          color="#16213e"
          roughness={0.8}
          metalness={0.1}
          transparent
          opacity={0.8}
        />
      </Sphere>
      
      {/* Lignes de connexion entre boutiques du même type */}
      {shopPositions.map((shop1, i) => 
        shopPositions.slice(i + 1).map((shop2, j) => {
          const type1 = shop1.shop.nom.includes('[Personnel]')
          const type2 = shop2.shop.nom.includes('[Personnel]')
          if (type1 === type2) {
            return (
              <ConnectionLine 
                key={`${i}-${j}`}
                start={shop1.position}
                end={shop2.position}
                color={type1 ? "#4A90E2" : "#E24A90"}
              />
            )
          }
          return null
        })
      )}
      
      {/* Marqueurs de boutiques */}
      {shopPositions.map(({ shop, position }, index) => (
        <ShopMarker
          key={index}
          position={position}
          shop={shop}
          onClick={onShopClick}
          isSelected={selectedShop?.nom === shop.nom}
        />
      ))}
    </group>
  )
}

// Composant principal
export default function InteractiveGlobe({ shops }) {
  const [selectedShop, setSelectedShop] = useState(null)
  const [stats, setStats] = useState({
    total: shops.length,
    personnel: shops.filter(s => s.nom.includes('[Personnel]')).length,
    influenceur: shops.filter(s => s.nom.includes('[Influenceur]')).length,
    countries: new Set(shops.map(s => s.nom.split(']')[1].trim())).size,
    continents: 5
  })
  
  const handleShopClick = (shop) => {
    setSelectedShop(shop)
  }
  
  const handleVisitShop = () => {
    if (selectedShop) {
      window.open(selectedShop.lien, '_blank')
      setSelectedShop(null)
    }
  }
  
  return (
    <div style={{ 
      width: '100%', 
      height: '600px', 
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      borderRadius: '20px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
    }}>
      {/* En-tête avec statistiques */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        right: '20px',
        zIndex: 10,
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          padding: '10px 15px',
          borderRadius: '10px',
          color: 'white',
          fontSize: '14px',
          fontWeight: 'bold',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          🌍 {stats.total} Boutiques
        </div>
        <div style={{
          background: 'rgba(74, 144, 226, 0.2)',
          backdropFilter: 'blur(10px)',
          padding: '10px 15px',
          borderRadius: '10px',
          color: 'white',
          fontSize: '14px',
          fontWeight: 'bold',
          border: '1px solid rgba(74, 144, 226, 0.5)'
        }}>
          👤 {stats.personnel} Personnel
        </div>
        <div style={{
          background: 'rgba(226, 74, 144, 0.2)',
          backdropFilter: 'blur(10px)',
          padding: '10px 15px',
          borderRadius: '10px',
          color: 'white',
          fontSize: '14px',
          fontWeight: 'bold',
          border: '1px solid rgba(226, 74, 144, 0.5)'
        }}>
          ⭐ {stats.influenceur} Influenceur
        </div>
        <div style={{
          background: 'rgba(255, 215, 0, 0.2)',
          backdropFilter: 'blur(10px)',
          padding: '10px 15px',
          borderRadius: '10px',
          color: 'white',
          fontSize: '14px',
          fontWeight: 'bold',
          border: '1px solid rgba(255, 215, 0, 0.5)'
        }}>
          🗺️ {stats.countries} Pays | {stats.continents} Continents
        </div>
      </div>
      
      {/* Instructions */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        zIndex: 10,
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(10px)',
        padding: '12px 16px',
        borderRadius: '10px',
        color: 'white',
        fontSize: '13px',
        maxWidth: '300px',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ marginBottom: '5px', fontWeight: 'bold', color: '#FFD700' }}>
          🎯 Navigation Interactive
        </div>
        <div>🖱️ Cliquez sur un point pour voir la boutique</div>
        <div>🔄 Faites glisser pour faire tourner le globe</div>
        <div>🔍 Molette pour zoomer/dézoomer</div>
      </div>
      
      {/* Canvas 3D */}
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          {/* Lumières */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          {/* Globe */}
          <Globe shops={shops} selectedShop={selectedShop} onShopClick={handleShopClick} />
          
          {/* Contrôles */}
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minDistance={3}
            maxDistance={10}
            autoRotate={!selectedShop}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
      
      {/* Modal de boutique sélectionnée */}
      {selectedShop && (
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.95), rgba(226, 74, 144, 0.95))',
          backdropFilter: 'blur(20px)',
          padding: '25px',
          borderRadius: '15px',
          color: 'white',
          minWidth: '250px',
          maxWidth: '300px',
          zIndex: 20,
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
          border: '2px solid rgba(255,255,255,0.3)',
          animation: 'slideIn 0.3s ease-out'
        }}>
          <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
            {selectedShop.nom}
          </div>
          <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '15px' }}>
            {COUNTRY_COORDINATES[selectedShop.nom.split(']')[1].trim()]?.continent || 'Global'}
          </div>
          <button
            onClick={handleVisitShop}
            style={{
              width: '100%',
              padding: '12px',
              background: 'white',
              color: '#1a1a2e',
              border: 'none',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginBottom: '10px',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            🛍️ Visiter la Boutique
          </button>
          <button
            onClick={() => setSelectedShop(null)}
            style={{
              width: '100%',
              padding: '10px',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.4)',
              borderRadius: '10px',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
            onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
          >
            ✕ Fermer
          </button>
        </div>
      )}
      
      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
