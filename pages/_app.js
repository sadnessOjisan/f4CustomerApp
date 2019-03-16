import App, { Container } from "next/app";
import getConfig from "next/config";
import React from "react";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
    console.log(serverRuntimeConfig.mySecret); // Will only be available on the server side
    console.log(publicRuntimeConfig.staticFolder); // Will be available on both server and client
    console.log("process: ", process);
    console.log("process.env: ", process.env);
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
