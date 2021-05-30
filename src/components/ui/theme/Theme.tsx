import { FC } from 'react'
import { ThemeProvider } from 'styled-components'

export interface DraculaTheme {
  bg: string
  fg: string
  highlight: string
  comment: string
  cyan: string
  green: string
  orange: string
  pink: string
  purple: string
  red: string
  yellow: string
}

// color palette is Dracula
// https://draculatheme.com
const theme: DraculaTheme = {
  bg: '#282a36',
  fg: '#f8f8f2',
  highlight: '#44475a',
  comment: '#6272a4',
  cyan: '#8be9fd',
  green: '#50fa7b',
  orange: '#ffb86c',
  pink: '#ff79c6',
  purple: '#bd93f9',
  red: '#ff5555',
  yellow: '#f1fa8c',
}

interface ThemeProps {
  children: JSX.Element | JSX.Element[]
}

const Theme: FC<ThemeProps> = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
