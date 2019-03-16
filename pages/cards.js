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
import { type Store } from "../redux/modules";
import { type TCards } from "../typedef/api/cards";
import { type TError } from "../typedef/api/error";
import COLOR from "../constatns/color";
import Button from "../components/common/Button";
import Text from "../components/common/Text";

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

class Cards extends React.Component<Props> {
  state = {
    // APIできない間はstat使っとく
    isLoading: false,
    isLoaded: true,
    data: [
      { id: 1, name: "hoge", message: "333" },
      { id: 2, name: "hoge", message: "fe" },
      { id: 3, name: "gg", message: "33ff3" },
      { id: 4, name: "feeee", message: "123" },
      { id: 5, name: "f", message: "r" },
      { id: 6, name: "f", message: "r" }
    ],
    error: null,
    cursor: 0
  };

  componentDidMount() {
    const { startFetchData } = this.props;
    startFetchData();
  }

  _handleWaypointEnter = () => {
    const { startFetchMoreData } = this.props;
    // startFetchMoreData();
    this.setState({
      data: [...this.state.data, ...this.state.data]
    });
  };

  render() {
    console.log(this.props);
    // const { isLoading, isLoaded, data, error, cursor } = this.props;
    const { isLoading, isLoaded, data, error, cursor } = this.state;
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
  startFetchMoreData: () => dispatch(actions.startFetchMoreData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
