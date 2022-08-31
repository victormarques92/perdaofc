import React from 'react';

import { Figure, Score } from '../../components';
import { players } from '../../mocks';
import { Container, Content, Details, Title } from './styles';

const LastGame: React.FC = () => {
  const data = [
    {
      name: 'Vitinho',
      minute: 1,
      team: 'yellow',
    },
    {
      name: 'Vitinho',
      minute: 8,
      team: 'yellow',
    },
    {
      name: 'Vitinho',
      minute: 10,
      team: 'yellow',
    },
    {
      name: 'Vitinho',
      minute: 8,
      team: 'yellow',
    },
    {
      name: 'Vitinho',
      minute: 10,
      team: 'yellow',
    },
    {
      name: 'Odair',
      minute: 15,
      team: 'blue',
    },
    {
      name: 'Vitinho',
      minute: 10,
      team: 'yellow',
    },
    {
      name: 'Odair',
      minute: 15,
      team: 'blue',
    },
    {
      name: 'Vitinho',
      minute: 10,
      team: 'yellow',
    },
    {
      name: 'Odair',
      minute: 15,
      team: 'blue',
    },
    {
      name: 'Vitinho',
      minute: 10,
      team: 'yellow',
    },
    {
      name: 'Odair',
      minute: 15,
      team: 'blue',
    },
    {
      name: 'Vitinho',
      minute: 10,
      team: 'yellow',
    },
    {
      name: 'Odair',
      minute: 15,
      team: 'blue',
    },
    {
      name: 'Odair',
      minute: 15,
      team: 'blue',
    },
    {
      name: 'Odair',
      minute: 15,
      team: 'blue',
    },
    {
      name: 'Odair',
      minute: 15,
      team: 'blue',
    },
  ];

  const score = {
    blue: data.filter(x => x.team === 'blue').length,
    yellow: data.filter(x => x.team === 'yellow').length,
  };

  return (
    <Container>
      <Title>Última Partida</Title>

      <Content>
        <Score {...score} large />

        <Details>
          <div>
            <h5>Gols ⚽️</h5>

            <ul>
              {data.map((item, index) => (
                <li key={index}>
                  {item.team === 'yellow' ? '🟡' : '🔵'}{' '}
                  {item.minute}' {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Man Of The Match 🏅</h5>

            <Figure {...players[0]} />
          </div>
        </Details>
      </Content>
    </Container>
  );
};

export default LastGame;
