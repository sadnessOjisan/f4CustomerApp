// @flow

import * as React from "react";
import { type Dispatch } from "redux";
import styled from "styled-components";
import { connect } from "react-redux";
import { Waypoint } from "react-waypoint";
import Confetti from "react-confetti";
import Card from "../components/Card";
import Text from "../components/common/Text";
import Header from "../components/Header";
import { actions } from "../redux/modules/card";
import { type Store } from "../redux/modules";
import { type TCards } from "../typedef/api/cards";
import { type TError } from "../typedef/api/error";
import COLOR from "../constatns/color";

type MapStateToProps = {||};

type MapDispatchToProps = {||};

type Props = {|
  ...MapStateToProps,
  ...MapDispatchToProps
|};

class Posted extends React.Component<Props> {
  componentDidMount() {}

  render() {
    return (
      <Wrapper>
        <Confetti width={500} height={1000} />
        <Inner>
          <Text>投稿ありがとうございました！</Text>
        </Inner>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR.background};
  height: 100%;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  background: ${COLOR.white};
`;

export default Posted;
