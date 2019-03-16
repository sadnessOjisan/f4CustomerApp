// @flow

import * as React from "react";
import { type Dispatch } from "redux";
import { connect } from "react-redux";
import Card from "../components/Card";
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
    const { startFetchData } = this.props;
    startFetchData();
  }

  render() {
    console.log(this.props);
    const { isLoading, isLoaded, data, error } = this.props;
    return (
      <div className="wrapper">
        {error ? (
          <p>err</p>
        ) : isLoaded && data ? (
          data.map(d => {
            return <Card>{d.id}</Card>;
          })
        ) : (
          <p>loading</p>
        )}
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
