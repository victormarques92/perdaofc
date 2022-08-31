import React from 'react';

import { Container, ScopeStyleProps } from './styles';

interface ScoreProps extends ScopeStyleProps {
  blue: number;
  yellow: number;
}

const Score: React.FC<ScoreProps> = ({
  blue,
  yellow,
  large,
}) => {
  return (
    <Container large={large}>
      <h1>{blue}</h1> <span>x</span> <h1>{yellow}</h1>
    </Container>
  );
};

export default Score;
