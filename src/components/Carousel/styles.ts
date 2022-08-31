import styled from 'styled-components';
import { Swiper as SwiperComponent } from 'swiper/react';
import { theme } from '../../styles';

export const Swiper = styled(SwiperComponent)`
  max-height: 80vh;

  .swiper-pagination-bullet {
    background-color: ${theme.colors.base.white};
    border-radius: 4px;
    width: 32px;
    transition: 0.2s ease-in-out;

    &-active {
      width: 64px;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${theme.colors.base.white};
  }
`;

export const Img = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
