import React from 'react';
import Home from 'pages/home';
import Layout from 'components/layout';
// import Modal from 'components/modal';

export default function HomePage() {
  return (
    <Layout title="Home">
      <Modal />
      <Home />
    </Layout>
  );
}
