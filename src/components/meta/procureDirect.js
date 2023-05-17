import { NextSeo } from 'next-seo';

const ProcureDirectMetadata = () => {
  return (
    <>
      <NextSeo
        title="Procure Direct: Reliable Medication Supply for Your Practice | DrugStoc Procure Direct"
        description="Never run out of medications for your practice. Procure Direct offers reliable supply chain solutions and ISO-certified services."
        keyword={[
            'Procure Direct', 'medications', 'practice', 'pharmaceutical products', 'supply chain', 'ISO certified'
        ]}
        openGraph={{
          url: 'https://drugstoc.com/procure-direct',
          title:
            'Procure Direct: Reliable Medication Supply for Your Practice | DrugStoc Procure Direct',
            description: "Never run out of medications for your practice. Procure Direct offers reliable supply chain solutions and ISO-certified services.",
          images: [
            {
              url: 'https://res.cloudinary.com/bizstak/image/upload/v1684319884/DrugStoc_Procure_Direct_xhzgdx.png',
              width: 1200,
              height: 630,
              alt: 'DrugStoc social media thumbnail (facebook open graph) at 1200 x 630 dimension for the Procure Direct page showing text "DrugStoc Procure Direct" on a blue background.',
            },
          ],
          siteName: 'Drugstoc Procure Direct',
        }}
        twitter={{
          url: 'https://drugstoc.com/procure-direct',
          title:
            'Procure Direct: Reliable Medication Supply for Your Practice | DrugStoc Procure Direct',
          image: {
            url: 'https://res.cloudinary.com/bizstak/image/upload/v1684324105/DrugStoc_procure_direct_2_r0fqnw.png',
            width: 1200,
            height: 675,
            alt: 'DrugStoc social media thumbnail (twitter Card) at 1200 x 675 dimension for the market access page showing text "DrugStoc Procure Direct" on a blue background.',
          },
        }}
      />
    </>
  );
};

export default ProcureDirectMetadata;
