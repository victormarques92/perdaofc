import dayjs from 'dayjs';
import React from 'react';
import { logo } from '../../assets';
import { matches } from '../../mocks';
import { Brand, Container, Details } from './styles';

interface FigureProps {
  photo: string;
  alias: string;
  since: number;
  birthDate: string;
  height: number;
}

const Figure: React.FC<FigureProps> = ({
  alias,
  birthDate,
  height,
  photo,
  since,
}) => {
  const birth = dayjs().diff(birthDate, 'years');

  console.log(matches);

  return (
    <Container>
      <img src={photo} alt={alias} />

      <Brand>
        <img src={logo} alt="Perdão FC" />
        <p>{since}</p>
      </Brand>

      <Details>
        <h5>{alias}</h5>

        <div>
          <p>{dayjs(birthDate).format('DD/MM/YYYY')}</p>
          <p>{birth} anos</p>
          <p>{height}m</p>
        </div>
      </Details>
    </Container>
  );
};

export default Figure;
