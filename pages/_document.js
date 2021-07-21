import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" className="refresh h-full bg-gray-70 snippet-html js-focus-visible" style={{ scrollBehavior: 'smooth' }}>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/icons/site.webmanifest" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#fff"></meta>
          <meta name="theme-color" content="#fff"></meta>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-177599995-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config',  'UA-177599995-1');
        `,
            }}
          />
          <script async src="https://cdn.splitbee.io/sb.js"></script>
        </Head>
        <body className="antialiased font-sans bg-gray-50 border-blue-900 border-8">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument