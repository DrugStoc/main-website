/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import Document, { Head, Main, NextScript, Html } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {this.props.styleTags}
          <meta name="title" content="DrugStoc | Anti Counterfeit Pharmaceuticals, Medical Devices & Consumables" />
          <meta name="description" content="DrugStoc is Africa's leading e-healthcare pharmaceutical distribution company. Our anti-counterfeit pharmaceuticals, healthcare services, medical supplies and equipment help address the challenges in the pharmaceutical supplychain." />
          <meta name="keywords" content="top pharmaceutical distribution company, best pharmaceutical distribution company in Nigeria, pharmaceutical company, pharmaceutical supply company lagos,anti-counterfeit supply chain, best pharmaceutical supply chain company, wholesale pharmacy in nigeria, medical devices, consumables, pharmaceutical wholesalers in lagos, pharmaceutical supply companies near lekki, where to buy wholesale drugs in lagos" />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="google-site-verification" content="YxcXtu0Zz5s25clei5L1g6OQV_bZnLCSpAZhQILtpSk" />
          <meta name="mobile-web-app-capable" content="yes" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            media="print"
            onLoad="this.media='all'"
          />

          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          />

          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#0855ba" name="theme-color" />
          <meta content="#0855ba" name="msapplication-TileColor" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: ` {
              '@type' : 'Organization',
              'name' : 'DrugStoc',
              'url' : 'https://www.drugstoc.com/',
              'sameAs' : [
                'https://www.facebook.com/drugstoc',
                'https://twitter.com/drugstoc',
                'https://www.linkedin.com/company/drugstoc',
                'http://instagram.com/drugstoc
              ]
            }`,
            }}
          />
        </Head>
        <body>
          <HackyFixFOUC />
          <Main />
          <NextScript />
        </body>
        <script type="text/javascript" async="" src="//code.tidio.co/ogocxh3zcgb4cdykhwgct7zwamm62w9e.js"></script>
      </Html>
    );
  }
}

/**
 * CH34351: We are experiencing a FOUC ("flash of unstyled content") with
 * NextJS. The exact cause is unknown, but it appears to be a bug in NextJS
 * itself.
 *
 * @see https://github.com/vercel/next.js/issues/18769
 * @see https://github.com/vercel/next.js/issues/15642#issuecomment-710747889 (the hacky fix)
 */
function HackyFixFOUC() {
  return <script>0</script>;
}
