import React from 'react';
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
    'https://twitter.com/DrugStocHQ',
    'https://instagram.com/drugstoc',
    'https://www.linkedin.com/company/drugstoc',
  ],
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <DefaultSeo
          title="Anti-Counterfeit Supply Chain for Healthcare Providers | Drugstoc"
          titleTemplate="%s | Drugstoc"
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
            appId: '932119468028545',
          }}
          openGraph={{
            type: 'website',
            locale: 'en_US',
            siteName: 'DrugStoc',
            images: [
              // {
              //   url: 'https://res.cloudinary.com/bizstak/image/upload/v1683021032/facebook-800-600_dnqztd.png',
              //   width: 800,
              //   height: 600,
              //   alt: 'Default DrugStoc social media thumbnail at 800 x 600 dimension (a female doctor writing on board the text "Empowering healthcare providers across africa")',
              // },
              // {
              //   url: 'https://res.cloudinary.com/bizstak/image/upload/v1683020934/facebook-900-800_y62sde.png',
              //   width: 900,
              //   height: 800,
              //   alt: 'Default DrugStoc social media thumbnail at 900 x 800 dimension (a female doctor writing on board the text "Empowering healthcare providers across africa")',
              // },
              // {
              //   url: 'https://res.cloudinary.com/bizstak/image/upload/v1682879879/drugstoc-v3_z9a4v3.jpg',
              //   width: 1200,
              //   height: 630,
              //   alt: 'DrugStoc social media thumbnail (facebook open graph) at 1200 x 630 dimension showing text "the leading pharmacy partner for healthcare providers in africa".',
              // },
              {
                url: 'https://res.cloudinary.com/bizstak/image/upload/v1683018234/drugstoc-facebook-home_y8q8sw.jpg',
                width: 1200,
                height: 630,
                alt: 'Default DrugStoc social media thumbnail at 1200 x 600 dimension (a female doctor writing on board the text "Empowering healthcare providers across africa")',
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
            content="github:bemijonathan, github:lizzykate, github:techstackmedia"
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

// <!-- GTranslate: https://gtranslate.io/ -->
// <a href="#" onclick="doGTranslate('en|en');return false;" title="English" class="gflag nturl" style="background-position:-0px -0px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="English" /></a><a href="#" onclick="doGTranslate('en|fr');return false;" title="French" class="gflag nturl" style="background-position:-200px -100px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="French" /></a><a href="#" onclick="doGTranslate('en|de');return false;" title="German" class="gflag nturl" style="background-position:-300px -100px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="German" /></a><a href="#" onclick="doGTranslate('en|it');return false;" title="Italian" class="gflag nturl" style="background-position:-600px -100px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="Italian" /></a><a href="#" onclick="doGTranslate('en|pt');return false;" title="Portuguese" class="gflag nturl" style="background-position:-300px -200px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="Portuguese" /></a><a href="#" onclick="doGTranslate('en|ru');return false;" title="Russian" class="gflag nturl" style="background-position:-500px -200px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="Russian" /></a><a href="#" onclick="doGTranslate('en|es');return false;" title="Spanish" class="gflag nturl" style="background-position:-600px -200px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="Spanish" /></a>

// <br /><select onchange="doGTranslate(this);"><option value="">Select Language</option><option value="en|en">English</option><option value="en|ha">Hausa</option><option value="en|ig">Igbo</option><option value="en|yo">Yoruba</option></select><div id="google_translate_element2"></div>
// <script type="text/javascript">
// function googleTranslateElementInit2() {new google.translate.TranslateElement({pageLanguage: 'en',autoDisplay: false}, 'google_translate_element2');}
// </script><script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2"></script>

// <script type="text/javascript">
// /* <![CDATA[ */
// eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}',43,43,'||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split('|'),0,{}))
// /* ]]> */
// </script>
