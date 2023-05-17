import { NextSeo } from 'next-seo';

const ContactMetadata = () => {
  return (
    <>
      <NextSeo
        title="Contact Us - Get Answers About Our Products and Services | DrugStoc Contact Us"
        description="Need assistance? Contact us for answers about our products and services. Our experts are here to help and provide more details."
        keyword={[
            'contact us', 'products', 'services', 'client relationship', 'enquiries', 'questions', 'details'
        ]}
        openGraph={{
          url: 'https://drugstoc.com/contact',
          title:
            'Contact Us - Get Answers About Our Products and Services | DrugStoc Contact Us',
            description: "Need assistance? Contact us for answers about our products and services. Our experts are here to help and provide more details.",
          images: [
            {
              url: 'https://res.cloudinary.com/bizstak/image/upload/v1684321368/DrugStoc_Contact_Us_isbgzy.png',
              width: 1200,
              height: 630,
              alt: 'DrugStoc social media thumbnail (facebook open graph) at 1200 x 630 dimension for the contact us page showing text "DrugStoc Contact Us" on a blue background.',
            },
          ],
          siteName: 'Drugstoc Contact Us',
        }}
        twitter={{
          url: 'https://drugstoc.com/contact',
          title:
            'Contact Us - Get Answers About Our Products and Services | DrugStoc Contact Us',
          image: {
            url: 'https://res.cloudinary.com/bizstak/image/upload/v1684324738/DrugStoc_contact_us_1_x9zzdk.png',
            width: 1200,
            height: 675,
            alt: 'DrugStoc social media thumbnail (twitter Card) at 1200 x 675 dimension for the contact us page showing text "DrugStoc Contact Us" on a blue background.',
          },
        }}
      />
    </>
  );
};

export default ContactMetadata;
