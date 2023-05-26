import styled from 'styled-components'

export const CarouselWrapper = styled.div`
  scroll-snap-type: x mandatory;

  position: relative;

  overflow-x: auto;
  display: flex;
  gap: 38px;

  width: 100%;
  max-width: 956px;
  padding: 4px;

  img {
    scroll-snap-align: start;
    object-fit: contain;
  }
`
