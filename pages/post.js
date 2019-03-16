// @flow

import * as React from "react";
import { type Dispatch } from "redux";
import styled from "styled-components";
import { connect } from "react-redux";
import { Waypoint } from "react-waypoint";
import { withFormik } from "formik";
import Header from "../components/Header";
import ImageInput from "../components/common/ImageIcon";
import { actions } from "../redux/modules/employee";
import { actions as messageActions } from "../redux/modules/messagePost";
import { type Store } from "../redux/modules";
import { type TEmployee } from "../typedef/api/employee";
import { type TError } from "../typedef/api/error";
import COLOR from "../constatns/color";
import Button from "../components/common/Button";
import Text from "../components/common/Text";

type MapStateToProps = {|
  +employeeIsLoading: boolean,
  +employeeIsLoaded: boolean,
  +employeeData: TEmployee | null,
  +error: TError | null
|};

type MapDispatchToProps = {|
  +startFetchData: typeof actions.startFetchData,
  +startPostValue: typeof messageActions.startPostValue
|};

type Props = {|
  ...MapStateToProps,
  ...MapDispatchToProps
|};

class Post extends React.Component<Props> {
  componentDidMount() {
    const { error, employeeIsLoaded, startFetchData } = this.props;
    if (!employeeIsLoaded || error) {
      startFetchData();
    }
  }

  render() {
    const {
      error,
      employeeIsLoaded,
      employeeIsLoading,
      employeeData
    } = this.props;
    console.log("this.props:", this.props);
    const { handleSubmit, handleChange } = this.props;
    return (
      <Wrapper>
        {employeeData && employeeIsLoaded && !error ? (
          <React.Fragment>
            <Row>
              <Text color={COLOR.warmGrey} size={12}>
                To
              </Text>
              <ImageInput size={32} />
              <Text color={COLOR.warmBlack} size={12}>
                {employeeData.name}
              </Text>
            </Row>
            <Form onSubmit={handleSubmit}>
              <Input
                placeholder="メッセージを添える&#x000D;&#x000A;例: 今日はありがとうございました。"
                name="message"
                onChange={handleChange}
              />
              <SButton type="submit">
                <SImage src="/static/plane.png" />
                <Text color={COLOR.white} size={12}>
                  メッセージを送信する
                </Text>
              </SButton>
            </Form>
          </React.Fragment>
        ) : (
          `employeeIsLoaded:${employeeIsLoaded}`
        )}
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
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 8px;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.textarea`
  width: 90%;
  outline: 0;
  margin-top: 12px;
  height: 200px;
  border-radius: 8px;
  border: 0;
  padding: 16px;
  display: block;
  color: ${COLOR.warmBlack};
`;

const SImage = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 8px;
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
  startPostValue: value => dispatch(messageActions.startPostValue(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik({
    mapPropsToValues: () => ({ message: "" }),
    handleSubmit: (values, { props }) => {
      const { startPostValue } = props;
      startPostValue(values);
    },
    displayName: "BasicForm"
  })(Post)
);
