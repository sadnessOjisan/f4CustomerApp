// @flow

import * as React from "react";
import getConfig from "next/config";

class Hello extends React.Component {
  componentDidMount() {
    const { publicRuntimeConfig } = getConfig();
    console.log("publicRuntimeConfig", publicRuntimeConfig); // Will be available on both server and client
    console.log("process: ", process);
    console.log("process.env: ", process.env);
  }

  render() {
    return (
      <div className="wrapper">
        hell0e
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
