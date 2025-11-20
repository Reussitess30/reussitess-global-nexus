import Layout from '../components/Layout'
import { useState } from 'react'

export default function MentionsLegales() {
  const [langue, setLangue] = useState('fr')

  const contenus = {
    fr: {
      titre: "Mentions Légales - Reussitess Global Nexus",
      sections: [
        {
          titre: "📄 Informations Générales",
          contenu: "Reussitess Global Nexus est une plateforme e-commerce globale connectant 26 boutiques Amazon à travers 14 pays."
        },
        {
          titre: "🏢 Éditeur",
          contenu: "Réseau Reussitess Global - Hub Central d'E-commerce Mondial"
        },
        {
          titre: "🌍 Hébergement",
          contenu: "Vercel Inc. - 440 N Barranca Ave #4133, Covina, CA 91723, USA"
        },
        {
          titre: "📊 Données Personnelles",
          contenu: "Nous protégeons vos données conformément au RGPD. Aucune donnée sensible n'est partagée sans consentement."
        },
        {
          titre: "🔒 Propriété Intellectuelle",
          contenu: "Reussitess® est une marque déposée. Tous droits réservés sur le contenu et la plateforme."
        },
        {
          titre: "📞 Contact",
          contenu: "Support disponible 24h/24 et 7j/7 en multilingue via notre plateforme."
        }
      ]
    },
    en: {
      titre: "Legal Notice - Reussitess Global Nexus", 
      sections: [
        {
          titre: "📄 General Information",
          contenu: "Reussitess Global Nexus is a global e-commerce platform connecting 26 Amazon stores across 14 countries."
        },
        {
          titre: "🏢 Publisher",
          contenu: "Reussitess Global Network - Global E-commerce Central Hub"
        },
        {
          titre: "🌍 Hosting",
          contenu: "Vercel Inc. - 440 N Barranca Ave #4133, Covina, CA 91723, USA"
        },
        {
          titre: "📊 Personal Data", 
          contenu: "We protect your data in accordance with GDPR. No sensitive data is shared without consent."
        },
        {
          titre: "🔒 Intellectual Property",
          contenu: "Reussitess® is a registered trademark. All rights reserved on content and platform."
        },
        {
          titre: "📞 Contact",
          contenu: "24/7 multilingual support available through our platform."
        }
      ]
    },
    es: {
      titre: "Aviso Legal - Reussitess Global Nexus",
      sections: [
        {
          titre: "📄 Información General",
          contenu: "Reussitess Global Nexus es una plataforma global de e-commerce que conecta 26 tiendas Amazon en 14 países."
        },
        {
          titre: "🏢 Editor",
          contenu: "Red Global Reussitess - Centro Central de E-commerce Global"
        },
        {
          titre: "🌍 Alojamiento",
          contenu: "Vercel Inc. - 440 N Barranca Ave #4133, Covina, CA 91723, USA"
        },
        {
          titre: "📊 Datos Personales",
          contenu: "Protegemos sus datos de acuerdo con el RGPD. No se comparten datos sensibles sin consentimiento."
        },
        {
          titre: "🔒 Propiedad Intelectual", 
          contenu: "Reussitess® es una marca registrada. Todos los derechos reservados sobre el contenido y la plataforma."
        },
        {
          titre: "📞 Contacto",
          contenu: "Soporte multilingüe 24/7 disponible a través de nuestra plataforma."
        }
      ]
    },
    pt: {
      titre: "Avisos Legais - Reussitess Global Nexus",
      sections: [
        {
          titre: "📄 Informações Gerais",
          contenu: "Reussitess Global Nexus é uma plataforma global de e-commerce que conecta 26 lojas Amazon em 14 países."
        },
        {
          titre: "🏢 Editor",
          contenu: "Rede Global Reussitess - Centro Central de E-commerce Global"
        },
        {
          titre: "🌍 Hospedagem",
          contenu: "Vercel Inc. - 440 N Barranca Ave #4133, Covina, CA 91723, USA"
        },
        {
          titre: "📊 Dados Pessoais",
          contenu: "Protegemos seus dados de acordo com o RGPD. Nenhum dado sensível é compartilhado sem consentimento."
        },
        {
          titre: "🔒 Propriedade Intelectual",
          contenu: "Reussitess® é uma marca registrada. Todos os direitos reservados sobre o conteúdo e a plataforma."
        },
        {
          titre: "📞 Contato",
          contenu: "Suporte multilíngue 24/7 disponível através da nossa plataforma."
        }
      ]
    },
    it: {
      titre: "Note Legali - Reussitess Global Nexus",
      sections: [
        {
          titre: "📄 Informazioni Generali",
          contenu: "Reussitess Global Nexus è una piattaforma globale di e-commerce che collega 26 negozi Amazon in 14 paesi."
        },
        {
          titre: "🏢 Editore",
          contenu: "Rete Globale Reussitess - Centro Centrale di E-commerce Globale"
        },
        {
          titre: "🌍 Hosting",
          contenu: "Vercel Inc. - 440 N Barranca Ave #4133, Covina, CA 91723, USA"
        },
        {
          titre: "📊 Dati Personali",
          contenu: "Proteggiamo i tuoi dati in conformità con il GDPR. Nessun dato sensibile viene condiviso senza consenso."
        },
        {
          titre: "🔒 Proprietà Intellettuale",
          contenu: "Reussitess® è un marchio registrato. Tutti i diritti riservati sui contenuti e sulla piattaforma."
        },
        {
          titre: "📞 Contatto",
          contenu: "Supporto multilingue 24/7 disponibile attraverso la nostra piattaforma."
        }
      ]
    },
    de: {
      titre: "Rechtliche Hinweise - Reussitess Global Nexus",
      sections: [
        {
          titre: "📄 Allgemeine Informationen",
          contenu: "Reussitess Global Nexus ist eine globale E-Commerce-Plattform, die 26 Amazon-Shops in 14 Ländern verbindet."
        },
        {
          titre: "🏢 Herausgeber",
          contenu: "Reussitess Global Network - Globales E-Commerce-Zentralhub"
        },
        {
          titre: "🌍 Hosting",
          contenu: "Vercel Inc. - 440 N Barranca Ave #4133, Covina, CA 91723, USA"
        },
        {
          titre: "📊 Personenbezogene Daten",
          contenu: "Wir schützen Ihre Daten gemäß DSGVO. Keine sensiblen Daten werden ohne Zustimmung weitergegeben."
        },
        {
          titre: "🔒 Geistiges Eigentum",
          contenu: "Reussitess® ist eine eingetragene Marke. Alle Rechte an Inhalten und Plattform vorbehalten."
        },
        {
          titre: "📞 Kontakt",
          contenu: "Mehrsprachiger 24/7-Support über unsere Plattform verfügbar."
        }
      ]
    }
  }

  const contenu = contenus[langue]

  return (
    <Layout>
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-8">
            <h1>{contenu.titre}</h1>
            
            {/* Sélecteur de langue */}
            <div className="language-selector">
              <button 
                className={langue === 'fr' ? 'btn active' : 'btn'}
                onClick={() => setLangue('fr')}
              >
                🇫🇷 Français
              </button>
              <button 
                className={langue === 'en' ? 'btn active' : 'btn'}
                onClick={() => setLangue('en')}
              >
                🇬🇧 English
              </button>
              <button 
                className={langue === 'es' ? 'btn active' : 'btn'}
                onClick={() => setLangue('es')}
              >
                🇪🇸 Español
              </button>
              <button 
                className={langue === 'pt' ? 'btn active' : 'btn'}
                onClick={() => setLangue('pt')}
              >
                🇵🇹 Português
              </button>
              <button 
                className={langue === 'it' ? 'btn active' : 'btn'}
                onClick={() => setLangue('it')}
              >
                🇮🇹 Italiano
              </button>
              <button 
                className={langue === 'de' ? 'btn active' : 'btn'}
                onClick={() => setLangue('de')}
              >
                🇩🇪 Deutsch
              </button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            {contenu.sections.map((section, index) => (
              <div key={index} className="card legal-section">
                <h3>{section.titre}</h3>
                <p>{section.contenu}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              📝 Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
