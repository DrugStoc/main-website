import { NextSeo } from 'next-seo';

const HomeMetadata = () => {
  return (
    <>
      <NextSeo
        title="Home | Anti-Counterfeit Supply Chain for Healthcare Providers"
        description="Get high-quality healthcare products from Africa's leading e-healthcare pharmaceutical distributor. Choose DrugStoc for reliable, innovative solutions."
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
            'Home | Anti-Counterfeit Supply Chain for Healthcare Providers',
          description:
            "Get high-quality healthcare products from Africa's leading e-healthcare pharmaceutical distributor. Choose DrugStoc for reliable, innovative solutions.",
          images: [
            {
              url: 'https://res.cloudinary.com/bizstak/image/upload/v1683018234/drugstoc-facebook-home_y8q8sw.jpg',
              width: 1200,
              height: 630,
              alt: 'DrugStoc social media thumbnail (facebook open graph) at 1200 x 630 dimension for the home page showing female doctor and the text "empowering healthcare providers across africa".',
            },
          ],
          siteName: 'Drugstoc',
        }}
        twitter={{
          title:
            'Home | Anti-Counterfeit Supply Chain for Healthcare Providers',
          image: {
            url: 'https://res.cloudinary.com/bizstak/image/upload/v1683018219/drugstoc-twitter-home_akhnfk.jpg',
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
