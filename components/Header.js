// @flow

import * as React from "react";
import styled from "styled-components";
import COLOR from "../constatns/color";
import Text from "../components/common/Text";
import ImageIcon from "../components/common/ImageIcon";

const Header = () => {
  return (
    <Wrapper>
      <Row>F4 Tip サービス</Row>
      <Row>東大宮店の店員が過去にもらったメッセージ</Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: pink;
  height: 164px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  text-align: center;
  margin-top: 16px;
`;

export default Header;
