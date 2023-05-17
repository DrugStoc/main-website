import App from 'next/app';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DefaultSeo } from 'next-seo';
import '../styles/index.scss';
const propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.func,
  ]),
  pageProps: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DrugStoc',
  url: 'https://www.drugstoc.com/',
  logo: 'https://res.cloudinary.com/bizstak/image/upload/v1681956861/drugstoc-logo_v08uia.png',
  sameAs: [
    'https://www.facebook.com/drugstoc',
    'https://www.twitter.com/DrugStocHQ',
    'https://www.instagram.com/drugstoc',
    'https://www.linkedin.com/company/drugstoc',
  ],
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
    return (
      <>
        <DefaultSeo
          title="Anti-Counterfeit Supply Chain for Healthcare Providers | Drugstoc"
          // titleTemplate="%s | Drugstoc"
          defaultTitle="Drugstoc"
          themeColor="#ffffff"
          // dangerouslySetAllPagesToNoIndex={false}
          // dangerouslySetAllPagesToNoFollow={false}
          description="Get high-quality healthcare products, medicines, and supplies from Africa's leading e-healthcare pharmaceutical distribution company. Choose DrugStoc for safe, reliable, and innovative healthcare solutions."
          canonical="https://www.drugstoc.com/"
          keyword={[
            'top pharmaceutical distribution company',
            'best pharmaceutical distribution company in Nigeria',
            'pharmaceutical company, pharmaceutical supply company lagos',
            'anti-counterfeit supply chain',
            'best pharmaceutical supply chain company',
            'wholesale pharmacy in nigeria',
            'medical devices, consumables, pharmaceutical wholesalers in lagos',
            'pharmaceutical supply companies near lekki',
            'where to buy wholesale drugs in lagos',
          ]}
          facebook={{
            appId: FACEBOOK_APP_ID,
          }}
          openGraph={{
            type: 'website',
            locale: 'en_US',
            siteName: 'DrugStoc',
            images: [
              {
                url: 'https://res.cloudinary.com/bizstak/image/upload/v1684325968/DrugStoc_tvdmyy.png',
                width: 1200,
                height: 630,
                alt: 'DrugStoc default social media thumbnail (Open Graph) at 1200 x 630 dimension for the drugstoc page showing text "DrugStoc" on a blue background.',
              },
            ],
            description:
              "Get high-quality healthcare products, medicines, and supplies from Africa's leading e-healthcare pharmaceutical distribution company. Choose DrugStoc for safe, reliable, and innovative healthcare solutions.",
            title:
              'Anti-Counterfeit Supply Chain for Healthcare Providers | Drugstoc',
            locale: 'en_US',
            type: 'website',
            profile: {
              firstName: 'DrugStoc',
              lastName: '',
              username: 'DrugStoc',
              gender: 'Organization',
            },
            rating: {
              average: '4.5',
              count: '50',
            },
            video: {
              url: '/drugstoc.mp4',
              secure_url: '/drugstoc.mp4',
              type: 'video/mp4',
              width: 1280,
              height: 720,
              alt: 'A brief demo video of how DrugStoc works based on its Anti-counterfeit supply chain for healthcare providers',
            },
            defaultOpenGraphImageWidth: 1200,
            defaultOpenGraphImageHeight: 630,
            defaultOpenGraphVideoWidth: 1280,
            defaultOpenGraphVideoHeight: 720,
            ...structuredData,
          }}
          twitter={{
            handle: '@DrugStocHQ',
            site: '@Drugstoc',
            cardType: 'summary_large_image',
            image: {
              url: 'https://res.cloudinary.com/bizstak/image/upload/v1684325536/DrugStoc_oopy0g.png',
              width: 1200,
              height: 675,
              alt: 'DrugStoc default social media thumbnail (twitter Card) at 1200 x 675 dimension for the drugstoc page showing text "DrugStoc" on a blue background.',
            },
          }}
          mobileAlternate={{
            media: 'only screen and (max-width: 640px)',
            href: 'https://m.drugstoc.com',
          }}
        >
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta property="twitter:label1" value="Start buying on Drugstoc" />
          <meta property="twitter:label2" value="Rating" />
          <meta
            property="twitter:data2"
            value=":star::star::star::star::star:"
          />
          <meta
            name="twitter:creator"
            content="github:techstackmedia, github:bemijonathan, github:steffanie07"
          />
          <meta property="og:locale" content="en_US" />
          <meta name="twitter:site" content="@drugstoc" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="android-chrome-icon"
            sizes="512x512"
            href="https://res.cloudinary.com/bizstak/image/upload/v1683030146/android-chrome-512x512_w3xryx.png"
          />
          <link
            rel="android-chrome-icon"
            sizes="192x192"
            href="https://res.cloudinary.com/bizstak/image/upload/v1683030109/android-chrome-192x192_bvonuj.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://res.cloudinary.com/bizstak/image/upload/v1683030192/apple-touch-icon_xtoy55.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://res.cloudinary.com/bizstak/image/upload/v1683030039/favicon-32x32_x3ykld.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://res.cloudinary.com/bizstak/image/upload/v1683030076/favicon-16x16_cpmedn.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#ffffff" />
        </DefaultSeo>
        <Component {...pageProps} />
        <ToastContainer />
      </>
    );
  }
}

MyApp.propTypes = propTypes;
export default MyApp;