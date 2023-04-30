import Head from 'next/head';
import { NextSeo } from 'next-seo';

const HomeMetadata = () => {
  return (
    <>
      <NextSeo
        title="Home | Anti-Counterfeit Supply Chain for Healthcare Providers | Drugstoc"
        description="Get high-quality healthcare products, medicines, and supplies from Africa's leading e-healthcare pharmaceutical distribution company. Choose DrugStoc for safe, reliable, and innovative healthcare solutions."
        openGraph={{
          url: 'https://drugstoc.com/',
          title:
            'Anti-Counterfeit Supply Chain for Healthcare Providers | Drugstoc',
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
        }}
      />
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}')
            `,
          }}
        />
      </Head>
    </>
  );
};

export default HomeMetadata;
