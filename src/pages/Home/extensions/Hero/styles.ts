import { motion } from 'framer-motion'
import styled from 'styled-components'

import { contentVariants } from 'styles/variants'

export const WrapperSection = styled(motion.section).attrs({
  initial: 'offscreen',
  animate: 'onscreen',
  variants: contentVariants,
})`
  width: 100%;
`

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
`

export const ActionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  max-width: 479px;
`

export const MiddleSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  img {
    z-index: 10;
    max-width: 100%;
    height: auto;
  }

  div {
    position: relative;
  }
`

const Decoration = styled.span`
  position: absolute;
`

export const Left = styled(Decoration)`
  top: 10%;
  left: -15%;

  @media (width <= 1024px) {
    display: none;
  }
`

export const Right = styled(Decoration)`
  top: 10%;
  right: -15%;

  @media (width <= 1024px) {
    display: none;
  }
`

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;

  padding: 8px;
`
