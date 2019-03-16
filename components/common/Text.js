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

const Text = (props: Props) => {
  const { className, children } = props;
  return <SText {...props}>{children}</SText>;
};

const SText = styled.span`
  font-size: ${(props: Props) => (props.size ? props.size : 16)}px;
  color: ${(props: Props) => (props.color ? props.color : COLOR.normal)};
  font-weight: ${(props: Props) => props.bold && "bold"};
  line-height: 1.5;
`;

export default Text;
