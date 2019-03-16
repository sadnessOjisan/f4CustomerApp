// @flow

import * as React from "react";
import { type Dispatch } from "redux";
import { connect } from "react-redux";
import getConfig from "next/config";
import { actions } from "../redux/modules/card";
import { type Store } from "../redux/modules";
import { type TCards } from "../typedef/api/cards";
import { type TError } from "../typedef/api/error";

type MapStateToProps = {|
  +isLoading: boolean,
  +isLoaded: boolean,
  +data: TCards | null,
  +error: TError | null
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

const mapStateToProps = (state: Store): MapStateToProps => ({
  isLoading: state.card.isLoading,
  isLoaded: state.card.isLoaded,
  data: state.card.data,
  error: state.card.error
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  startFetchData: () => dispatch(actions.startFetchData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
