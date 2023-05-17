import { NextSeo } from 'next-seo';

const CareerMetadata = () => {
  return (
    <>
      <NextSeo
        title="Join Our Team and Help Unlock Africa's Potential | DrugStoc Careers"
        description="Unlock Africa's potential and solve healthcare challenges with a team of bright minds. Join us and enjoy comprehensive medical insurance, flexible working hours for new parents, learning and development opportunities, and more. Check out our available vacancies and apply now."
        keyword={[
          'Careers',
          'Healthcare',
          'African potential',
          'Opportunities',
          'Benefits',
          'Learning and development',
          'Smart colleagues',
          'Family-friendly',
          'Work-life balance',
          'Purpose',
          'Well-being',
          'Scale',
          'Impact',
          'Africa',
        ]}
        openGraph={{
          url: 'https://drugstoc.com/careers',
          title:
            "Join Our Team and Help Unlock Africa's Potential | DrugStoc Careers",
          description:
            "Unlock Africa's potential and solve healthcare challenges with a team of bright minds. Join us and enjoy comprehensive medical insurance, flexible working hours for new parents, learning and development opportunities, and more. Check out our available vacancies and apply now.",
          images: [
            {
              url: 'https://res.cloudinary.com/bizstak/image/upload/v1682895328/drugstoc-careers-facebook_py2etw.jpg',
              width: 1200,
              height: 630,
              alt: 'DrugStoc social media thumbnail (facebook open graph) at 1200 x 630 dimension for the careers page showing text "the leading pharmacy partner for healthcare providers in africa".',
            },
          ],
          siteName: 'Drugstoc Career',
        }}
        twitter={{
          url: 'https://drugstoc.com/careers',
          description:
            "Unlock Africa's potential and solve healthcare challenges with a team of bright minds. Join us and enjoy comprehensive medical insurance, flexible working hours for new parents, learning and development opportunities, and more. Check out our available vacancies and apply now.",
          title:
            "Join Our Team and Help Unlock Africa's Potential | DrugStoc Careers",
          image: {
            url: 'https://res.cloudinary.com/bizstak/image/upload/v1683150717/drugstoc-careers-twitter_w1f7lc.jpg',
            width: 1200,
            height: 675,
            alt: 'DrugStoc social media thumbnail (twitter card) at 1200 x 675 dimension for the careers page showing text "the leading pharmacy partner for healthcare providers in africa".',
          },
        }}
      />
    </>
  );
};

export default CareerMetadata;
