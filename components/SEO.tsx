import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  url?: string;
};

const SEO = ({ title, description, url }: SEOProps) => {
  const siteUrl = "https://novexisstudios.in";
  const defaultDescription =
    "Novexis Studios | AI, Dev, Video, Marketing, Design & Creative Content Systems";
  const ogImage = `${siteUrl}/og-image.jpg`; // Make sure this exists in public/

  return (
    <Helmet key={title}>
      {" "}
      {/* Add the 'key' here */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url ? siteUrl + url : siteUrl} />
      {/* Social Preview */}
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url ? siteUrl + url : siteUrl} />
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
