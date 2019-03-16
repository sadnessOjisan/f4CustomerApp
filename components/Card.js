// @flow

import * as React from "react";
import styled from "styled-components";
import COLOR from "../constatns/color";
import Text from "../components/common/Text";
import ImageIcon from "../components/common/ImageIcon";
import { type TCard } from "../typedef/model/card";

type Props = {
  className?: string,
  card: TCard
};

const Card = (props: Props) => {
  const { className, card } = props;
  return (
    <Wrapper className={className}>
      <Header>
        <Text>To</Text>
        <ImageIcon />
        <Text>{card.name}</Text>
      </Header>
      <Body>{card.message}</Body>
      <Footer>今日</Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLOR.white};
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
`;

const Footer = styled.div``;

const Body = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export default Card;
