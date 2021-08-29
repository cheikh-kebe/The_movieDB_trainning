import React from "react";
import PropTypes from 'prop-types';
//styles
import { Image, Wrapper } from "./Actor.styles";

export const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,

}
