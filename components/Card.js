// @flow

import * as React from "react";
import styled from "styled-components";
import COLOR from "../constatns/color";
import Text from "../components/common/Text";
import ImageIcon from "../components/common/ImageIcon";
import { type TCard } from "../typedef/model/card";
import moment from "moment";

type Props = {
  className?: string,
  card: TCard
};

const Card = (props: Props) => {
  const { className, card } = props;
  return (
    <Wrapper className={className}>
      <Header>
        <Text color="#b2b2b2">To</Text>
        <ImageIcon size={28} src={card.employee_image} />
        <Text color="#b2b2b2">{card.employee_name}</Text>
      </Header>
      <Body>
        <Text color="#4a4a4a">{card.message}</Text>
      </Body>
      <Footer>
        <Text color="##b2b2b2">
          {moment(card.created_at).format("MM/DD HH:MM")}
        </Text>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  word-break: break-word;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  > * {
    margin-left: 8px;
  }
`;

const Footer = styled.div``;

const Body = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export default Card;
