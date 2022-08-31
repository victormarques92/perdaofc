import styled from 'styled-components';
import { Container as ContainerBS, theme } from '../../styles';

export const Container = styled(ContainerBS)`
  background-color: ${theme.colors.base.black}66;
  border-radius: 32px;
  margin-block: 60px;
  padding-block: 40px;
`;

export const Title = styled.h1`
  ${theme.typography.heading[2]};
  color: ${theme.colors.base.white};
  margin-bottom: 100px;
  text-align: center;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 64px;
  justify-content: center;
`;

export const Details = styled.div`
  color: ${theme.colors.base.white};
  display: flex;
  gap: 32px;
  padding: 12px 24px;

  & > div {
    min-width: 280px;

    & > h5 {
      ${theme.typography.heading[4]}
      font-weight: 500;
      margin-bottom: 32px;
    }
  }

  li {
    ${theme.typography.heading[6]}

    & + li {
      margin-top: 8px;
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;
