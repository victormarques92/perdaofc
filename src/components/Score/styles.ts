import styled, { css } from 'styled-components';
import { theme } from '../../styles';

export interface ScopeStyleProps {
  large?: boolean;
}

export const Container = styled.div<ScopeStyleProps>`
  align-items: center;
  display: flex;
  gap: 16px;

  & > * {
    font-family: 'Black Ops One', cursive;
  }

  h1 {
    ${theme.typography.heading[1]}

    &:first-of-type {
      color: ${theme.colors.primary};
    }

    &:last-of-type {
      color: ${theme.colors.secondary};
    }
  }

  span {
    ${theme.typography.heading[3]}
    color: ${theme.colors.base.white}B3;
  }

  ${({ large }) =>
    large &&
    css`
      gap: 32px;

      h1 {
        font-size: 200px;
        line-height: 1;
      }

      span {
        ${theme.typography.heading[1]}
      }
    `}
`;
