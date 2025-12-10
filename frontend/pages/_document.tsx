import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/light.ico" rel="icon" media="(prefers-color-scheme: light)" />
          <link href="/dark.ico" rel="icon" media="(prefers-color-scheme: dark)" />
          {/* Load any additional head HTML previously injected by Vite */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;