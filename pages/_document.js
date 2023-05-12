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
    const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID || 932119468028545;
    const TIDIO_CHAT_CODE =
      process.env.TIDIO_CHAT_CODE || 'ogocxh3zcgb4cdykhwgct7zwamm62w9e';
    const GA_TRACKING_ID = process.env.GA_TRACKING_ID || 'G-K54ZBTBTQL';
    const GOOGLE_SITE_VERIFICATION =
      process.env.GOOGLE_SITE_VERIFICATION ||
      'YxcXtu0Zz5s25clei5L1g6OQV_bZnLCSpAZhQILtpSk';
    return (
      <Html lang="en">
        <Head>
          {this.props.styleTags}
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta
            name="google-site-verification"
            content={GOOGLE_SITE_VERIFICATION}
          />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="article:tag" content="HTML" />
          <meta name="article:tag" content="Schema.org" />
          <meta name="article:tag" content="SEO" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
            as="font"
          />
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
          <link
            rel="preload"
            href="https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk3wotYKNnBQ.woff2"
            as="font"
            type="font/woff2"
            crossOrigin
          />
          <script async src={`https://code.tidio.co/${TIDIO_CHAT_CODE}.js`} />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}')
            `,
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'DrugStoc',
                url: 'https://drugstoc.com',
              }),
            }}
          />
          <script
            async
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js"
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                window.fbAsyncInit = function() {
                  FB.init({
                    appId      : '${FACEBOOK_APP_ID}',
                    xfbml      : true,
                    version    : 'v11.0'
                  });
                };
              `,
            }}
          />
        </Head>
        <body>
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
