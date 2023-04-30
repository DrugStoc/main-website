import Head from 'next/head';
import { NextSeo } from 'next-seo';

const HomeMetadata = () => {
  return (
    <>
      {/* <meta name="twitter:title" content="JavaScript Symbol"> */}
      {/* <meta name="twitter:title" content="JavaScript Symbol"> */}
      <NextSeo
        title="Home | Anti-Counterfeit Supply Chain for Healthcare Providers"
        description="Get high-quality healthcare products, medicines, and supplies from Africa's leading e-healthcare pharmaceutical distribution company. Choose DrugStoc for safe, reliable, and innovative healthcare solutions."
        openGraph={{
          url: 'https://drugstoc.com/',
          title:
            'Home | Anti-Counterfeit Supply Chain for Healthcare Providers',
          description:
            'Drugstoc provides anti-counterfeit supply chain solutions for healthcare providers in emerging economies. Download the Drugstoc app for Android and iOS.',
          images: [
            {
              url: '../../../pages/drugstoc-v3.jpg',
              width: 1200,
              height: 630,
              alt: 'Image description',
            },
          ],
          site_name: 'Drugstoc',
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@DrugStocHQ',
          site: '@Drugstoc',
          title:
            'Home | Anti-Counterfeit Supply Chain for Healthcare Providers',
        }}
      />
    </>
  );
};

export default HomeMetadata;
