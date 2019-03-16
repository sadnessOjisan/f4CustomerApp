import * as React from "react";
import styled from "styled-components";
import COLOR from "../../constatns/color";

type Props = {
  className: string,
  children: React.Node
};

const Button = (props: Props) => {
  const { className, children } = props;
  return <SButton className={className}>{children}</SButton>;
};

const SButton = styled.button`
  background: ${`linear-gradient(90deg, ${COLOR.peachYellow}, ${
    COLOR.peachPink
  })`};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  outline: 0;
  border: 0;
  border-radius: 8px;
`;

export default Button;
