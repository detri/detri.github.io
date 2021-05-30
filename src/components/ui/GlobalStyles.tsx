import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components'

interface GlobalStyleProps {}

const GlobalStyles: GlobalStyleComponent<GlobalStyleProps, DefaultTheme> = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  body {
    background: ${(p) => p.theme.bg};
    font-family: 'Inconsolata', serif;
    color: ${(p) => p.theme.fg}
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Work Sans', sans-serif;
    line-height: 100%;
  }
`

export default GlobalStyles
