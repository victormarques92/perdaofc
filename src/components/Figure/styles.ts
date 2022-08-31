import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div`
  background-color: ${theme.colors.base.white};
  color: ${theme.colors.base.high};
  border-radius: 4px;
  height: 380px;
  overflow: hidden;
  padding: 8px;
  position: relative;
  width: 280px;

  & > img {
    height: calc(100% - 16px);
    object-fit: cover;
    position: absolute;
    width: calc(100% - 16px);
  }
`;

export const Brand = styled.div`
  position: absolute;
  width: 80px;

  & > img {
    max-width: 100%;
    position: relative;
    z-index: 1;
  }

  & > p {
    ${theme.typography.capition};
    background-color: ${theme.colors.base.white};
    border-radius: 80px;
    bottom: -18px;
    color: ${theme.colors.primary};
    font-weight: 600;
    left: 50%;
    padding: 16px 8px 8px;
    position: absolute;
    transform: translate(-50%);
  }
`;

export const Details = styled.div`
  bottom: 0;
  left: 0;
  padding-bottom: 16px;
  padding-inline: 24px;
  position: absolute;
  width: 100%;

  &::before,
  &::after {
    content: '';
    background-color: ${theme.colors.base.white};
    width: 200px;
    height: 200px;
    border-radius: 100%;
    position: absolute;
  }

  &::before {
    bottom: -110px;
    left: -30px;
    width: 230px;
  }

  &::after {
    bottom: -130px;
    right: -10px;
  }

  p,
  h5 {
    position: relative;
  }

  h5 {
    ${theme.typography.heading[5]};
    font-weight: 500;
    z-index: 1;
  }

  & > div {
    ${theme.typography.body[2]}
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    z-index: 1;
    font-weight: 500;
  }
`;
