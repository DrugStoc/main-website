import { NextSeo } from 'next-seo';

const PrivacyMetadata = () => {
  return (
    <>
      <NextSeo
        title="Privacy Policy for Drugstoc Ehub Limited | DrugStoc Privacy"
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
          url: 'https://drugstoc.com/privacy',
          title: 'Privacy Policy for Drugstoc Ehub Limited | DrugStoc Privacy',
          description:
            'Drugstoc Ehub Ltd lawfully collects and processes your personal data in accordance with the Nigerian data protection regulation. You have rights to access, rectify, and delete your data, and we retain it for reasonable business needs or as required by law. Our privacy policy is transparent and ensures secure data processing.',
          images: [
            {
              url: 'https://res.cloudinary.com/bizstak/image/upload/v1684318948/DrugStoc_Privacy_Policy_x9yv7s.png',
              width: 1200,
              height: 630,
              alt: 'DrugStoc social media thumbnail (facebook open graph) at 1200 x 630 dimension for the privacy policy page showing text "DrugStoc Privacy Policy" on a blue background.',
            },
          ],
          siteName: 'Drugstoc Privacy',
        }}
        twitter={{
          url: 'https://drugstoc.com/privacy',
          title: 'Privacy Policy for Drugstoc Ehub Limited | DrugStoc Privacy',
          image: {
            url: 'https://res.cloudinary.com/bizstak/image/upload/v1684324218/DrugStoc_privacy_policy_2_axjokd.png',
            width: 1200,
            height: 675,
            alt: 'DrugStoc social media thumbnail (twitter Card) at 1200 x 675 dimension for the privacy policy page showing text "DrugStoc Privacy Policy" on a blue background.',
          },
        }}
      />
    </>
  );
};

export default PrivacyMetadata;
