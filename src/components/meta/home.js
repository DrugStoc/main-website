import { NextSeo } from 'next-seo';

const HomeMetadata = () => {
  return (
    <>
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
              url: 'https://res.cloudinary.com/bizstak/image/upload/v1681940994/drugstoc-home_maw2dg.png',
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
          image: {
            url: 'https://res.cloudinary.com/bizstak/image/upload/v1681940981/drugstoc-twitter_okreqx.png',
            width: 1200,
            height: 675,
            alt: 'Image description',
          },
        }}
      />
    </>
  );
};

export default HomeMetadata;
