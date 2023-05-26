import styled from 'styled-components'

import { H2 } from 'styles/components'

export const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #130c3a;

  @media (width <= 1024px) {
    padding: 16px;
  }
`

export const FooterInner = styled.div`
  max-width: 1280px;
`

export const TopSection = styled.div`
  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FooterTitle = styled(H2)`
  max-width: 640px;
  color: ${({ theme }) => theme.palette.white};
`

export const FooterForm = styled.div`
  display: grid;
  grid: 1fr / 3fr 1fr;

  @media (width <= 1024px) {
    grid: 1fr 1fr / 1fr;
  }
`

export const MiddleSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-inline: 18px;

  li {
    line-height: 42px;
  }

  span {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.white};
  }

  @media (width <= 1024px) {
    gap: 32px;
  }
`

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 260px;

  li {
    line-height: 28px;
  }

  @media (width <= 1024px) {
    margin-right: 0;
  }
`

export const ResourcesColumn = styled.div`
  margin-right: 111px;
`
export const CompanyColumn = styled.div`
  margin-right: 104px;
`

export const LegalColumn = styled.div``

const Decoration = styled.div`
  position: absolute;
  z-index: 5;
`

export const Dots = styled(Decoration)`
  top: 0;
  left: 0;
`

export const BlueEllipse = styled(Decoration)`
  top: 0;
  right: 200px;
`
export const GrayEllipse = styled(Decoration)`
  top: 50%;
  right: 0;
`
export const OrangeEllipse = styled(Decoration)`
  top: 10px;
  left: 300px;
`

export const CopyrightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 59px;

  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.palette.white};

  background-color: #0f0937;
`
