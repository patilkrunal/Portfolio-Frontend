// import React from "react";
// import PropTypes from "prop-types";
// import { Helmet } from "react-helmet";
// import "../styles/bootstrap.min.css";

// export const SEO = ({ description, lang, meta, title }) => {
//   const metaDescription = description + " | ";

//   return (
//     <Helmet
//       htmlAttributes={{
//         lang,
//       }}
//       title={title}
//       meta={[
//         {
//           name: `description`,
//           content: metaDescription,
//         },
//         {
//           name: `image`,
//           property: `image`,
//         },
//         {
//           property: `og:title`,
//         },
//         {
//           property: `og:description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:type`,
//           content: `website`,
//         },
//         {
//           name: `og:image`,
//           property: `og:image`,
//         },
//         {
//           name: `twitter:card`,
//           content: `summary`,
//         },
//         {
//           name: `twitter:creator`,
//         },
//         {
//           name: `twitter:title`,
//         },
//         {
//           name: `twitter:description`,
//           content: metaDescription,
//         },
//         {
//           name: `twitter:image`,
//         },
//       ].concat(meta)}
//     />
//   );
// };

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
// };

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// };

// export default SEO;
