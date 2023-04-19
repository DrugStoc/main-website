/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

/* ----------------------------- SEO  PropTypes ----------------------------- */
const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

const SEO = ({
  title,
  description = 'DrugStoc is Africa\'s leading e-healthcare pharmaceutical distribution company specializing in anti-counterfeit pharmaceuticals, healthcare services, consumables, and medical devices',
  canonical = 'https://drugstoc.com',
}) => {
  return (
    <Head>
      <title>{title} |DrugStoc | Anti Counterfeit Pharmaceuticals, Medical Devices, Consumables</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image:width" content="773" />
      <meta property="og:image:height" content="459" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/bizstak/image/upload/v1681939339/Group-7149_nupyov.png"
      />
      <meta
        property="og:image:alt"
        content="Drugstoc.com - Empowering healthcare providers across Africa"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@drugstoc" />
      <meta name="twitter:creator" content="@drugstoc" />
      <meta property="twitter:label1" value="Start buying on Drugstoc" />
      <meta property="twitter:data1" value="https://drugstoc.com/contact" />
      <meta property="twitter:label2" value="Rating" />
      <meta property="twitter:data2" value=":star::star::star::star::star:" />
    </Head>
  );
};

SEO.propTypes = propTypes;
export default SEO;
