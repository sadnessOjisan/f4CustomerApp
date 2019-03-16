import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import withReduxStore from "../redux/with-redux-store";
import withReduxSaga from "next-redux-saga";
import reset from "../vendor/reset.css";
import normal from "../vendor/normal.css";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(withReduxSaga(MyApp));
