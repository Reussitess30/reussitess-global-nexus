import { useRouter } from 'next/router'
import Head from 'next/head'

export default function DroitPays() {
  const router = useRouter()

  const countries = [
    {
      name: 'France',
      flag: '🇫🇷',
      continent: 'Europe',
      capitale: 'Paris',
      population: '67 millions',
      langue: 'Français',
      systeme_juridique: 'Droit civil (Code Napoléon)',
      gouvernement: 'République semi-présidentielle',
      constitution: 'Constitution de la Ve République (1958)',
      droits_fondamentaux: [
        'Déclaration des Droits de l\'Homme et du Citoyen (1789)',
        'Liberté, Égalité, Fraternité',
        'Droit à l\'éducation gratuite et obligatoire',
        'Sécurité sociale universelle',
        'Laïcité de l\'État'
      ],
      institutions: [
        'Président de la République (chef d\'État)',
        'Premier Ministre (chef du gouvernement)',
        'Assemblée Nationale et Sénat (Parlement)',
        'Conseil Constitutionnel'
      ],
      savoirs_culturels: [
        'Pays des Lumières - Philosophie et sciences',
        'Gastronomie reconnue UNESCO',
        'Arts et littérature (17 Prix Nobel de littérature)',
        'Mode et luxe mondiaux'
      ]
    },
    {
      name: 'États-Unis',
      flag: '🇺🇸',
      continent: 'Amérique du Nord',
      capitale: 'Washington D.C.',
      population: '331 millions',
      langue: 'Anglais (de facto)',
      systeme_juridique: 'Common Law (jurisprudence)',
      gouvernement: 'République fédérale présidentielle',
      constitution: 'Constitution des États-Unis (1787) - Plus ancienne constitution écrite en vigueur',
      droits_fondamentaux: [
        'Bill of Rights (1791) - 10 premiers amendements',
        'Liberté d\'expression (1er amendement)',
        'Droit de porter des armes (2e amendement)',
        'Protection contre perquisitions abusives',
        'Séparation Église-État'
      ],
      institutions: [
        'Président (exécutif)',
        'Congrès: Sénat (100 sénateurs) + Chambre des Représentants (435)',
        'Cour Suprême (9 juges à vie)',
        '50 États avec autonomie législative'
      ],
      savoirs_culturels: [
        'Melting pot culturel',
        'Innovation technologique (Silicon Valley)',
        'Hollywood - Cinéma mondial',
        'Jazz, Blues, Hip-hop, Rock'
      ]
    },
    {
      name: 'Royaume-Uni',
      flag: '🇬🇧',
      continent: 'Europe',
      capitale: 'Londres',
      population: '67 millions',
      langue: 'Anglais',
      systeme_juridique: 'Common Law (origine du système)',
      gouvernement: 'Monarchie constitutionnelle parlementaire',
      constitution: 'Constitution non écrite (conventions, lois, jurisprudence)',
      droits_fondamentaux: [
        'Magna Carta (1215) - Limite du pouvoir royal',
        'Habeas Corpus (1679)',
        'Bill of Rights (1689)',
        'Human Rights Act (1998)',
        'Tradition de rule of law'
      ],
      institutions: [
        'Monarque (chef d\'État symbolique)',
        'Premier Ministre (chef du gouvernement)',
        'Parlement: Chambre des Communes + Chambre des Lords',
        'Système Westminster (modèle parlementaire)'
      ],
      savoirs_culturels: [
        'Berceau de la Révolution industrielle',
        'Littérature anglaise (Shakespeare, Dickens)',
        'Tradition démocratique parlementaire',
        'Commonwealth - 56 pays membres'
      ]
    },
    {
      name: 'Allemagne',
      flag: '🇩🇪',
      continent: 'Europe',
      capitale: 'Berlin',
      population: '83 millions',
      langue: 'Allemand',
      systeme_juridique: 'Droit civil (tradition romano-germanique)',
      gouvernement: 'République fédérale parlementaire',
      constitution: 'Loi fondamentale (Grundgesetz, 1949)',
      droits_fondamentaux: [
        'Dignité humaine inviolable (Article 1)',
        'Droits fondamentaux garantis',
        'État de droit (Rechtsstaat)',
        'Principe fédéral (16 Länder)',
        'Démocratie sociale de marché'
      ],
      institutions: [
        'Chancelier(ère) fédéral(e)',
        'Président fédéral (chef d\'État cérémoniel)',
        'Bundestag (Parlement) et Bundesrat (Conseil fédéral)',
        'Cour constitutionnelle fédérale (Karlsruhe)'
      ],
      savoirs_culturels: [
        'Philosophie allemande (Kant, Hegel, Nietzsche)',
        'Musique classique (Bach, Beethoven, Wagner)',
        'Ingénierie et industrie automobile',
        'Bauhaus et design moderne'
      ]
    },
    {
      name: 'Italie',
      flag: '🇮🇹',
      continent: 'Europe',
      capitale: 'Rome',
      population: '60 millions',
      langue: 'Italien',
      systeme_juridique: 'Droit civil (héritage romain)',
      gouvernement: 'République parlementaire',
      constitution: 'Constitution de 1948',
      droits_fondamentaux: [
        'Égalité devant la loi',
        'Liberté personnelle inviolable',
        'Droit au travail',
        'Protection de la famille',
        'Liberté religieuse (Accords du Latran avec Vatican)'
      ],
      institutions: [
        'Président de la République',
        'Président du Conseil (Premier Ministre)',
        'Parlement: Chambre des Députés + Sénat',
        'Cour Constitutionnelle'
      ],
      savoirs_culturels: [
        'Berceau de la civilisation romaine et de la Renaissance',
        'Art et architecture (Michel-Ange, Léonard de Vinci)',
        'Cuisine italienne reconnue mondialement',
        'Mode et design (Milan)'
      ]
    },
    {
      name: 'Espagne',
      flag: '🇪🇸',
      continent: 'Europe',
      capitale: 'Madrid',
      population: '47 millions',
      langue: 'Espagnol (castillan), catalan, basque, galicien',
      systeme_juridique: 'Droit civil',
      gouvernement: 'Monarchie parlementaire',
      constitution: 'Constitution de 1978',
      droits_fondamentaux: [
        'Droits et libertés fondamentaux',
        'Autonomie des communautés (17 régions)',
        'Égalité des Espagnols',
        'Liberté d\'expression et d\'association',
        'Droit à l\'éducation'
      ],
      institutions: [
        'Roi (chef d\'État)',
        'Président du Gouvernement',
        'Cortes Generales: Congrès des Députés + Sénat',
        'Tribunal Constitutionnel'
      ],
      savoirs_culturels: [
        'Empire colonial historique (Amérique Latine)',
        'Flamenco et corrida',
        'Art: Velázquez, Goya, Picasso, Dalí',
        'Architecture: Gaudí, Alhambra'
      ]
    },
    {
      name: 'Canada',
      flag: '🇨🇦',
      continent: 'Amérique du Nord',
      capitale: 'Ottawa',
      population: '38 millions',
      langue: 'Anglais et Français (bilingue officiel)',
      systeme_juridique: 'Common Law (sauf Québec: droit civil)',
      gouvernement: 'Monarchie constitutionnelle fédérale parlementaire',
      constitution: 'Loi constitutionnelle de 1982 + Charte des droits et libertés',
      droits_fondamentaux: [
        'Charte canadienne des droits et libertés',
        'Liberté de conscience et religion',
        'Égalité des langues officielles',
        'Multiculturalisme officiel',
        'Droits des peuples autochtones'
      ],
      institutions: [
        'Monarque britannique (représenté par Gouverneur général)',
        'Premier Ministre',
        'Parlement: Chambre des Communes + Sénat',
        'Cour Suprême du Canada'
      ],
      savoirs_culturels: [
        'Mosaïque culturelle et immigration',
        'Nature et grands espaces',
        'Hockey sur glace (sport national)',
        'Bilinguisme français-anglais'
      ]
    },
    {
      name: 'Australie',
      flag: '🇦🇺',
      continent: 'Océanie',
      capitale: 'Canberra',
      population: '26 millions',
      langue: 'Anglais',
      systeme_juridique: 'Common Law',
      gouvernement: 'Monarchie constitutionnelle fédérale parlementaire',
      constitution: 'Constitution de 1901',
      droits_fondamentaux: [
        'Liberté de religion',
        'Procès équitable',
        'Protection contre discrimination',
        'Droits implicites (liberté politique)',
        'Reconnaissance des peuples aborigènes'
      ],
      institutions: [
        'Monarque britannique (représenté par Gouverneur général)',
        'Premier Ministre',
        'Parlement: Chambre des Représentants + Sénat',
        '6 États et 2 Territoires'
      ],
      savoirs_culturels: [
        'Culture aborigène (65000 ans)',
        'Sport: Cricket, Rugby, Surf',
        'Biodiversité unique (kangourous, koalas)',
        'Qualité de vie élevée'
      ]
    },
    {
      name: 'Brésil',
      flag: '🇧🇷',
      continent: 'Amérique du Sud',
      capitale: 'Brasília',
      population: '214 millions',
      langue: 'Portugais',
      systeme_juridique: 'Droit civil (influence portugaise)',
      gouvernement: 'République fédérale présidentielle',
      constitution: 'Constitution de 1988',
      droits_fondamentaux: [
        'Droits sociaux étendus',
        'Habeas corpus',
        'Égalité raciale et protection contre racisme',
        'Droit à l\'environnement sain',
        'Défense des minorités'
      ],
      institutions: [
        'Président de la République',
        'Congrès National: Chambre des Députés + Sénat',
        'Cour Suprême Fédérale',
        '26 États + District fédéral'
      ],
      savoirs_culturels: [
        'Carnaval et samba',
        'Football (5 Coupes du Monde)',
        'Forêt amazonienne (poumon de la planète)',
        'Diversité ethnique et métissage'
      ]
    },
    {
      name: 'Inde',
      flag: '🇮🇳',
      continent: 'Asie',
      capitale: 'New Delhi',
      population: '1,4 milliard',
      langue: 'Hindi, Anglais + 22 langues officielles',
      systeme_juridique: 'Common Law + droit personnel religieux',
      gouvernement: 'République fédérale parlementaire',
      constitution: 'Constitution de 1950 (plus longue au monde)',
      droits_fondamentaux: [
        'Droits fondamentaux (Articles 12-35)',
        'Égalité devant la loi',
        'Abolition de l\'intouchabilité',
        'Liberté de religion',
        'Droits culturels et éducatifs des minorités'
      ],
      institutions: [
        'Président (chef d\'État)',
        'Premier Ministre (chef du gouvernement)',
        'Parlement: Lok Sabha (Chambre basse) + Rajya Sabha',
        'Cour Suprême de l\'Inde'
      ],
      savoirs_culturels: [
        'Civilisation millénaire (Vallée de l\'Indus)',
        'Religions: Hindouisme, Bouddhisme, Jaïnisme',
        'Bollywood - Cinéma le plus prolifique',
        'Yoga et méditation'
      ]
    },
    {
      name: 'Pays-Bas',
      flag: '🇳🇱',
      continent: 'Europe',
      capitale: 'Amsterdam (capitale), La Haye (gouvernement)',
      population: '17 millions',
      langue: 'Néerlandais',
      systeme_juridique: 'Droit civil',
      gouvernement: 'Monarchie constitutionnelle parlementaire',
      constitution: 'Constitution de 1815 (révisée)',
      droits_fondamentaux: [
        'Égalité et non-discrimination',
        'Liberté de religion et conviction',
        'Liberté d\'expression',
        'Droit à la vie privée',
        'Protection sociale étendue'
      ],
      institutions: [
        'Monarque (Roi/Reine)',
        'Premier Ministre',
        'États Généraux: Deuxième Chambre + Première Chambre',
        'Tradition de consensus (poldermodel)'
      ],
      savoirs_culturels: [
        'Maîtres flamands: Rembrandt, Vermeer, Van Gogh',
        'Tolérance sociale historique',
        'Gestion de l\'eau (polders, digues)',
        'Commerce maritime et tulipes'
      ]
    },
    {
      name: 'Suède',
      flag: '🇸🇪',
      continent: 'Europe',
      capitale: 'Stockholm',
      population: '10 millions',
      langue: 'Suédois',
      systeme_juridique: 'Droit civil (nordique)',
      gouvernement: 'Monarchie constitutionnelle parlementaire',
      constitution: 'Instrument de gouvernement (1974)',
      droits_fondamentaux: [
        'Liberté d\'expression et d\'information',
        'Égalité homme-femme avancée',
        'État-providence (welfare state)',
        'Transparence publique (principe d\'accès)',
        'Protection de l\'environnement'
      ],
      institutions: [
        'Monarque (rôle cérémoniel)',
        'Premier Ministre',
        'Riksdag (Parlement monocaméral - 349 députés)',
        'Ombudsman (protection des citoyens)'
      ],
      savoirs_culturels: [
        'Modèle nordique de bien-être',
        'Design scandinave (IKEA, H&M)',
        'Prix Nobel (Stockholm)',
        'Lagom - Philosophie de modération'
      ]
    },
    {
      name: 'Belgique',
      flag: '🇧🇪',
      continent: 'Europe',
      capitale: 'Bruxelles',
      population: '11 millions',
      langue: 'Néerlandais, Français, Allemand',
      systeme_juridique: 'Droit civil',
      gouvernement: 'Monarchie fédérale parlementaire',
      constitution: 'Constitution de 1831 (révisée)',
      droits_fondamentaux: [
        'Égalité devant la loi',
        'Libertés fondamentales',
        'Multilinguisme (3 communautés linguistiques)',
        'Fédéralisme complexe',
        'Liberté d\'enseignement'
      ],
      institutions: [
        'Roi des Belges',
        'Premier Ministre fédéral',
        'Parlement: Chambre + Sénat',
        '3 Régions + 3 Communautés linguistiques'
      ],
      savoirs_culturels: [
        'Capitale de l\'Europe (Bruxelles - UE, OTAN)',
        'Bande dessinée (Tintin, Schtroumpfs)',
        'Chocolat et bière belges',
        'Art flamand (Rubens, Bruegel)'
      ]
    },
    {
      name: 'Singapour',
      flag: '🇸🇬',
      continent: 'Asie',
      capitale: 'Singapour',
      population: '5,9 millions',
      langue: 'Anglais, Mandarin, Malais, Tamoul',
      systeme_juridique: 'Common Law',
      gouvernement: 'République parlementaire',
      constitution: 'Constitution de 1965',
      droits_fondamentaux: [
        'Égalité devant la loi',
        'Liberté de religion',
        'Multilinguisme officiel (4 langues)',
        'Méritocratie',
        'Lois strictes (ordre public)'
      ],
      institutions: [
        'Président (chef d\'État)',
        'Premier Ministre',
        'Parlement (monocaméral)',
        'Système de parti dominant (PAP)'
      ],
      savoirs_culturels: [
        'Cité-État moderne et prospère',
        'Hub financier asiatique',
        'Multiculturalisme (Chinois, Malais, Indiens)',
        'Urbanisme et technologie avancés'
      ]
    }
  ]

  return (<>
    <Head>
      <title>⚖️ Droit & Savoir des Pays - Bibliothèque REUSSITESS®</title>
      <meta name="description" content="Systèmes juridiques, constitutions, droits fondamentaux et savoirs culturels des 14 pays du réseau REUSSITESS®" />
    </Head>

    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)', padding: '20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
          <button 
            onClick={() => router.push('/bibliotheque')} 
            style={{
              padding: '10px 20px',
              background: '#06b6d4',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              marginBottom: '20px',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            ← Retour à la Bibliothèque
          </button>

          <h1 style={{ 
            fontSize: '3em', 
            marginBottom: '15px', 
            background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            color: '#06b6d4'
          }}>
            ⚖️ Droit & Savoir des Pays
          </h1>
          <p style={{ fontSize: '1.3em', color: '#666', marginBottom: '15px' }}>
            Exploration des systèmes juridiques, constitutions et richesses culturelles
          </p>
          <p style={{ fontSize: '1.1em', color: '#888', lineHeight: '1.6' }}>
            Découvrez les fondements juridiques et les savoirs culturels des 14 pays couverts par le réseau REUSSITESS® Global Nexus. 
            De la Common Law britannique au droit civil français, des constitutions écrites aux traditions parlementaires, 
            explorez la diversité des systèmes de gouvernance et des héritages culturels qui façonnent notre monde.
          </p>
          
          <div style={{ 
            marginTop: '25px', 
            padding: '20px', 
            background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)', 
            borderRadius: '12px',
            border: '2px solid #06b6d4'
          }}>
            <h3 style={{ color: '#0891b2', marginBottom: '10px', fontSize: '1.2em' }}>🌍 Couverture Mondiale</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              <div style={{ padding: '8px', background: 'white', borderRadius: '8px' }}>
                <strong>🗺️ 5 Continents</strong>
                <p style={{ fontSize: '0.9em', color: '#666', margin: '5px 0 0 0' }}>Europe, Amériques, Asie, Océanie</p>
              </div>
              <div style={{ padding: '8px', background: 'white', borderRadius: '8px' }}>
                <strong>🏛️ 14 Pays</strong>
                <p style={{ fontSize: '0.9em', color: '#666', margin: '5px 0 0 0' }}>Systèmes juridiques variés</p>
              </div>
              <div style={{ padding: '8px', background: 'white', borderRadius: '8px' }}>
                <strong>👥 2+ Milliards</strong>
                <p style={{ fontSize: '0.9em', color: '#666', margin: '5px 0 0 0' }}>Population totale couverte</p>
              </div>
              <div style={{ padding: '8px', background: 'white', borderRadius: '8px' }}>
                <strong>🗣️ 30+ Langues</strong>
                <p style={{ fontSize: '0.9em', color: '#666', margin: '5px 0 0 0' }}>Officielles dans ces pays</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fiches Pays */}
        <div style={{ display: 'grid', gap: '25px' }}>
          {countries.map((country, index) => (
            <div 
              key={index}
              style={{
                background: 'white',
                padding: '35px',
                borderRadius: '20px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                border: '3px solid #e0f2fe',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(6,182,212,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)'
              }}
            >
              {/* En-tête pays */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', paddingBottom: '20px', borderBottom: '2px solid #e0f2fe' }}>
                <div style={{ fontSize: '4em', marginRight: '20px' }}>{country.flag}</div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '2.2em', color: '#0891b2', marginBottom: '5px' }}>{country.name}</h2>
                  <p style={{ fontSize: '1.1em', color: '#666', margin: '5px 0' }}>
                    🌍 {country.continent} • 📍 {country.capitale} • 👥 {country.population}
                  </p>
                  <p style={{ fontSize: '1em', color: '#888' }}>
                    🗣️ {country.langue}
                  </p>
                </div>
              </div>

              {/* Système Juridique */}
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#06b6d4', fontSize: '1.4em', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  ⚖️ Système Juridique & Gouvernance
                </h3>
                <div style={{ background: '#f0f9ff', padding: '15px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p style={{ margin: '0 0 8px 0' }}><strong>Système juridique:</strong> {country.systeme_juridique}</p>
                  <p style={{ margin: '0 0 8px 0' }}><strong>Type de gouvernement:</strong> {country.gouvernement}</p>
                  <p style={{ margin: '0' }}><strong>Constitution:</strong> {country.constitution}</p>
                </div>
              </div>

              {/* Institutions */}
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#06b6d4', fontSize: '1.3em', marginBottom: '10px' }}>🏛️ Institutions Principales</h3>
                <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
                  {country.institutions.map((inst, i) => (
                    <li key={i} style={{ marginBottom: '5px', color: '#444' }}>{inst}</li>
                  ))}
                </ul>
              </div>

              {/* Droits Fondamentaux */}
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#06b6d4', fontSize: '1.3em', marginBottom: '10px' }}>📜 Droits Fondamentaux</h3>
                <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
                  {country.droits_fondamentaux.map((droit, i) => (
                    <li key={i} style={{ marginBottom: '5px', color: '#444' }}>{droit}</li>
                  ))}
                </ul>
              </div>

              {/* Savoirs Culturels */}
              <div style={{ 
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', 
                padding: '20px', 
                borderRadius: '12px',
                border: '2px solid #bae6fd'
              }}>
                <h3 style={{ color: '#0891b2', fontSize: '1.3em', marginBottom: '12px' }}>🎭 Savoirs & Richesses Culturelles</h3>
                <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
                  {country.savoirs_culturels.map((savoir, i) => (
                    <li key={i} style={{ marginBottom: '8px', color: '#0c4a6e', fontWeight: '500' }}>{savoir}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Informations */}
        <div style={{ 
          marginTop: '40px',
          background: 'white', 
          padding: '30px', 
          borderRadius: '20px', 
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#0891b2', fontSize: '1.5em', marginBottom: '15px' }}>💡 Le Saviez-Vous?</h3>
          <p style={{ fontSize: '1.1em', color: '#666', lineHeight: '1.6', maxWidth: '900px', margin: '0 auto' }}>
            Ces 14 pays représentent une incroyable diversité de systèmes juridiques : du <strong>droit civil</strong> (héritage romain) 
            au <strong>Common Law</strong> (jurisprudence britannique), en passant par des systèmes <strong>hybrides</strong>. 
            Chaque pays a développé des institutions uniques reflétant son histoire, sa culture et ses valeurs fondamentales.
          </p>
          <p style={{ fontSize: '1em', color: '#888', marginTop: '15px' }}>
            📚 Source: Constitutions nationales, institutions officielles, recherches juridiques comparées
          </p>
        </div>

      </div>
    </div>
  </>)
}
