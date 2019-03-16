// @flow

import * as React from "react";
import styled from "styled-components";
import COLOR from "../../constatns/color";

const DEFAULT_SIZE = 16;
const DEFAULT_IMAGE =
  "https://user-images.githubusercontent.com/16608864/35882949-bbe13aa0-0bab-11e8-859c-ceda3b213818.jpeg";

type Props = {
  className?: string,
  size?: number,
  src?: string
};

const Image = (props: Props) => {
  const { src } = props;
  return <Img {...props} src={src ? src : DEFAULT_IMAGE} />;
};

const Img = styled.img`
  width: ${(props: Props) => (props.size ? props.size : DEFAULT_SIZE)}px;
  height: ${(props: Props) => (props.size ? props.size : DEFAULT_SIZE)}px;
  border-radius: 50%;
`;

export default Image;
