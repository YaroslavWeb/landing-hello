/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from './styles'

import MediaBlueEllipse from 'assets/icons/decorations/footer/blue_ellipse.svg'
import MediaDots from 'assets/icons/decorations/footer/dots.svg'
import MediaGrayEllipse from 'assets/icons/decorations/footer/gray_ellipse.svg'
import MediaOrangeEllipse from 'assets/icons/decorations/footer/orange_ellipse.svg'
import MediaLogo from 'assets/icons/logo.svg'
import MediaSocials from 'assets/icons/socials/socials.svg'
import { Button } from 'components/Button'
import { TextField } from 'components/TextField'

import * as C from 'styles/components'

export const Footer = () => {
  return (
    <>
      <S.FooterWrapper>
        <S.FooterInner>
          <C.Divider height={150} />
          <S.TopSection>
            <S.FooterTitle>It’s easy to get started. Start now.</S.FooterTitle>
            <C.Divider height={40} />
            <S.FooterForm>
              <TextField />
              <Button mod={Button.mod.solid}>Get Started</Button>
            </S.FooterForm>
          </S.TopSection>
          <C.Divider height={150} />
          <S.MiddleSection>
            <S.InfoColumn>
              <MediaLogo />
              <C.Divider height={33} />
              <ul>
                <li>Nort West, South New Work,United State</li>
                <li>+1 246-254-0569</li>
                <li>Info@example.com</li>
              </ul>
              <C.Divider height={27} />
              <div>
                <MediaSocials />
              </div>
            </S.InfoColumn>
            <S.ResourcesColumn>
              <span>Resources</span>
              <C.Divider height={19} />
              <ul>
                <li>
                  <a href='#'>Docs</a>
                </li>
                <li>
                  <a href='#'>Forums</a>
                </li>
                <li>
                  <a href='#'>Jobs</a>
                </li>
                <li>
                  <a href='#'>Join Discord</a>
                </li>
                <li>
                  <a href='#'>Consultants</a>
                </li>
              </ul>
            </S.ResourcesColumn>
            <S.CompanyColumn>
              <span>Company</span>
              <C.Divider height={19} />
              <ul>
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Careers</a>
                </li>
                <li>
                  <a href='#'>Block Chain</a>
                </li>
                <li>
                  <a href='#'>Privacy Policy</a>
                </li>
                <li>
                  <a href='#'>Terms & Condition</a>
                </li>
              </ul>
            </S.CompanyColumn>
            <S.LegalColumn>
              <span>Legal</span>
              <C.Divider height={19} />
              <ul>
                <li>
                  <a href='#'>Terms of use</a>
                </li>
                <li>
                  <a href='#'>Privacy policy</a>
                </li>
                <li>
                  <a href='#'>GDPR/CCPA explained</a>
                </li>
                <li>
                  <a href='#'>Guidlines</a>
                </li>
              </ul>
            </S.LegalColumn>
          </S.MiddleSection>
          <S.BlueEllipse>
            <MediaBlueEllipse />
          </S.BlueEllipse>
          <S.GrayEllipse>
            <MediaGrayEllipse />
          </S.GrayEllipse>
          <S.OrangeEllipse>
            <MediaOrangeEllipse />
          </S.OrangeEllipse>
          <S.Dots>
            <MediaDots />
          </S.Dots>
          <C.Divider height={150} />
        </S.FooterInner>
      </S.FooterWrapper>
      <S.CopyrightWrapper>© 2021 Hello All right reserved.</S.CopyrightWrapper>
    </>
  )
}
