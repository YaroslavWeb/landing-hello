import { motion } from 'framer-motion'
import styled from 'styled-components'

import { contentVariants } from 'styles/variants'

export const SectionWrapper = styled(motion.section).attrs({
  initial: 'offscreen',
  whileInView: 'onscreen',
  variants: contentVariants,
  viewport: { once: true },
})`
  display: flex;
  flex-wrap: wrap;
  gap: 120px;
  justify-content: center;

  max-width: 1280px;

  @media (width <= 1024px) {
    flex-direction: column-reverse;
    gap: 0;
    padding: 16px;
  }
`

export const ImageWrapper = styled.div`
  position: relative;

  &::before {
    content: '';

    position: absolute;
    z-index: 8;
    bottom: 10%;
    left: 10%;

    width: 50%;
    height: 80%;

    background: rgb(241 243 246 / 45%);
    border-radius: 10px;
  }

  img {
    position: relative;
    z-index: 10;
    width: 100%;
  }
`

export const Decoration = styled.div`
  position: absolute;
  z-index: 5;
`

export const Border = styled(Decoration)``

export const GreenEllipse = styled(Decoration)`
  top: 60px;
  left: -20px;
`

export const OrangeEllipse = styled(Decoration)`
  bottom: 10px;
  left: -30px;
`

export const Dots = styled(Decoration)`
  right: 0;
  bottom: 0;
`
