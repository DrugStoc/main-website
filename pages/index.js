/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';

/* -------------------------- Internal Dependencies ------------------------- */
import Home from 'pages/home';
import Layout from 'components/layout';

export default function HomePage() {
  return (
    <Layout title="Home">
      <Home />
    </Layout>
  );
}
