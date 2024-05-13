import Head from "next/head";

const SEOHead = ({ title, description, url, imageUrl }) => {
  return (
    <Head>
      {/* Grundlegende Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Merle Wagemann" />
      <meta name="language" content="German" />

      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      <title>{title || "Merle Wagemann | UX Designer Portfolio"}</title>

      <meta
        name="description"
        content={
          description ||
          "Willkommen auf der Portfolio-Website von Merle Wagemann, einer erfahrenen UX Designerin mit einem Hintergrund im Kundenservice und E-Commerce."
        }
      />
      <meta
        name="keywords"
        content="UX Design, User Experience, Portfolio, Merle Wagemann, E-Commerce, Kundenservice"
      />

      {/* OpenGraph Tags */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={title || "Merle Wagemann | UX Designer Portfolio"}
      />
      <meta
        property="og:description"
        content={
          description ||
          "Willkommen auf der Portfolio-Website von Merle Wagemann, einer erfahrenen UX Designerin mit einem Hintergrund im Kundenservice und E-Commerce."
        }
      />
      <meta property="og:url" content={url || "https://www.merlewagemann.de"} />
      <meta
        property="og:image"
        content={
          imageUrl ||
          "https://www.merlewagemann.de/path/to/your/portfolio-image.png"
        }
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={title || "Merle Wagemann | UX Designer Portfolio"}
      />
      <meta
        name="twitter:description"
        content={
          description ||
          "Willkommen auf der Portfolio-Website von Merle Wagemann, einer erfahrenen UX Designerin mit einem Hintergrund im Kundenservice und E-Commerce."
        }
      />
      <meta
        name="twitter:image"
        content={
          imageUrl ||
          "https://www.merlewagemann.de/path/to/your/portfolio-image.png"
        }
      />
      <meta property="twitter:image:width" content="1200" />
      <meta property="twitter:image:height" content="630" />

      {/* Canonical Tag */}
      <link rel="canonical" href={url || "https://www.merlewagemann.de"} />
    </Head>
  );
};

export default SEOHead;
