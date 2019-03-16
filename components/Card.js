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
        <Text>{card.name}</Text>
        <ImageIcon />
      </Header>
      s
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLOR.background};
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
`;

export default Card;
