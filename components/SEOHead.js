import Head from "next/head";

export default function SEOHead({
  title = "REUSSITESS® Global Nexus",
  description = "55 pages culturelles mondiales + 26 boutiques Amazon dans 14 pays sur 5 continents",
  path = "",
  country = "FR",
  language = "fr",
}) {
  const baseUrl = "https://reussitess.fr";
  const canonicalUrl = `${baseUrl}${path}`;

  // Map pays vers Amazon
  const amazonDomains = {
    US: "amazon.com",
    CA: "amazon.ca",
    FR: "amazon.fr",
    DE: "amazon.de",
    GB: "amazon.co.uk",
    IT: "amazon.it",
    ES: "amazon.es",
    NL: "amazon.nl",
    BE: "amazon.com.be",
    SE: "amazon.se",
    AU: "amazon.com.au",
    SG: "amazon.sg",
    IN: "amazon.in",
    BR: "amazon.com.br",
  };

  return (
    <Head>
      {/* Meta de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical & Alternates */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang international */}
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />
      <link rel="alternate" hrefLang="fr" href={baseUrl} />
      <link rel="alternate" hrefLang="en" href={baseUrl} />
      <link rel="alternate" hrefLang="es" href={baseUrl} />
      <link rel="alternate" hrefLang="de" href={baseUrl} />
      <link rel="alternate" hrefLang="it" href={baseUrl} />
      <link rel="alternate" hrefLang="pt" href={baseUrl} />

      {/* Géolocalisation */}
      <meta name="geo.region" content={country} />
      <meta name="geo.placename" content={country} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={`${language}_${country}`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "REUSSITESS® Global Nexus",
          url: baseUrl,
          description: description,
          inLanguage: [language],
          potentialAction: {
            "@type": "SearchAction",
            target: `${baseUrl}/bibliotheque?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        })}
      </script>

      {/* Amazon Affiliate Schema */}
      {amazonDomains[country] && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: `REUSSITESS® Amazon ${country}`,
            url: `https://www.${amazonDomains[country]}`,
            description: `Boutique Amazon affiliée ${country}`,
          })}
        </script>
      )}
    </Head>
  );
}
