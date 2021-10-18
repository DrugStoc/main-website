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
          <meta
            name="keywords"
            content="Used, Grade, iPhones, Bulk, Electronics, Samsung Galaxy, wholesale, quantity, online"
          />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="robots" content="index, nofollow" />
          <meta name="apple-mobile-web-app-title" content="Eze" />

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
              '@context' : 'http://schema.org',
              '@type' : 'Organization',
              'name' : 'Ezewholesale',
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
