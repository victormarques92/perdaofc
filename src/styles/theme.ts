import { css } from 'styled-components';

export default {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  fontFamily: ['Maven Pro, Arial, Helvetica, sans-serif'],
  colors: {
    base: {
      black: '#000000',
      high: '#212121',
      medium: '#666666',
      disabled: '#9E9E9E',
      outline: '#E0E0E0',
      white: '#FFFFFF',
    },
    primary: '#025196',
    secondary: '#CAAB60',
    success: '#33A852',
    error: '#EA4335',
  },
  typography: {
    heading: {
      1: css`
        font-size: 96px;
        font-weight: 300;
        letter-spacing: -1.5px;
        line-height: 112px;
      `,
      2: css`
        font-size: 64px;
        font-weight: 300;
        letter-spacing: -0.5px;
        line-height: 72px;
      `,
      3: css`
        font-size: 48px;
        font-weight: 400;
        letter-spacing: 0;
        line-height: 56px;
      `,
      4: css`
        font-size: 36px;
        font-weight: 400;
        letter-spacing: 0.25px;
        line-height: 48px;
      `,
      5: css`
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0;
        line-height: 32px;
      `,
      6: css`
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0.15px;
        line-height: 24px;
      `,
    },
    subtitle: {
      1: css`
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.15px;
        line-height: 24px;
      `,
      2: css`
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.1px;
        line-height: 20px;
      `,
    },
    body: {
      1: css`
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.5px;
        line-height: 24px;
      `,
      2: css`
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.25px;
        line-height: 24px;
      `,
      3: css`
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1.25px;
        line-height: 24px;
        text-transform: uppercase;
      `,
    },
    capition: css`
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0.4px;
      line-height: 16px;
    `,
    overline: css`
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 1.5px;
      line-height: 16px;
    `,
  },
};
