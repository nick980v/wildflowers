"use client";

import Script from "next/script";

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://wildflowerscommunity.uk/#organization",
        name: "Wild Flowers Community",
        url: "https://wildflowerscommunity.uk",
        description:
          "Wild Flowers Community is an early years education provider located in Wheathampstead. We offer nurturing sessions for young children, focusing on natural learning and community development.",
        logo: {
          "@type": "ImageObject",
          url: "https://wildflowerscommunity.uk/Wild_Flowers_Logo_Hero.jpg",
        },
        sameAs: [
          "https://www.facebook.com/profile.php?id=61575026065913",
          "https://www.instagram.com/wildflowerscommunity/",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Scout hut, Meads Lane",
          addressLocality: "Wheathampstead",
          addressRegion: "St Albans",
          postalCode: "AL4 8BW",
          addressCountry: "GB",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "51.813108570558185",
          longitude: "-0.2897190754087065",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://wildflowerscommunity.uk/#website",
        url: "https://wildflowerscommunity.uk",
        name: "Wild Flowers Community",
        publisher: {
          "@id": "https://wildflowerscommunity.uk/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://wildflowerscommunity.uk/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
