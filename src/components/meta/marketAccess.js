import { NextSeo } from 'next-seo';

const MarketAccessMetadata = () => {
  return (
    <>
      <NextSeo
        title="Market Access for African Market: Reach Your Target Audience | DrugStoc Market Access"
        description="Expand your market presence in Africa with data-driven market access solutions. Reach your target audience effectively."
        keyword={[
            'African market', 'market access', 'products', 'target audience', 'data-driven insights', 'hybrid distribution model'
        ]}
        openGraph={{
          url: 'https://drugstoc.com/market-access',
          title:
            'Market Access for African Market: Reach Your Target Audience | DrugStoc Home',
          description:
            "Expand your market presence in Africa with data-driven market access solutions. Reach your target audience effectively.",
          images: [
            {
              url: 'https://res.cloudinary.com/bizstak/image/upload/v1684318767/DrugStoc_Market_Access_di2aas.png',
              width: 1200,
              height: 630,
              alt: 'DrugStoc social media thumbnail (facebook open graph) at 1200 x 630 dimension for the market access page showing text "DrugStoc Market Access" on a blue background.',
            },
          ],
          siteName: 'Drugstoc Market Access',
        }}
        twitter={{
          url: 'https://drugstoc.com/market-access',
          title:
            'Market Access for African Market: Reach Your Target Audience | DrugStoc Home',
          image: {
            url: 'https://res.cloudinary.com/bizstak/image/upload/v1684324644/DrugStoc_market_access_1_uhc6nl.png',
            width: 1200,
            height: 675,
            alt: 'DrugStoc social media thumbnail (twitter Card) at 1200 x 675 dimension for the market access page showing text "DrugStoc Market Access" on a blue background.',
          },
        }}
      />
    </>
  );
};

export default MarketAccessMetadata;
