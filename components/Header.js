// @flow

import * as React from "react";
import styled from "styled-components";
import COLOR from "../constatns/color";
import Text from "../components/common/Text";
import ImageIcon from "../components/common/ImageIcon";

const Header = () => {
  return (
    <Wrapper>
      <Row>
        <Text color={COLOR.background} size={20} bold={true}>
          Tippy
        </Text>
      </Row>
      <Row>
        <Text color={COLOR.background} size={14}>
          東大宮店の店員が過去にもらったメッセージ
        </Text>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${`linear-gradient(90deg, ${COLOR.peachYellow}, ${
    COLOR.peachPink
  })`};
  height: 164px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  text-align: center;
  margin-top: 16px;
  margin-bottom: 28px;
`;

export default Header;
