// @flow

import * as React from "react";

class Hello extends React.Component {
  componentDidMount() {}

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
