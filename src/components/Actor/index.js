import React from "react";
//styles
import { Image, Wrapper } from "./Actor.styles";

export const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);
