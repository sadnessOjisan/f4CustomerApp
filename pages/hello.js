// @flow

import * as React from "react";
import getConfig from "next/config";

class Hello extends React.Component {
  componentDidMount() {
    const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
    console.log(serverRuntimeConfig.mySecret); // Will only be available on the server side
    console.log(publicRuntimeConfig.staticFolder); // Will be available on both server and client
    console.log("process: ", process);
    console.log("process.env: ", process.env);
  }

  render() {
    return (
      <div className="wrapper">
        hell0
        <style jsx>{`
          .wrapper {
            display: flex;
          }
        `}</style>
      </div>
    );
  }
}

export default Hello;
