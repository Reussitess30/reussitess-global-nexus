#!/bin/bash

echo "🚀 CRÉATION COMPLÈTE BIBLIOTHÈQUE REUSSITESS® - 33+ PAGES"
echo "=========================================================="

cd ~/reussitess-global-nexus || exit 1

# ═══════════════════════════════════════════════════════════
# FONCTION DE CRÉATION DE PAGE COMPLÈTE
# ═══════════════════════════════════════════════════════════

create_page() {
    local filepath="$1"
    local flag="$2"
    local name="$3"
    local region="$4"
    local capital="$5"
    local population="$6"
    local superficie="$7"
    local langues="$8"
    local culture="$9"
    local p1="${10}"
    local p2="${11}"
    local p3="${12}"
    local savoir="${13}"
    local color="${14}"

    cat > "$filepath" << 'EOFPAGE'
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Head><title>NAME_PLACEHOLDER | Bibliothèque REUSSITESS®</title></Head>
      <div className="min-h-screen bg-gradient-to-br from-COLOR_PLACEHOLDER-50 to-white">
        <div className="bg-gradient-to-r from-COLOR_PLACEHOLDER-600 to-COLOR_PLACEHOLDER-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 mb-6">
              <Link href="/" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">🏠 Accueil</Link>
              <Link href="/bibliotheque" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">← Bibliothèque</Link>
            </div>
            <div className="flex items-center gap-6 mb-6">
              <span className="text-9xl">FLAG_PLACEHOLDER</span>
              <div>
                <h1 className="text-6xl font-bold mb-2">NAME_PLACEHOLDER</h1>
                <p className="text-2xl">REGION_PLACEHOLDER</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-COLOR_PLACEHOLDER-600">🏛️ Informations Générales</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="font-bold text-gray-700 mb-2">Capitale</p><p className="text-xl">CAPITAL_PLACEHOLDER</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Population</p><p className="text-xl">POP_PLACEHOLDER</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Superficie</p><p className="text-xl">AREA_PLACEHOLDER</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Langues</p><p className="text-xl">LANG_PLACEHOLDER</p></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-COLOR_PLACEHOLDER-600">🎭 Culture</h2>
            <p className="text-lg leading-relaxed">CULTURE_PLACEHOLDER</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-COLOR_PLACEHOLDER-600">🏛️ Patrimoine</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">P1_PLACEHOLDER</h3></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">P2_PLACEHOLDER</h3></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">P3_PLACEHOLDER</h3></div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-COLOR_PLACEHOLDER-600">💡 Savoir & Innovation</h2>
            <p className="text-lg leading-relaxed">SAVOIR_PLACEHOLDER</p>
          </div>

          <div className="bg-gradient-to-r from-COLOR_PLACEHOLDER-600 to-COLOR_PLACEHOLDER-800 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">🛍️ Découvrir les Produits</h2>
            <p className="text-lg mb-6">Explorez notre sélection de produits en lien avec NAME_PLACEHOLDER</p>
            <a href="https://reussitess-global-nexus-jfgk.vercel.app/" className="bg-white text-COLOR_PLACEHOLDER-600 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all inline-block">
              Voir les boutiques
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Page;
EOFPAGE

    # Remplacer les placeholders
    sed -i "s|NAME_PLACEHOLDER|$name|g" "$filepath"
    sed -i "s|FLAG_PLACEHOLDER|$flag|g" "$filepath"
    sed -i "s|REGION_PLACEHOLDER|$region|g" "$filepath"
    sed -i "s|CAPITAL_PLACEHOLDER|$capital|g" "$filepath"
    sed -i "s|POP_PLACEHOLDER|$population|g" "$filepath"
    sed -i "s|AREA_PLACEHOLDER|$superficie|g" "$filepath"
    sed -i "s|LANG_PLACEHOLDER|$langues|g" "$filepath"
    sed -i "s|CULTURE_PLACEHOLDER|$culture|g" "$filepath"
    sed -i "s|P1_PLACEHOLDER|$p1|g" "$filepath"
    sed -i "s|P2_PLACEHOLDER|$p2|g" "$filepath"
    sed -i "s|P3_PLACEHOLDER|$p3|g" "$filepath"
    sed -i "s|SAVOIR_PLACEHOLDER|$savoir|g" "$filepath"
    sed -i "s|COLOR_PLACEHOLDER|$color|g" "$filepath"
}

# ═══════════════════════════════════════════════════════════
# DOM-TOM - 10 PAGES
# ═══════════════════════════════════════════════════════════

echo "📝 Création DOM-TOM..."

create_page "pages/bibliotheque/dom-tom/reunion.js" "🇷🇪" "La Réunion" "Île Intense • Océan Indien" \
  "Saint-Denis" "~860,000 habitants" "2,512 km²" "Français, Créole réunionnais" \
  "Métissage culturel unique africain-malgache-indien-chinois-européen. Maloya UNESCO, séga, gastronomie créole exceptionnelle, festivals vibrants." \
  "Piton de la Fournaise - Volcan actif parmi les plus actifs au monde, observatoire volcanologique" \
  "Cirques Mafate, Cilaos, Salazie - UNESCO, randonnées exceptionnelles, paysages à couper le souffle" \
  "Maloya UNESCO - Musique traditionnelle ancestrale, symbole de résistance et identité créole" \
  "Volcanologie mondiale de pointe, vanille Bourbon réputée, agriculture tropicale d'excellence, biodiversité endémique unique, recherche scientifique avancée." \
  "red"

create_page "pages/bibliotheque/dom-tom/mayotte.js" "🇾🇹" "Mayotte" "Île aux Parfums • Océan Indien" \
  "Mamoudzou" "~280,000 habitants" "374 km²" "Français, Mahorais, Shimaore" \
  "Culture mahoraise swahilie unique. Islam sunnite comorien, danse manzaraka traditionnelle, artisanat (vannerie, broderie), société matrilinéaire préservant coutumes ancestrales." \
  "Lagon de Mayotte - Plus grand lagon fermé au monde (1,500 km²), biodiversité marine exceptionnelle" \
  "Mont Choungui (594m) - Point culminant, randonnées panoramiques offrant vue spectaculaire sur archipel" \
  "Plage de N'Gouja - Tortues marines vertes, raies mantas, observation unique faune marine" \
  "Protection marine exceptionnelle (parc marin), biodiversité corallienne unique, ylang-ylang réputé mondialement pour parfumerie, culture swahilie ancestrale, tradition orale vivante." \
  "blue"

create_page "pages/bibliotheque/dom-tom/guadeloupe.js" "🇬🇵" "Guadeloupe" "Archipel Papillon • Antilles" \
  "Basse-Terre" "~390,000 habitants" "1,628 km²" "Français, Créole guadeloupéen" \
  "Culture créole antillaise vibrante. Gwoka classé UNESCO, carnaval coloré et festif, traditions afro-caribéennes vivaces, gastronomie épicée créole authentique." \
  "La Soufrière - Volcan actif culminant à 1,467m, randonnées spectaculaires, activité géothermique" \
  "Parc National de Guadeloupe - Forêt tropicale luxuriante, cascades majestueuses, biodiversité remarquable" \
  "Mémorial ACTe - Centre mondial dédié à la mémoire de l'esclavage et des résistances" \
  "Gwoka patrimoine UNESCO, rhum agricole AOC réputé, histoire de l'esclavage et résistance, biodiversité tropicale riche, agriculture canne à sucre et banane." \
  "yellow"

create_page "pages/bibliotheque/dom-tom/martinique.js" "🇲🇶" "Martinique" "Île aux Fleurs • Antilles" \
  "Fort-de-France" "~370,000 habitants" "1,128 km²" "Français, Créole martiniquais" \
  "Île aux fleurs, berceau du zouk et de la béguine. Héritage littéraire d'Aimé Césaire (négritude), culture créole riche, traditions antillaises authentiques." \
  "Montagne Pelée - Volcan historique 1,397m, éruption dévastatrice de 1902, randonnées volcaniques" \
  "Habitation Clément - Patrimoine rhum agricole, architecture coloniale créole, jardins botaniques" \
  "Bibliothèque Schœlcher - Architecture néo-byzantine unique, patrimoine culturel, collections historiques" \
  "Aimé Césaire fondateur négritude, rhum agricole AOC mondialement reconnu, volcanologie historique, littérature créole, botanique tropicale, musique zouk et béguine." \
  "orange"

create_page "pages/bibliotheque/dom-tom/polynesie.js" "🇵🇫" "Polynésie Française" "Fenua • Pacifique Sud" \
  "Papeete (Tahiti)" "~280,000 habitants" "4,167 km²" "Français, Tahitien, Langues polynésiennes" \
  "Culture polynésienne ancestrale ma'ohi authentique. Danse tahitienne gracieuse, art du tatouage traditionnel sacré, navigation à voile ancienne, tradition orale millénaire." \
  "Marae polynésiens - Sites sacrés ancestraux, temples en pierre, lieux de culte et cérémonies" \
  "Perles de Tahiti noires - Réputées mondialement, aquaculture perlière, qualité exceptionnelle" \
  "Heiva i Tahiti - Grand festival culturel, chants traditionnels, danses polynésiennes spectaculaires" \
  "Navigation traditionnelle va'a (pirogue), culture ma'ohi préservée, perles noires d'exception, biodiversité marine corallienne, astronomie polynésienne ancestrale pratiquée." \
  "teal"

create_page "pages/bibliotheque/dom-tom/nouvelle-caledonie.js" "🇳🇨" "Nouvelle-Calédonie" "Kanaky • Mélanésie" \
  "Nouméa" "~270,000 habitants" "18,575 km²" "Français, 28 langues kanak" \
  "Culture kanak millénaire mélanésienne authentique. Pilou-pilou (danse guerrière), sculpture sur bois traditionnelle, cases rondes ancestrales, grande maison coutumière, système clanique." \
  "Cases kanak traditionnelles - Architecture ancestrale circulaire unique, totem central symbolique" \
  "Centre culturel Tjibaou - Chef-d'œuvre architectural Renzo Piano, symbole culture kanak contemporaine" \
  "Lagon classé UNESCO - Plus vaste lagon monde (24,000 km²), biodiversité marine exceptionnelle" \
  "Métallurgie du nickel (25% réserves mondiales), culture mélanésienne kanak authentique, biodiversité endémique unique (80%), lagon patrimoine mondial UNESCO." \
  "cyan"

create_page "pages/bibliotheque/dom-tom/saint-pierre.js" "🇵🇲" "Saint-Pierre-et-Miquelon" "Archipel • Amérique du Nord" \
  "Saint-Pierre" "~6,000 habitants" "242 km²" "Français" \
  "Dernier vestige français en Amérique du Nord depuis 1536. Culture franco-canadienne unique, patrimoine maritime basque et breton, traditions de pêcheurs morutiers séculaires." \
  "Architecture colorée unique - Maisons en bois influences européennes et nord-américaines mêlées" \
  "Patrimoine grande pêche morue - Histoire maritime séculaire, conserveries, tradition pêche bancs Terre-Neuve" \
  "Île aux Marins - Village musée abandonné 1965, témoignage émouvant vie pêcheurs, patrimoine préservé" \
  "Histoire grande pêche morutière internationale, culture acadienne métissée, phares historiques guidant navires, nature subarctique préservée, prohibition américaine années 1920." \
  "indigo"

create_page "pages/bibliotheque/dom-tom/wallis-futuna.js" "🇼🇫" "Wallis-et-Futuna" "Uvea • Polynésie occidentale" \
  "Mata-Utu" "~11,000 habitants" "142 km²" "Français, Wallisien, Futunien" \
  "Culture polynésienne traditionnelle authentiquement préservée. Système unique de trois royaumes coutumiers (chefferies), coutumes intactes depuis millénaires, tradition orale vivante, respect ancêtres." \
  "Sites archéologiques tongiens - Fortifications pierre Talietumu, vestiges empire Tu'i Tonga médiéval" \
  "Lacs de cratère volcanique - Lalolalo (80m profondeur), paysages volcaniques uniques, légendes ancestrales" \
  "Églises catholiques historiques - Architecture religieuse imposante, cathédrale Mata-Utu, foi profonde" \
  "Traditions royales coutumières uniques au monde (3 rois), artisanat traditionnel (tapa, vannerie fine), navigation océanique ancestrale, culture orale millénaire transmise." \
  "purple"

create_page "pages/bibliotheque/dom-tom/saint-martin.js" "🇲🇫" "Saint-Martin" "Friendly Island • Antilles" \
  "Marigot" "~36,000 habitants" "53 km²" "Français, Anglais, Créole" \
  "Seule île au monde partagée entre deux nations souveraines (France/Pays-Bas depuis 1648). Multiculturalisme caribéen exceptionnel, diversité culturelle harmonieuse unique, cohabitation pacifique." \
  "Fort Louis - Fortification historique offrant vue panoramique spectaculaire sur Marigot et Simpson Bay" \
  "Plages paradisiaques renommées - Orient Bay naturiste, Baie Rouge sauvage, Anse Marcel protégée" \
  "Carnaval caribéen bilingue - Fusion culturelle franco-néerlandaise festive, parades colorées costumées" \
  "Coopération franco-néerlandaise unique au monde (traité 1648), tourisme durable développé, multilinguisme naturel (3 langues officielles coexistant), commerce duty-free." \
  "pink"

create_page "pages/bibliotheque/dom-tom/saint-barthelemy.js" "🇧🇱" "Saint-Barthélemy" "St-Barth • Perle des Antilles" \
  "Gustavia" "~10,000 habitants" "25 km²" "Français" \
  "Perle des Antilles au charme discret raffiné. Héritage suédois unique (1784-1878), luxe élégant préservé, traditions locales vivaces, identité forte préservée jalousement." \
  "Architecture coloniale suédoise - Gustavia port franc, bâtiments historiques rouges caractéristiques" \
  "Forts historiques Oscar, Karl, Gustav - Vestiges fortifications suédoises, points vue panoramiques" \
  "Patrimoine maritime voile - Régate internationale Saint-Barth, tradition nautique ancrée, yachting prestige" \
  "Nautisme de prestige international, gastronomie française raffinée étoilée, préservation environnementale stricte (interdiction constructions hautes), histoire suédoise coloniale unique Caraïbes." \
  "rose"

echo "✅ DOM-TOM: 10 pages créées"

# ═══════════════════════════════════════════════════════════
# AFRIQUE - 7 PAGES
# ═══════════════════════════════════════════════════════════

echo "📝 Création AFRIQUE..."

create_page "pages/bibliotheque/afrique/senegal.js" "🇸🇳" "Sénégal" "Porte de l'Afrique • Afrique de l'Ouest" \
  "Dakar" "~17 millions" "196,722 km²" "Français, Wolof, Pulaar, Sérère" \
  "Berceau de la négritude (Léopold Sédar Senghor, premier président poète). Teranga (hospitalité légendaire), musique mbalax (Youssou N'Dour), culture wolof dominante, démocratie stable." \
  "Île de Gorée UNESCO - Mémoire poignante de la traite négrière atlantique, Maison des Esclaves" \
  "Lac Rose (Retba) - Lac salé aux eaux roses spectaculaires, exploitation artisanale sel" \
  "Parc Niokolo-Koba UNESCO - Faune sauvage africaine diversifiée, lions, éléphants, biodiversité" \
  "Littérature africaine rayonnante (Senghor, Mariama Bâ), démocratie stable modèle, musique mbalax mondiale, Festival International Jazz Saint-Louis réputé, lutte sénégalaise traditionnelle." \
  "yellow"

create_page "pages/bibliotheque/afrique/cote-ivoire.js" "🇨🇮" "Côte d'Ivoire" "Perle d'Afrique • Afrique de l'Ouest" \
  "Yamoussoukro" "~27 millions" "322,463 km²" "Français" \
  "Carrefour culturel dynamique ouest-africain. Diversité ethnique remarquable (60+ groupes), musique urbaine zouglou et coupé-décalé inventive, gastronomie attiéké réputée." \
  "Basilique Notre-Dame de la Paix - Plus grande basilique au monde, architecture monumentale inspirée Saint-Pierre Rome" \
  "Parc national Taï UNESCO - Dernière grande forêt primaire Afrique Ouest, chimpanzés sauvages" \
  "Parc Comoé UNESCO - Savane soudano-guinéenne, biodiversité exceptionnelle mammifères, éléphants" \
  "Premier producteur mondial cacao (40% production), culture akan traditionnelle, musique urbaine innovante zouglou coupé-décalé exportée, économie dynamique émergente CEDEAO." \
  "orange"

create_page "pages/bibliotheque/afrique/cameroun.js" "🇨🇲" "Cameroun" "Afrique en miniature • Afrique Centrale" \
  "Yaoundé" "~27 millions" "475,442 km²" "Français, Anglais" \
  "Afrique en miniature concentrant diversité continentale (250+ ethnies). Bilinguisme officiel français-anglais unique, diversité géographique (océan Atlantique, savanes, forêts denses, montagnes volcaniques)." \
  "Réserve faune Dja UNESCO - Forêt équatoriale dense protégée, gorilles plaines, biodiversité" \
  "Mont Cameroun 4,095m - Plus haut sommet Afrique de l'Ouest, volcan actif randonnées" \
  "Palais des rois Bamoun - Royaume historique sultanat, musée arts traditions Foumban" \
  "Diversité linguistique exceptionnelle (280 langues parlées), musique makossa internationale (Manu Dibango Soul Makossa), biodiversité remarquable, football passion nationale (Lions Indomptables)." \
  "green"

create_page "pages/bibliotheque/afrique/madagascar.js" "🇲🇬" "Madagascar" "Grande Île Rouge • Océan Indien" \
  "Antananarivo" "~28 millions" "587,041 km²" "Malgache, Français" \
  "Île-continent biodiversité unique au monde. Culture malgache fusion austronésienne et africaine, traditions royales merina vivaces, culte des ancêtres razana profondément enraciné." \
  "Avenue des Baobabs - Arbres millénaires majestueux iconiques, paysage féerique photographié mondialement" \
  "Tsingy de Bemaraha UNESCO - Cathédrales de pierre calcaire acérées, forêt minérale spectaculaire" \
  "Colline royale Ambohimanga UNESCO - Cité royale sacrée, palais rois merina, spiritualité" \
  "Biodiversité endémique 90% espèces (lémuriens uniques monde), vanille Bourbon premium réputée, médecine traditionnelle plantes, riziculture terrasses, pierres précieuses saphirs." \
  "red"

create_page "pages/bibliotheque/afrique/mali.js" "🇲🇱" "Mali" "Empire des Mandingues • Afrique de l'Ouest" \
  "Bamako" "~21 millions" "1,240,192 km²" "Français, Bambara, Peul, Songhaï" \
  "Empire mandingue glorieux (Soundiata Keïta, Charte Manden 1236). Tradition orale ancestrale des griots gardiens mémoire, musique mandingue kora mondialement appréciée, culture nomade touarègue." \
  "Tombouctou UNESCO - Cité mythique des 333 saints, manuscrits anciens précieux, université islamique" \
  "Falaises de Bandiagara pays Dogon UNESCO - Culture dogon millénaire unique, cosmogonie, greniers" \
  "Grande Mosquée de Djenné - Plus grande construction terre crue (banco) monde, architecture soudanaise" \
  "Manuscrits anciens Tombouctou (300,000+ préservés), musique mandingue traditionnelle (kora, ngoni, balafon), architecture banco unique, or (3e producteur africain exploitation)." \
  "amber"

create_page "pages/bibliotheque/afrique/rdc.js" "🇨🇩" "République Démocratique du Congo" "Cœur de l'Afrique • Afrique Centrale" \
  "Kinshasa" "~95 millions" "2,345,410 km²" "Français, Lingala, Kikongo, Swahili, Tshiluba" \
  "Géant africain (2e plus grand pays continent, 4e population). Rumba congolaise classée patrimoine UNESCO, diversité ethnique 250+ groupes, bassin fleuve Congo (2e plus grand monde)." \
  "Parc Virunga UNESCO - Plus ancien parc africain, gorilles montagne menacés, volcans actifs Nyiragongo" \
  "Réserve Okapi UNESCO - Forêt Ituri équatoriale, okapi girafe forêt endémique, pygmées" \
  "Chutes Livingstone fleuve Congo - Puissance hydraulique exceptionnelle potentiel énergétique immense" \
  "Rumba congolaise patrimoine UNESCO mondial, ressources minières stratégiques (coltan, cobalt batteries), biodiversité fleuve Congo exceptionnelle, musique soukous ndombolo exportée." \
  "blue"

create_page "pages/bibliotheque/afrique/rwanda.js" "🇷🇼" "Rwanda" "Pays mille collines • Afrique Grands Lacs" \
  "Kigali" "~13 millions" "26,338 km²" "Kinyarwanda, Français, Anglais, Swahili" \
  "Pays des mille collines verdoyantes. Renaissance nationale remarquable post-génocide 1994, propreté exemplaire légendaire (interdiction sachets plastique), réconciliation nationale modèle, technologie." \
  "Parc Volcans - Gorilles montagne derniers, trek mémorable, recherches Dian Fossey primatologie" \
  "Forêt Nyungwe - Canopée suspendue, chimpanzés habituées, biodiversité exceptionnelle oiseaux endémiques" \
  "Mémorial génocide Kigali - Commémoration éducation, centre documentation, jardins mémoire apaisement" \
  "Gorilles montagne (écotourisme responsable mondialement reconnu), innovation technologique (hub tech africain), réconciliation nationale modèle inspirant, café arabica excellence exporté." \
  "teal"

echo "✅ AFRIQUE: 7 pages créées"

# ═══════════════════════════════════════════════════════════
# MAGHREB - 4 PAGES
# ═══════════════════════════════════════════════════════════

echo "📝 Création MAGHREB..."

create_page "pages/bibliotheque/maghreb/maroc.js" "🇲🇦" "Maroc" "Royaume Chérifien • Afrique du Nord" \
  "Rabat" "~37 millions" "710,850 km²" "Arabe, Berbère Tamazight, Français" \
  "Civilisation millénaire arabo-berbère raffinée. Carrefour stratégique Afrique-Europe-Orient, artisanat ancestral mondialement reconnu (zellige mosaïque, maroquinerie cuir, tapis tissés), hospitalité légendaire." \
  "Médinas Fès Marrakech UNESCO - Villes impériales labyrinthiques, souks animés, palais somptueux" \
  "Aït-Ben-Haddou UNESCO - Ksar fortifié terre, décors cinéma (Gladiator, Game of Thrones)" \
  "Mosquée Hassan II Casablanca - Minaret 210m (2e plus haut monde), architecture mauresque majestueuse" \
  "Artisanat excellence (zellige, cuir Fès, tapis berbères), agriculture moderne exportatrice, énergies renouvelables solaires Noor (plus grande centrale), phosphates (1er exportateur mondial)." \
  "red"

create_page "pages/bibliotheque/maghreb/algerie.js" "🇩🇿" "Algérie" "Pays des Braves • Afrique du Nord" \
  "Alger" "~44 millions" "2,381,741 km²" "Arabe, Berbère Tamazight, Français" \
  "Plus vaste pays africain. Héritage berbère amazigh millénaire (Kabylie, Aurès), culture arabo-méditerranéenne riche, Sahara majestueux couvrant 80% territoire national." \
  "Casbah d'Alger UNESCO - Médina historique ottomane, résistance anticoloniale, architecture blanche" \
  "Timgad UNESCO - Cité romaine Trajan parfaitement conservée, Pompéi africaine, forum arc triomphe" \
  "Tassili n'Ajjer UNESCO - Art rupestre préhistorique 10,000 ans, peintures gravures sahariennes" \
  "Histoire antique berbère-romaine-numide glorieuse, musique raï contemporaine (Cheb Khaled ambassadeur), gaz naturel GNL (10e producteur mondial exportateur), patrimoine amazigh préservé." \
  "green"

create_page "pages/bibliotheque/maghreb/tunisie.js" "🇹🇳" "Tunisie" "Perle Méditerranée • Afrique du Nord" \
  "Tunis" "~12 millions" "163,610 km²" "Arabe, Français" \
  "Héritière glorieuse civilisation punique Carthage. Révolution du jasmin 2011 inaugurant printemps arabe, ouverture culturelle méditerranéenne, société civile active, cohabitation traditions modernité." \
  "Site archéologique Carthage UNESCO - Civilisation punique Hannibal, thermes Antonin, ports antiques" \
  "Amphithéâtre El Jem UNESCO - 3e plus grand amphithéâtre romain monde, gladiateurs spectacles" \
  "Médina Tunis UNESCO - Souks animés authentiques, Grande Mosquée Zitouna, palais beylicaux" \
  "Archéologie punique romaine exceptionnelle, huile d'olive (4e producteur mondial qualité), printemps arabe transition démocratique, mosaïques romaines musées renommés." \
  "blue"

create_page "pages/bibliotheque/maghreb/liban.js" "🇱🇧" "Liban" "Suisse du Moyen-Orient" \
  "Beyrouth" "~6 millions" "10,452 km²" "Arabe, Français, Anglais" \
  "Paris du Moyen-Orient cosmopolite. Mosaïque confessionnelle unique 18 communautés coexistant, résilience légendaire face épreuves, vie nocturne animée, gastronomie levantine mezze raffinée." \
  "Baalbek UNESCO - Temples romains Jupiter Bacchus monumentaux, Festival international musique" \
  "Byblos Jbeil UNESCO - Plus ancienne ville habitée continuellement monde, ports phéniciens" \
  "Vallée Qadisha Forêt Cèdres UNESCO - Ermitages monastiques, cèdres millénaires emblématiques drapeau" \
  "Phéniciens inventeurs alphabet diffusé mondialement, cuisine levantine mezze (houmous taboulé), cèdres Liban symbole national millénaire, diaspora mondiale influente bancaire." \
  "red"

echo "✅ MAGHREB: 4 pages créées"

# ═══════════════════════════════════════════════════════════
# ASIE-PACIFIQUE - 4 PAGES
# ═══════════════════════════════════════════════════════════

echo "📝 Création ASIE-PACIFIQUE..."

create_page "pages/bibliotheque/asie-pacifique/vietnam.js" "🇻🇳" "Vietnam" "Dragon ascendant • Asie du Sud-Est" \
  "Hanoï" "~98 millions" "331,212 km²" "Vietnamien, Français (minorité)" \
  "Influence française coloniale Indochine (1887-1954) visible architecture. Culture millénaire sino-vietnamienne confucéenne, résilience historique légendaire, dynamisme économique dragon asiatique émergent." \
  "Baie Hạ Long UNESCO - 1,600 îles karstiques calcaires émergeant, paysage féerique maritime" \
  "Vieille ville Hội An UNESCO - Architecture fusion vietnamo-japonaise-chinoise, lanternes colorées illuminées" \
  "Cité impériale Huế UNESCO - Palais impérial dynastie Nguyễn, tombeaux royaux, pagodes" \
  "Cuisine fusion vietnamienne renommée (phở soupe, bánh mì sandwich), café robusta (2e producteur mondial exportateur), économie émergente dynamique manufacturière, textile confection." \
  "red"

create_page "pages/bibliotheque/asie-pacifique/cambodge.js" "🇰🇭" "Cambodge" "Royaume Khmer • Asie du Sud-Est" \
  "Phnom Penh" "~17 millions" "181,035 km²" "Khmer, Français (minorité)" \
  "Empire khmer glorieux Angkor (9e-15e siècles). Influence française Indochine protectorat, bouddhisme theravada profondément enraciné, culture khmère millénaire, danse apsara gracieuse céleste." \
  "Angkor Wat UNESCO - Plus grand temple religieux hindou-bouddhiste monde, merveille architecture" \
  "Temples Angkor - Bayon visages géants, Ta Prohm racines fromager, Preah Khan, cité royale" \
  "Lac Tonlé Sap - Plus grand lac Asie Sud-Est, villages flottants, pêche traditionnelle" \
  "Civilisation angkorienne hydraulique ingénierie avancée, riz parfumé premium exporté, résilience reconstruction post-Khmers rouges, danses apsaras classées UNESCO, poivre Kampot réputé." \
  "blue"

create_page "pages/bibliotheque/asie-pacifique/laos.js" "🇱🇦" "Laos" "Royaume million éléphants • Asie Sud-Est" \
  "Vientiane" "~7 millions" "236,800 km²" "Lao, Français (minorité)" \
  "Sérénité bouddhiste theravada authentique paisible. Influence française préservée architecture (baguettes pain, cafés), traditions intactes préservées, royaume légendaire million éléphants Lane Xang." \
  "Luang Prabang UNESCO - Ancienne ville royale, temples bouddhistes dorés, quête moines aube" \
  "Plaine des Jarres - Site archéologique mystérieux, mégalithes 2,000 ans, énigme historique" \
  "Vat Phou UNESCO - Temple khmer pré-angkorien montagne sacrée, spiritualité hindoue-bouddhiste" \
  "Bouddhisme theravada authentique pratiqué quotidiennement, artisanat soie traditionnelle tissée, Mékong artère vie quotidienne (pêche transport), café robusta qualité croissante exportation." \
  "orange"

create_page "pages/bibliotheque/asie-pacifique/vanuatu.js" "🇻🇺" "Vanuatu" "République heureuse • Mélanésie Pacifique" \
  "Port-Vila" "~310,000" "12,189 km²" "Bislama créole, Français, Anglais" \
  "Mélanésie authentique préservée traditions. Condominium franco-britannique unique (1906-1980 Nouvelles-Hébrides), coutumes vivantes kastom respectées, 113 langues parlées, diversité culturelle exceptionnelle." \
  "Volcans actifs Yasur Ambrym - Accès facile cratères, spectacles éruptions naturels impressionnants" \
  "Plongée sous-marine classe mondiale - SS President Coolidge épave accessible, Million Dollar Point" \
  "Cérémonies Nagol saut gavia - Pentecôte, ancêtre saut élastique, rituel virilité tradition" \
  "Bislama créole lingua franca unique mélangeant, diversité linguistique 113 langues (record mondial densité), indice bonheur élevé classements, paradis fiscal offshore attractif." \
  "green"

echo "✅ ASIE-PACIFIQUE: 4 pages créées"

# ═══════════════════════════════════════════════════════════
# AMÉRIQUES - 3 PAGES
# ═══════════════════════════════════════════════════════════

echo "📝 Création AMÉRIQUES..."

create_page "pages/bibliotheque/ameriques/quebec.js" "🇨🇦" "Québec" "Belle Province • Amérique du Nord Canada" \
  "Québec" "~8.6 millions" "1,542,056 km²" "Français" \
  "Amérique française survivance culturelle remarquable 400 ans. Joie de vivre distincte nord-américaine, Belle Province nature grandiose, culture francophone distincte protégée jalousement législation." \
  "Vieux-Québec UNESCO - Seule ville fortifiée murailles Amérique du Nord, architecture coloniale" \
  "Montréal métropole créative - Festivals internationaux (Jazz, Juste pour rire Comédie), créativité" \
  "Château Frontenac Québec - Hôtel iconique architecture château français, panorama fleuve Saint-Laurent" \
  "Sirop érable (70% production mondiale exportée), Cirque du Soleil renommée internationale, hydroélectricité propre abondante, bilinguisme pratique, hockey sur glace passion nationale Canadiens." \
  "blue"

create_page "pages/bibliotheque/ameriques/haiti.js" "🇭🇹" "Haïti" "Perle des Antilles • Grandes Antilles Caraïbes" \
  "Port-au-Prince" "~11.5 millions" "27,750 km²" "Créole haïtien, Français" \
  "Première république noire indépendante 1804 histoire mondiale. Révolution antiesclavagiste victorieuse Toussaint Louverture, créolité vibrante unique, vodou tradition spirituelle, résilience extraordinaire face épreuves." \
  "Citadelle Laferrière UNESCO - Plus grande forteresse Amériques, symbole indépendance résistance" \
  "Art naïf haïtien - Style reconnu mondialement, couleurs vibrantes éclatantes, scènes vie quotidienne" \
  "Vodou tradition spirituelle - Religion syncrétique afro-catholique, patrimoine immatériel, cérémonie lwa" \
  "Indépendance 1804 pionnière révolutionnaire (2e pays Amériques après USA), résilience extraordinaire peuple, art naïf exporté, musique kompa-rasin-rara entraînante, vodou classé patrimoine UNESCO." \
  "red"

create_page "pages/bibliotheque/ameriques/louisiane.js" "🇺🇸" "Louisiane" "Bayou State • Sud des États-Unis" \
  "Baton Rouge" "~4.6 millions" "135,659 km²" "Anglais, Français cadien cajun" \
  "Héritage français Louisiana Purchase 1803 Napoléon. Cultures cajun (Acadiens déportés) et créole afro-caribéenne fusionnées harmonieusement, musique jazz berceau mondial, Mardi Gras Nouvelle-Orléans carnaval festif." \
  "Jazz Nouvelle-Orléans - Berceau jazz musical mondial, Louis Armstrong Preservation Hall, improvisations" \
  "Bayous marécageux mystérieux - Écosystème unique zones humides, alligators, cyprès chauves mousse espagnole" \
  "Mardi Gras Nouvelle-Orléans - Carnaval légendaire américain, parades somptueuses, masques costumes tradition" \
  "Jazz originel Nouvelle-Orléans rayonnement mondial, cuisine cajun-créole fusion gastronomique (gumbo jambalaya po'boy), français cadien langue préservée, écrevisses élevage, pétrole offshore golfe." \
  "purple"

echo "✅ AMÉRIQUES: 3 pages créées"

# ═══════════════════════════════════════════════════════════
# EUROPE - 4 PAGES
# ═══════════════════════════════════════════════════════════

echo "📝 Création EUROPE..."

create_page "pages/bibliotheque/europe/belgique.js" "🇧🇪" "Belgique" "Cœur de l'Europe • Europe de l'Ouest" \
  "Bruxelles" "~11.5 millions" "30,528 km²" "Français, Néerlandais, Allemand" \
  "Carrefour européen stratégique, capitale Union Européenne et OTAN. Bande dessinée (Tintin Hergé, Spirou), Art nouveau Horta architecture, chocolat artisanal, bières trappistes, frites belges authentiques, gaufres." \
  "Grand-Place Bruxelles UNESCO - Plus belle place monde gothique baroque, Hôtel Ville" \
  "Beffrois Flandre Wallonie UNESCO - 56 beffrois médiévaux fortifications, patrimoine architectural" \
  "Centre historique Bruges UNESCO - Venise du Nord canaux, architecture médiévale préservée" \
  "Chocolat artisanal renommé mondialement, bières trappistes authentiques 200+ variétés styles, institutions européennes siège (Commission Parlement), BD franco-belge (Tintin Astérix), diamants taillés Anvers." \
  "yellow"

create_page "pages/bibliotheque/europe/suisse.js" "🇨🇭" "Suisse" "Confédération helvétique • Europe Centrale" \
  "Berne" "~8.7 millions" "41,285 km²" "Allemand, Français, Italien, Romanche" \
  "Confédération 26 cantons autonomes. Multiculturalisme harmonieux 4 langues nationales, démocratie directe référendums fréquents, neutralité perpétuelle armée milice, Alpes majestueuses ski, précision légendaire." \
  "Vieille ville Berne UNESCO - Arcades médiévales kilomètres, Zytglogge horloge astronomique" \
  "Vignobles Lavaux UNESCO - Terrasses viticoles vertigineuses lac Léman, vins chasselas" \
  "Château Chillon lac Léman - Forteresse médiévale romantique, prison inspirant Byron poète" \
  "Horlogerie haute précision luxe (Rolex Patek Philippe), chocolat fondant (Nestlé Lindt Toblerone), neutralité diplomatique permanente séculaire, innovation pharmaceutique finance, ski alpin stations." \
  "red"

create_page "pages/bibliotheque/europe/luxembourg.js" "🇱🇺" "Luxembourg" "Grand-Duché • Europe de l'Ouest" \
  "Luxembourg" "~640,000" "2,586 km²" "Luxembourgeois lëtzebuergesch, Français, Allemand" \
  "Grand-Duché millénaire indépendant souverain. Trilingue naturel pratique quotidienne (lëtzebuergesch langue nationale-français-allemand), place financière européenne majeure fonds investissement, qualité vie élevée exceptionnelle." \
  "Vieille ville Luxembourg UNESCO - Forteresse Gibraltar Nord, casemates tunnels défensifs" \
  "Casemates du Bock - 17 kilomètres tunnels souterrains fortifications militaires visitables" \
  "Vallée Moselle luxembourgeoise - Vins blancs élixir crémant, villages viticoles pittoresques Schengen" \
  "Finance internationale hub (fonds investissement européens), multilinguisme 3 langues officielles coexistant, niveau vie élevé PIB/habitant, sidérurgie historique Arbed, institutions européennes Cour Justice." \
  "blue"

create_page "pages/bibliotheque/europe/monaco.js" "🇲🇨" "Monaco" "Principauté souveraine • Côte d'Azur Méditerranée" \
  "Monaco" "~39,000" "2.02 km²" "Français" \
  "Principauté millénaire dynastie Grimaldi (depuis 1297). Luxe discret raffinement, culture méditerranéenne élégante, glamour Belle Époque, fiscalité attractive absente impôts, sécurité maximale police ratio." \
  "Casino Monte-Carlo - Légendaire Belle Époque, architecture somptueux, James Bond films cultes" \
  "Palais Princier Grimaldi - Résidence millénaire famille régnante, relève garde quotidienne spectacle" \
  "Musée océanographique - Fondé Prince Albert Ier explorateur, dirigé Commandant Cousteau, aquariums" \
  "Formule 1 Grand Prix mythique (circuit urbain spectaculaire virages), luxe haut de gamme yachting, océanographie Cousteau rayonnement, sécurité maximale (plus grand ratio police-habitant monde)." \
  "red"

echo "✅ EUROPE: 4 pages créées"

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "🎉 BIBLIOTHÈQUE COMPLÈTE CRÉÉE AVEC SUCCÈS !"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "✅ DOM-TOM:        10 pages complètes"
echo "✅ AFRIQUE:        7 pages complètes"
echo "✅ MAGHREB:        4 pages complètes"
echo "✅ ASIE-PACIFIQUE: 4 pages complètes"
echo "✅ AMÉRIQUES:      3 pages complètes"
echo "✅ EUROPE:         4 pages complètes"
echo ""
echo "═══════════════════════════════════════════════════════════"
echo "📊 TOTAL: 32 PAGES + Guyane = 33 PAGES DÉTAILLÉES"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "➡️  Prochaine étape: npm run build"
echo ""


# ═══════════════════════════════════════════════════════════
# OCÉAN PACIFIQUE - 4 PAGES SUPPLÉMENTAIRES
# ═══════════════════════════════════════════════════════════

echo "📝 Création OCÉAN PACIFIQUE supplémentaires..."

# AUSTRALIE
create_page "pages/bibliotheque/asie-pacifique/australie.js" "🇦🇺" "Australie" "Terre des kangourous • Océanie" \
  "Canberra" "~26 millions" "7,692,024 km²" "Anglais" \
  "Île-continent aux paysages extraordinaires. Culture aborigène 65,000 ans (plus ancienne vivante monde), multiculturalisme moderne, style vie décontracté, faune unique (kangourous, koalas, ornithorynques)." \
  "Grande Barrière de Corail UNESCO - Plus grand récif corallien monde (2,300 km), biodiversité marine" \
  "Opéra de Sydney - Architecture iconique voiles blanches, patrimoine UNESCO, symbole Australie" \
  "Uluru (Ayers Rock) - Monolithe sacré aborigène 348m, culture ancestrale, couchers soleil spectaculaires" \
  "Culture aborigène ancestrale dreamtime, ressources minières immenses (fer, or, charbon), vin réputé (Barossa, Hunter Valley), sport passion (cricket, rugby, surf), qualité vie élevée." \
  "yellow"

# NOUVELLE-ZÉLANDE
create_page "pages/bibliotheque/asie-pacifique/nouvelle-zelande.js" "🇳🇿" "Nouvelle-Zélande" "Aotearoa • Océanie" \
  "Wellington" "~5 millions" "268,021 km²" "Anglais, Māori, Langue des signes NZ" \
  "Aotearoa (pays long nuage blanc māori). Culture māori vivante (haka, tatouages moko), nature sauvage spectaculaire, aventure extrême (bungee, sports), biodiversité unique (kiwi oiseau emblème)." \
  "Parc Tongariro UNESCO - Volcans actifs, Mordor Seigneur Anneaux, randonnées alpines" \
  "Milford Sound fjord - Paysage fjords spectaculaires, cascades vertigineuses, croisières nature" \
  "Culture māori marae - Villages traditionnels, cérémonies powhiri accueil, art sculpture bois" \
  "Culture māori haka tradition rugby All Blacks, tournages Seigneur Anneaux Hobbit, aventure extrême bungee inventé, agriculture moutons laitiers, vin Sauvignon Blanc Marlborough renommé." \
  "green"

# SINGAPOUR
create_page "pages/bibliotheque/asie-pacifique/singapour.js" "🇸🇬" "Singapour" "Cité-État jardin • Asie du Sud-Est" \
  "Singapour" "~5.9 millions" "728 km²" "Anglais, Mandarin, Malais, Tamoul" \
  "Cité-État jardin ultramoderne efficace. Multiculturalisme harmonieux (Chinois, Malais, Indiens, Eurasiens), hub financier asiatique, propreté légendaire stricte, architecture futuriste innovante, gastronomie fusion." \
  "Gardens by the Bay - Supertrees futuristes 50m, dômes jardins climatisés, architecture écologique" \
  "Marina Bay Sands - Hôtel iconique bateau toit, piscine infinie panoramique, casino luxueux" \
  "Quartiers ethniques - Chinatown temples, Little India coloré, Kampong Glam arabe mosquée" \
  "Hub financier technologique asiatique, port maritime plus actif monde conteneurs, gastronomie hawker centers UNESCO, efficacité infrastructures, multilinguisme 4 langues officielles pratiquées." \
  "red"

# INDE
create_page "pages/bibliotheque/asie-pacifique/inde.js" "🇮🇳" "Inde" "Bharat • Asie du Sud" \
  "New Delhi" "~1.4 milliards" "3,287,263 km²" "Hindi, Anglais, 22 langues officielles" \
  "Civilisation millénaire Indus berceau spiritualités (hindouisme, bouddhisme, jaïnisme, sikhisme). Diversité extraordinaire linguistique culturelle religieuse, Bollywood cinéma, yoga méditation, cuisine épicée variée." \
  "Taj Mahal Agra UNESCO - Mausolée marbre blanc symbole amour éternel, merveille architecture moghole" \
  "Temples Khajuraho UNESCO - Sculptures érotiques tantriques, architecture hindoue médiévale raffinée" \
  "Gange fleuve sacré Varanasi - Rituels ablutions purification, ghats crémations, pèlerinage hindou" \
  "Yoga méditation ayurveda diffusés mondialement, industrie pharmaceutique génériques, technologies information Bangalore Silicon Valley, Bollywood production films massive, démographie jeune dynamique." \
  "orange"

echo "✅ OCÉAN PACIFIQUE: 4 pages supplémentaires créées"

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "🎉 BIBLIOTHÈQUE ABSOLUMENT COMPLÈTE !"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "✅ DOM-TOM:        10 pages"
echo "✅ AFRIQUE:        7 pages"
echo "✅ MAGHREB:        4 pages"
echo "✅ ASIE-PACIFIQUE: 8 pages (Vietnam, Cambodge, Laos, Vanuatu + Australie, NZ, Singapour, Inde)"
echo "✅ AMÉRIQUES:      3 pages"
echo "✅ EUROPE:         4 pages"
echo ""
echo "═══════════════════════════════════════════════════════════"
echo "📊 TOTAL: 36 PAGES + Guyane = 37 PAGES COMPLÈTES"
echo "═══════════════════════════════════════════════════════════"

