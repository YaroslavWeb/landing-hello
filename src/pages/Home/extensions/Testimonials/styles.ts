import { motion } from 'framer-motion'
import { styled } from 'styled-components'

import { contentVariants } from 'styles/variants'

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f8f8fa;
`

export const SectionInner = styled(motion.section).attrs({
  initial: 'offscreen',
  whileInView: 'onscreen',
  variants: contentVariants,
  viewport: { once: true },
})`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1320px;

  background-color: #f8f8fa;

  @media (width <= 1024px) {
    padding: 16px;
  }
`

export const CommentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`
