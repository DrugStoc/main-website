import { NextSeo } from 'next-seo';

const HomeMetadata = () => {
  return (
    <>
      <NextSeo
        title="Home | Anti-Counterfeit Supply Chain for Healthcare Providers | DrugStoc"
        description="Get high-quality healthcare products, medicines, and supplies from Africa's leading e-healthcare pharmaceutical distribution company. Choose DrugStoc for safe, reliable, and innovative healthcare solutions."
        keyword={[
          'Anti-counterfeit supply chain',
          'Healthcare providers',
          'Emerging economies',
          'Pharmaceutical procurement',
          'Medical products',
          'Trusted brands',
          'Medical consumables',
          'Rare medication',
          'Small medical devices',
          'Inventory financing',
          'Collateral-free loans',
          'DrugStoc Credit',
          'Last mile delivery',
          'Global brands',
          'Forward-thinking solutions',
          'Seamless platform',
          'Ominichannel access',
          'Smart payment solutions',
          'Patient services',
        ]}
        openGraph={{
          url: 'https://drugstoc.com/',
          title:
            'Home | Anti-Counterfeit Supply Chain for Healthcare Providers | DrugStoc',
          description:
            "Get high-quality healthcare products, medicines, and supplies from Africa's leading e-healthcare pharmaceutical distribution company. Choose DrugStoc for safe, reliable, and innovative healthcare solutions.",
          images: [
            {
              url: 'https://res.cloudinary.com/bizstak/image/upload/v1681940994/drugstoc-home_maw2dg.png',
              width: 1200,
              height: 630,
              alt: 'DrugStoc social media thumbnail (facebook open graph) at 1200 x 630 dimension for the home page showing female doctor and the text "empowering healthcare providers across africa".',
            },
          ],
          siteName: 'Drugstoc',
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@DrugStocHQ',
          site: '@Drugstoc',
          title:
            'Home | Anti-Counterfeit Supply Chain for Healthcare Providers | DrugStoc',
          image: {
            url: 'https://res.cloudinary.com/bizstak/image/upload/v1681940981/drugstoc-twitter_okreqx.png',
            width: 1200,
            height: 675,
            alt: 'DrugStoc social media thumbnail (twitter card) at 1200 x 675 dimension for the home page showing female doctor and the text "empowering healthcare providers across africa".',
          },
        }}
      />
    </>
  );
};

export default HomeMetadata;
