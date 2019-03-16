// @flow

import * as React from "react";

class Hello extends React.Component {
  componentDidMount() {
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
