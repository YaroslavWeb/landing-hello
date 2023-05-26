import { motion } from 'framer-motion'
import { styled } from 'styled-components'

import { contentVariants } from 'styles/variants'

export const SectionWrapper = styled(motion.section).attrs({
  initial: 'offscreen',
  whileInView: 'onscreen',
  variants: contentVariants,
  viewport: { once: true },
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 895px;

  @media (width <= 1024px) {
    padding: 16px;
  }
`
