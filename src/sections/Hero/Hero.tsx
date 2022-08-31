import React from 'react';
import { hero1, hero2 } from '../../assets';
import { Carousel } from '../../components';
import { Container } from '../../styles';

const Hero: React.FC = () => {
  const hero = [hero1, hero2];

  return (
    <Container>
      <Carousel data={hero} />
    </Container>
  );
};

export default Hero;
