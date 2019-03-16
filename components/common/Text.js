// @flow

import * as React from "react";
import styled from "styled-components";
import COLOR from "../../constatns/color";

type Props = {
  className?: string,
  children: React.Node,
  size?: number,
  color?: string,
  bold?: boolean
};

const Card = (props: Props) => {
  const { className, children } = props;
  return <Text {...props}>{children}</Text>;
};

const Text = styled.span`
  font-size: ${(props: Props) => (props.size ? props.size : 16)}px;
  color: ${(props: Props) => (props.color ? props.color : "black")};
  font-weight: ${(props: Props) => props.color && "bold"};
`;

export default Card;
