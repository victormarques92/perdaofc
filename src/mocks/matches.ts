import players from './players';

const matches = [
  {
    date: '2022-08-04',
    manOfTheMatch: players.find(
      x => x.alias.toLowerCase() === 'vitinho',
    ),
  },
];

export default matches;
