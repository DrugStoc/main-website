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
  description = 'Tech-enabled supply chain for healthcare providers in emerging Economies',
  canonical = 'https://drugstoc.com',
}) => {
  return (
    <Head>
      <title>{title} | DrugStoc</title>
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
        content="https://i.ibb.co/Tg2J839/Group-7149.png"
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
