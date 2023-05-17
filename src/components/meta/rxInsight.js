import { NextSeo } from 'next-seo';

const RXInsightMetadata = () => {
  return (
    <>
      <NextSeo
        title="Data-Driven Market Insights for Pharmaceutical Companies | DrugStoc RX Insight"
        description="Gain powerful data-driven insights for pharmaceutical companies to make informed decisions and uncover market potential."
        keyword={[
            'market insights', 'pharmaceutical companies', 'data-driven insights', 'decision making', 'market potential'
        ]}
        openGraph={{
          url: 'https://drugstoc.com/rx-insight',
          title:
            'Data-Driven Market Insights for Pharmaceutical Companies | DrugStoc RX Insight',
            description: "Gain powerful data-driven insights for pharmaceutical companies to make informed decisions and uncover market potential.",
          images: [
            {
              url: 'https://res.cloudinary.com/bizstak/image/upload/v1684321112/DrugStoc_RX_Insight_sdpigs.png',
              width: 1200,
              height: 630,
              alt: 'DrugStoc social media thumbnail (facebook open graph) at 1200 x 630 dimension for the RX Insight page showing text "DrugStoc RX Insight" on a blue background.',
            },
          ],
          siteName: 'Drugstoc RX Insight',
        }}
        twitter={{
          url: 'https://drugstoc.com/rx-insight',
          title:
            'Data-Driven Market Insights for Pharmaceutical Companies | DrugStoc RX Insight',
          image: {
            url: 'https://res.cloudinary.com/bizstak/image/upload/v1684323965/DrugStoc_rx_insight_1_sbaxt5.png',
            width: 1200,
            height: 675,
            alt: 'DrugStoc social media thumbnail (twitter Card) at 1200 x 675 dimension for the RX Insight page showing text "DrugStoc RX Insight" on a blue background.',
          },
        }}
      />
    </>
  );
};

export default RXInsightMetadata;
