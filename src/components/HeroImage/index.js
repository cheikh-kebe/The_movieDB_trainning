import React from 'react';
import PropTypes from 'prop-types';

//styles
import { Wrapper, Content, Text } from '../HeroImage/HeroImage.style';

export const HeroImage = ({image, title, text}) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>

  </Wrapper>
);

HeroImage.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string
}