import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Container as ContainerBS, theme } from '../../styles';

interface ToggleProps {
  active: boolean;
}

export const Container = styled.header`
  background-color: ${theme.colors.base.white}CC;
  margin-bottom: 60px;
  padding-block: 20px;
`;

export const Main = styled(ContainerBS)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Branch = styled(Link)`
  & > img {
    max-height: 60px;
  }
`;

export const Nav = styled.nav<ToggleProps>`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: ${theme.breakpoints.lg}) {
    background-color: ${theme.colors.base.white};
    display: ${({ active }) => (active ? 'flex' : 'none')};
    flex-direction: column;
    height: 100vh;
    left: 0;
    padding-top: 100px;
    padding-bottom: 32px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }
`;

export const Button = styled(Link)<ToggleProps>`
  color: ${theme.colors.primary};
  font-size: 24px;

  ${({ active }) =>
    active &&
    css`
      font-weight: 600;
    `}
`;

export const Toggle = styled.button`
  align-items: center;
  background-color: transparent;
  color: ${theme.colors.primary};
  display: flex;
  font-size: 32px;
  justify-content: center;
  z-index: 200;

  @media (min-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;
