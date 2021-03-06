import React from 'react'
import { ButtonSize } from 'components/buttons'
import { Link } from 'components/links'
import NewsletterBox from './newsletter-form'
import * as S from './styles'

const Footer: React.FC = () => {
  const t = {
    headings: {
      ceskoDigital: 'Česko.Digital',
      online: 'Online',
    },
    info: {
      projects: ['Projekty', '#'],
      blog: ['Blog', '#'],
      loginToSlack: ['Přihlásit se do Slacku', '#'],
      submitProject: ['Zadat projekt', '#'],
      contribute: ['Přispět', '#'],
    },
    social: {
      facebook: ['Facebook', '#'],
      twitter: ['Twitter', '#'],
      github: ['GitHub', '#'],
      slack: ['Slack', '#'],
    },
    footnote: 'cesko.digital © 2020, Tento web používa cookies ¯\\_(ツ)_/¯',
  }

  return (
    <S.Wrapper>
      <S.Outer>
        <S.Container>
          <S.Info>
            <S.InfoBlock>
              <S.Heading>{t.headings.ceskoDigital}</S.Heading>
              <S.Navigation>
                <S.Links>
                  {Object.values(t.info).map(([name, url], i) => (
                    <S.LinkItem key={i}>
                      <Link size={ButtonSize.Small} to={url}>
                        {name}
                      </Link>
                    </S.LinkItem>
                  ))}
                </S.Links>
              </S.Navigation>
            </S.InfoBlock>
            <S.InfoBlock>
              <S.Heading>{t.headings.online}</S.Heading>
              <S.Navigation>
                <S.Links>
                  {Object.values(t.social).map(([name, url], i) => (
                    <S.LinkItem key={i}>
                      <Link size={ButtonSize.Small} to={url} key={i}>
                        {name}
                      </Link>
                    </S.LinkItem>
                  ))}
                </S.Links>
              </S.Navigation>
            </S.InfoBlock>
          </S.Info>
          <NewsletterBox />
          <S.Note>{t.footnote}</S.Note>
        </S.Container>
      </S.Outer>
    </S.Wrapper>
  )
}

export default Footer
