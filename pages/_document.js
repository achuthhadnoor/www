import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" className="refresh h-full bg-gray-70 snippet-html js-focus-visible">
        <Head />
        <body className="antialiased font-sans bg-gray-70">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument