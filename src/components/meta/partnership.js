import { NextSeo } from 'next-seo';

const PartnershipMetadata = () => {
  return (
    <>
      <NextSeo
        title="Partnership | Inclusive Healthcare Supply Chain Partnerships | DrugStoc"
        description="DrugStoc partners with mission-driven organizations to build an inclusive supply chain for affordable and genuine medications in emerging economies. We work with over 400 pharmaceutical companies to deliver anti-counterfeit drugs to last-mile patients. Contact us today to learn more"
        keyword={[
          'healthcare partnerships',
          'mission-driven healthcare partnerships',
        ]}
        openGraph={{
          url: 'https://drugstoc.com/partnerships',
          title:
            'Partnership | Inclusive Healthcare Supply Chain Partnerships | DrugStoc',
          description:
            'DrugStoc partners with mission-driven organizations to build an inclusive supply chain for affordable and genuine medications in emerging economies. We work with over 400 pharmaceutical companies to deliver anti-counterfeit drugs to last-mile patients. Contact us today to learn more',
          images: [
            {
              url: 'https://res.cloudinary.com/bizstak/image/upload/v1682949973/drugstoc-partnership-facebook_ksya8u.jpg',
              width: 1200,
              height: 630,
              alt: 'DrugStoc social media thumbnail (facebook open graph) at 1200 x 630 dimension for the partnership page showing text "we are transforming pharmaceutical procurement and healthcare practice in africa"',
            },
          ],
          siteName: 'Drugstoc',
        }}
        twitter={{
          url: 'https://drugstoc.com/partnerships',
          title:
            'Partnership | Inclusive Healthcare Supply Chain Partnerships | DrugStoc',
          image: {
            url: 'https://res.cloudinary.com/bizstak/image/upload/v1682949985/drugstoc-partnership-twitter_yi4cdj.jpg',
            width: 1200,
            height: 675,
            alt: 'DrugStoc social media thumbnail (twitter card) at 1200 x 675 dimension for the partnership page showing text "we are transforming pharmaceutical procurement and healthcare practice in africa".',
          },
        }}
      />
    </>
  );
};

export default PartnershipMetadata;
