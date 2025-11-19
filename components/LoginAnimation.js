import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoginAnimation({ onComplete }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    // Check if animation was already shown in this session
    const hasShown = sessionStorage.getItem('splashShown')
    
    if (hasShown) {
      setShow(false)
      if (onComplete) onComplete()
      return
    }

    // Show animation for 3 seconds
    const timer = setTimeout(() => {
      setShow(false)
      sessionStorage.setItem('splashShown', 'true')
      if (onComplete) onComplete()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              textAlign: 'center',
              color: 'white',
            }}
          >
            <motion.h1
              style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              🌍 RÉUSSITESS
            </motion.h1>
            <motion.p
              style={{
                fontSize: '1.5rem',
                opacity: 0.9,
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.9 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Global Nexus
            </motion.p>
            
            {/* Loading spinner */}
            <motion.div
              style={{
                marginTop: '2rem',
                width: '50px',
                height: '50px',
                border: '4px solid rgba(255, 255, 255, 0.3)',
                borderTop: '4px solid white',
                borderRadius: '50%',
                margin: '2rem auto 0',
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
