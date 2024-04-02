import Head from "next/head";

const SEOHead = ({ title, description, url, imageUrl }) => {
  return (
    <Head>
      {/* Grundlegende Tags */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Merle Wagemann" />

      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

      <title>{title || "Merle Wagemann | UX Designer Portfolio"}</title>

      <meta
        name="description"
        content={
          description ||
          "Dies ist die Portfolio-Website von Merle Wagemann, einer erfahrenen UX Designerin mit einem Hintergrund im Kundenservice und E-Commerce."
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
          "Dies ist die Portfolio-Website von Merle Wagemann, einer erfahrenen UX Designerin mit einem Hintergrund im Kundenservice und E-Commerce."
        }
      />
      <meta property="og:url" content={url || "https://www.merlewagemann.de"} />
      <meta
        property="og:image"
        content={imageUrl || "https://www.merlewagemann.de/path/to/your/portfolio-image.png"}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Tags */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content={title || "Merle Wagemann | UX Designer Portfolio"}
      />
      <meta
        property="twitter:description"
        content={
          description ||
          "Dies ist die Portfolio-Website von Merle Wagemann, einer erfahrenen UX Designerin mit einem Hintergrund im Kundenservice und E-Commerce."
        }
      />
      <meta
        property="twitter:image"
        content={imageUrl || "https://www.merlewagemann.de/path/to/your/portfolio-image.png"}
      />
      <meta property="twitter:image:width" content="1200" />
      <meta property="twitter:image:height" content="630" />

      {/* Canonical Tag */}
      <link rel="canonical" href={url || "https://www.merlewagemann.de"} />
    </Head>
  );
};

export default SEOHead;
