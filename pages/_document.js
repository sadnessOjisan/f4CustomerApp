import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimal-ui"
        />
        <meta name="mobile-web-app-capable" content="yes" />

        <Head>
          {this.props.styleTags}
          <link rel="manifest" href="/static/manifest.webmanifest" />
          <script
            async
            src="https://cdn.jsdelivr.net/npm/pwacompat@2.0.8/pwacompat.min.js"
            integrity="sha384-uONtBTCBzHKF84F6XvyC8S0gL8HTkAPeCyBNvfLfsqHh+Kd6s/kaS4BdmNQ5ktp1"
            crossorigin="anonymous"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/plane.png"
            sizes="128x128"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
