import { NextSeo } from 'next-seo';

const PMetadata = () => {
  return (
    <>
      <NextSeo
        title="Privacy |  Privacy Policy for Drugstoc Ehub Limited"
        description="Drugstoc Ehub Ltd lawfully collects and processes your personal data in accordance with the Nigerian data protection regulation. You have rights to access, rectify, and delete your data, and we retain it for reasonable business needs or as required by law. Our privacy policy is transparent and ensures secure data processing."
        keyword={[
          'personal data',
          'lawful processing',
          'regulatory requirements',
          'access rights',
          'rectify',
          'delete',
          'retain data',
          'reasonable business needs',
          'legal obligation',
          'consent',
          'transfer',
          'restrict processing',
          'privacy policy',
          'transparent processing',
          'secure processing',
          'Nigerian data protection regulation',
          'NDPR',
          'National Information Technology Agency',
          'NITDA',
        ]}
        openGraph={{
          url:
            'https://drugstoc.com/privacy' ||
            'https://drugstoc.com/privacy-policy',
          title: 'Privacy |  Privacy Policy for Drugstoc Ehub Limited',
          description:
            'Drugstoc Ehub Ltd lawfully collects and processes your personal data in accordance with the Nigerian data protection regulation. You have rights to access, rectify, and delete your data, and we retain it for reasonable business needs or as required by law. Our privacy policy is transparent and ensures secure data processing.',
          images: [
            {
              url: 'https://res.cloudinary.com/bizstak/image/upload/v1682949973/drugstoc-partnership-facebook_ksya8u.jpg',
              width: 1200,
              height: 630,
              alt: 'DrugStoc social media thumbnail (facebook open graph) at 1200 x 630 dimension for the privacy page showing text on drugstoc privacy',
            },
          ],
          siteName: 'Drugstoc',
        }}
        twitter={{
          url:
            'https://drugstoc.com/privacy' ||
            'https://drugstoc.com/privacy-policy',
          title:
            'Partnerships | Inclusive Healthcare Supply Chain Partnerships',
          image: {
            url: 'https://res.cloudinary.com/bizstak/image/upload/v1682949985/drugstoc-partnership-twitter_yi4cdj.jpg',
            width: 1200,
            height: 675,
            alt: 'DrugStoc social media thumbnail (twitter card) at 1200 x 675 dimension for the privacy page showing text on drugstoc privacy.',
          },
        }}
      />
    </>
  );
};

export default PMetadata;
