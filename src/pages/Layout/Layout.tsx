import React from 'react';
import { Footer, Header } from '../../components';

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
