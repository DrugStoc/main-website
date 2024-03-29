import { NextSeo } from 'next-seo';

const AboutMetadata = () => {
  return (
    <>
      <NextSeo
        title="Tech-Enabled Procurement Partner in Africa | DrugStoc About"
        description="DrugStoc is a tech-enabled procurement partner for pharmaceutical and consumer health companies in Africa. They use technology, supply chain innovation, financial solutions, and product knowledge to increase access to medications. Their goal is to empower healthcare providers and revolutionize the way they interface with the pharmaceutical market. DrugStoc has won awards and is backed by experienced investors in the healthcare sector. The team is composed of doctors, pharmacists, engineers, financial analysts, and innovators. Visit their website to learn more and explore career opportunities."
        keyword={[
          'DrugStoc',
          'healthcare',
          'medication',
          'emerging economies',
          'Africa, supply chains',
          'pharmaceutical market',
          'technology',
          'financial solutions',
          'procurement partner',
          'investors',
          'doctors',
          'pharmacists',
          'engineers',
          'financial analysts',
          'innovators',
        ]}
        openGraph={{
          url: 'https://drugstoc.com/about',
          title: 'Tech-Enabled Procurement Partner in Africa | DrugStoc About',
          description:
            'DrugStoc is a tech-enabled procurement partner for pharmaceutical and consumer health companies in Africa. They use technology, supply chain innovation, financial solutions, and product knowledge to increase access to medications. Their goal is to empower healthcare providers and revolutionize the way they interface with the pharmaceutical market. DrugStoc has won awards and is backed by experienced investors in the healthcare sector. The team is composed of doctors, pharmacists, engineers, financial analysts, and innovators. Visit their website to learn more and explore career opportunities.',
          images: [
            {
              url: 'https://res.cloudinary.com/bizstak/image/upload/v1682893495/drugstoc-about-facebook_wbkqll.jpg',
              width: 1200,
              height: 630,
              alt: 'DrugStoc social media thumbnail (facebook open graph) at 1200 x 630 dimension showing text "the leading pharmacy partner for healthcare providers in africa".',
            },
          ],
          siteName: 'Drugstoc About Us',
        }}
        twitter={{
          url: 'https://drugstoc.com/about',
          title: 'Tech-Enabled Procurement Partner in Africa | DrugStoc About',
          description:
            'DrugStoc is a tech-enabled procurement partner for pharmaceutical and consumer health companies in Africa. They use technology, supply chain innovation, financial solutions, and product knowledge to increase access to medications. Their goal is to empower healthcare providers and revolutionize the way they interface with the pharmaceutical market. DrugStoc has won awards and is backed by experienced investors in the healthcare sector. The team is composed of doctors, pharmacists, engineers, financial analysts, and innovators. Visit their website to learn more and explore career opportunities.',
          image: {
            url: 'https://res.cloudinary.com/bizstak/image/upload/v1682893568/drugstoc-about-twitter_epc0rs.jpg',
            width: 1200,
            height: 675,
            alt: 'DrugStoc social media thumbnail (twitter card) at 1200 x 675 dimension showing text "the leading pharmacy partner for healthcare providers in africa".',
          },
        }}
      />
    </>
  );
};

export default AboutMetadata;
