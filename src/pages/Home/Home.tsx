import React from 'react';
import { Hero, LastGame } from '../../sections';
import Layout from '../Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />

      <LastGame />
    </Layout>
  );
};

export default Home;
