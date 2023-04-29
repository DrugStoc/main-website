import React from 'react';
import { Helmet } from 'react-helmet';

const FacebookMetadata = () => {
  return (
    <Helmet>
      <meta
        property="og:title"
        content="Anti-Counterfeit Supply Chain for Healthcare Providers | Drugstoc"
      />
      <meta
        property="og:description"
        content="Drugstoc provides anti-counterfeit supply chain solutions for healthcare providers in emerging economies. Download the Drugstoc app for Android and iOS."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/bizstak/image/upload/v1681940994/drugstoc-home_maw2dg.png"
      />
      <meta property="og:url" content="https://drugstoc.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
  );
};

const TwitterMetadata = () => {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Anti-Counterfeit Supply Chain for Healthcare Providers | Drugstoc"
      />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/bizstak/image/upload/v1681940981/drugstoc-twitter_okreqx.png"
      />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="675" />
      <meta
        name="twitter:image:alt"
        content="Empowering Health Care Providers Across Africa - A Doctor Holding a Paper"
      />
    </Helmet>
  );
};


export {
  FacebookMetadata,
  TwitterMetadata,
};
