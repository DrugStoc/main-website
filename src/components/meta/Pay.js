import { NextSeo } from 'next-seo';

const PayMetadata = () => {
  return (
    <>
      <NextSeo
        title="Hassle-Free Financing for Healthcare Businesses | DrugStoc Pay"
        description="Access interest-free credit with DrugStoc Pay for instant financing. No deposit required. Flexible repayment options."
        keyword={[
            'DrugStoc Pay', 'financing', 'healthcare business', 'instant loans', 'flexible repayment options'
        ]}
        openGraph={{
          url: 'https://drugstoc.com/drugstocpay',
          title:
            'Hassle-Free Financing for Healthcare Businesses | DrugStoc Pay',
            description: "Access interest-free credit with DrugStoc Pay for instant financing. No deposit required. Flexible repayment options.",
          images: [
            {
              url: 'https://res.cloudinary.com/bizstak/image/upload/v1684320193/DrugStoc_Pay_g2tgrg.png',
              width: 1200,
              height: 630,
              alt: 'DrugStoc social media thumbnail (facebook open graph) at 1200 x 630 dimension for the drugstoc pay page showing text "DrugStoc Pay" on a blue background.',
            },
          ],
          siteName: 'Drugstoc Pay',
        }}
        twitter={{
          url: 'https://drugstoc.com/drugstocpay',
          title:
            'Hassle-Free Financing for Healthcare Businesses | DrugStoc Pay',
          image: {
            url: 'https://res.cloudinary.com/bizstak/image/upload/v1684324553/DrugStoc_pay_1_w7hjuw.png',
            width: 1200,
            height: 675,
            alt: 'DrugStoc social media thumbnail (twitter Card) at 1200 x 675 dimension for the drugstoc pay page showing text "DrugStoc Pay" on a blue background.',
          },
        }}
      />
    </>
  );
};

export default PayMetadata;
