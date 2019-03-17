// @flow

import Router from "next/router";
import * as React from "react";
import { type Dispatch } from "redux";
import styled from "styled-components";
import { connect } from "react-redux";
import { Waypoint } from "react-waypoint";
import Card from "../components/Card";
import Header from "../components/Header";
import { actions } from "../redux/modules/card";
import { actions as employeeActions } from "../redux/modules/employee";
import { type Store } from "../redux/modules";
import { type TCards } from "../typedef/api/cards";
import { type TError } from "../typedef/api/error";
import COLOR from "../constatns/color";
import Button from "../components/common/Button";
import Text from "../components/common/Text";
import { getUrlVars } from "../helpers/util";
import { Pulse } from "styled-spinkit";
import { type TCard } from "../typedef/model/card";

type MapStateToProps = {|
  +isLoading: boolean,
  +isLoaded: boolean,
  +data: TCard[] | null,
  +error: TError | null,
  +cursor: number
|};

type MapDispatchToProps = {|
  +startFetchData: typeof actions.startFetchData,
  +startFetchMoreData: typeof actions.startFetchMoreData,
  +startFetchEmployeeData: typeof employeeActions.startFetchData
|};

type Props = {|
  ...MapStateToProps,
  ...MapDispatchToProps
|};

class Cards extends React.Component<Props> {
  componentDidMount() {
    const { startFetchData, startFetchEmployeeData } = this.props;
    const { id } = getUrlVars();
    console.log(id);
    startFetchEmployeeData(id);
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
            <SButton
              onClick={() => {
                Router.push("/post");
              }}
            >
              <SImage src="/static/plane.png" />
              <Text color={COLOR.white} size={12}>
                メッセージを送信する
              </Text>
            </SButton>
          </CardWrapper>
        ) : (
          <p>
            <Pulse />
          </p>
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
  box-shadow: 0 1px 5px 0 rgba(157, 157, 157, 0.5);
`;

const SButton = styled(Button)`
  position: fixed;
  width: 80%;
  left: 10%;
  bottom: 12px;
`;

const SImage = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 8px;
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
  startFetchMoreData: () => dispatch(actions.startFetchMoreData()),
  startFetchEmployeeData: (id: string) =>
    dispatch(employeeActions.startFetchData(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
