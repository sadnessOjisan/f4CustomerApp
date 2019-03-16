// @flow

import * as React from "react";
import { connect } from "react-redux";
import getConfig from "next/config";
import { actions } from "../redux/modules/card";

type MapStateToProps = {|
  +isLoading: boolean,
  +isLoaded: boolean,
  +data: Object,
  +error: Object
|};

type MapDispatchToProps = {|
  +startFetchData: typeof actions.startFetchData
|};

type Props = {|
  ...MapStateToProps,
  ...MapDispatchToProps
|};

class Hello extends React.Component<Props> {
  componentDidMount() {
    const { publicRuntimeConfig } = getConfig();
    console.log("publicRuntimeConfig", publicRuntimeConfig); // Will be available on both server and client
    console.log("process: ", process);
    console.log("process.env: ", process.env);
  }

  render() {
    console.log("this.props: ", this.props);
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

export default connect()(Hello);
