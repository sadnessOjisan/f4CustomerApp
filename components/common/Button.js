// @flow

import * as React from "react";
import styled from "styled-components";
import COLOR from "../../constatns/color";

type Props = {
  className: string,
  children: React.Node,
  onClick: void => void
};

const Button = (props: Props) => {
  const { className, children, onClick } = props;
  return (
    <SButton className={className} onClick={onClick}>
      {children}
    </SButton>
  );
};

const SButton = styled.button`
  background: ${`linear-gradient(90deg, ${COLOR.peachYellow}, ${
    COLOR.peachPink
  })`};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  outline: 0;
  border: 0;
  border-radius: 21px;
`;

export default Button;
