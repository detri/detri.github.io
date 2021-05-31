import styled from 'styled-components'

export const Line = styled.div`
  line-height: 3rem;
  padding: 1rem 0;
  margin: 1rem 0;
  background: ${(p) => p.theme.highlight};
`

export const Title = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 3.5rem;
  color: ${(p) => p.theme.green};
  margin: 0;
  line-height: inherit;
`

export const Subtitle = styled.h2`
  font-size: 2.5rem;
  font-family: 'Inconsolata', monospace;
  color: ${(p) => p.theme.yellow};
  margin: 0;
  line-height: inherit;
`

export const SplashWrapper = styled.div`
  transform: translateY(calc(50vh - 50%));
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 0;
`

export default {
  Line,
  Title,
  Subtitle,
  SplashWrapper,
}
