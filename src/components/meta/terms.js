import { NextSeo } from 'next-seo';

const TermsMetadata = () => {
  return (
    <>
      <NextSeo
        title="DrugStoc eCommerce Platform | DrugStoc Terms and Conditions"
        description="Read and agree to the terms and conditions of DrugStoc's eCommerce platform for wholesale and retail healthcare products."
        keyword={[
            "terms and conditions", "DrugStoc, eCommerce platform", "healthcare products", "wholesale", "retail", "procurement", "payment terms"
        ]}
        openGraph={{
          url: 'https://drugstoc.com/terms-and-conditions',
          title:
            'DrugStoc eCommerce Platform | DrugStoc Terms and Conditions',
            description: "Read and agree to the terms and conditions of DrugStoc's eCommerce platform for wholesale and retail healthcare products..",
          images: [
            {
              url: 'https://res.cloudinary.com/bizstak/image/upload/v1684321815/DrugStoc_terms_bdkoxj.png',
              width: 1200,
              height: 630,
              alt: 'DrugStoc social media thumbnail (facebook open graph) at 1200 x 630 dimension for the terms and condition page showing text "DrugStoc Terms and Conditions" on a blue background.',
            },
          ],
          siteName: 'Drugstoc Terms',
        }}
        twitter={{
          url: 'https://drugstoc.com/terms-and-conditions',
          title:
            'DrugStoc eCommerce Platform | DrugStoc Terms and Conditions',
          image: {
            url: 'https://res.cloudinary.com/bizstak/image/upload/v1684323821/DrugStoc_Terms_and_Conditions_k8qjkm.png',
            width: 1200,
            height: 675,
            alt: 'DrugStoc social media thumbnail (twitter Card) at 1200 x 675 dimension for the terms and condition page showing text "DrugStoc Terms and Conditions" on a blue background.',
          },
        }}
      />
    </>
  );
};

export default TermsMetadata;
