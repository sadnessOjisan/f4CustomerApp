// @flow

import * as React from "react";
import { type Dispatch } from "redux";
import styled from "styled-components";
import { connect } from "react-redux";
import { Waypoint } from "react-waypoint";
import Header from "../components/Header";
import { actions } from "../redux/modules/employee";
import { type Store } from "../redux/modules";
import { type TCards } from "../typedef/api/employee";
import { type TError } from "../typedef/api/error";
import COLOR from "../constatns/color";
import Button from "../components/common/Button";

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

class Post extends React.Component<Props> {
  componentDidMount() {
    const { error, isLoaded, startFetchData } = this.props;
    if (!isLoaded || error) {
      startFetchData();
    }
  }

  render() {
    return (
      <Wrapper>
        <Row>ss</Row>
        <Input placeholder="aaaaaaaa" />
        <SButton>a</SButton>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${COLOR.background};
  padding: 12px;
`;

const Row = styled.div`
  width: 100%;
`;

const Input = styled.textarea`
  width: 100%;
  outline: 0;
  margin-top: 12px;
`;

const SButton = styled(Button)`
  width: 100%;
  margin-top: 12px;
`;

const mapStateToProps = (state: Store): MapStateToProps => ({
  employeeIsLoading: state.employee.isLoading,
  employeeIsLoaded: state.employee.isLoaded,
  employeeData: state.employee.data,
  error: state.employee.error
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  startFetchData: () => dispatch(actions.startFetchData()),
  startFetchMoreData: () => dispatch(actions.startFetchMoreData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
