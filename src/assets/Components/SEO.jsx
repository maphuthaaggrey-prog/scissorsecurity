import { Helmet } from "react-helmet";

const SEO = ({ 
  title = "Scissor Security Technology (Pty) - Operates as an active business in South Africa.",
  description = "Scissor Security Technology (Pty) Ltd is a registered South African private company providing professional security and access solutions for homes and businesses.",
  canonical = "https://www.scissor-security.co.za/",
  image = "/logo.png"
}) => {
  return (
    <Helmet>
      {/* Page-specific title and description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default SEO;