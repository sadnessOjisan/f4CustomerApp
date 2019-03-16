// @flow

import * as React from "react";
import { type Dispatch } from "redux";
import styled from "styled-components";
import { connect } from "react-redux";
import { Waypoint } from "react-waypoint";
import Card from "../components/Card";
import Header from "../components/Header";
import { actions } from "../redux/modules/card";
import { type Store } from "../redux/modules";
import { type TCards } from "../typedef/api/cards";
import { type TError } from "../typedef/api/error";
import COLOR from "../constatns/color";

type MapStateToProps = {|
  +isLoading: boolean,
  +isLoaded: boolean,
  +data: TCards | null,
  +error: TError | null,
  +cursor: number
|};

type MapDispatchToProps = {|
  +startFetchData: typeof actions.startFetchData,
  +startFetchMoreData: typeof actions.startFetchMoreData
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

  _handleWaypointEnter = () => {
    const { startFetchMoreData } = this.props;
    startFetchMoreData();
  };

  render() {
    console.log(this.props);
    const { isLoading, isLoaded, data, error, cursor } = this.props;
    return (
      <Wrapper cursor={cursor}>
        <Header />
        {error ? (
          <p>err</p>
        ) : isLoaded && data ? (
          <CardWrapper>
            {data.map(card => {
              return <SCard card={card} />;
            })}
            <Waypoint onEnter={this._handleWaypointEnter} />
          </CardWrapper>
        ) : (
          <p>loading</p>
        )}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${COLOR.background};
  height: ${props => {
    return (props.cursor + 1) * 100;
  }}%;
`;

const CardWrapper = styled.div`
  width: 90%;
  position: absolute;
  top: 120px;
`;

const SCard = styled(Card)`
  margin-top: 12px;
`;

const mapStateToProps = (state: Store): MapStateToProps => ({
  isLoading: state.card.isLoading,
  isLoaded: state.card.isLoaded,
  data: state.card.data,
  error: state.card.error,
  cursor: state.card.cursor
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  startFetchData: () => dispatch(actions.startFetchData()),
  startFetchMoreData: () => dispatch(actions.startFetchMoreData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
