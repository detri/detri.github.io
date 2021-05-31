import 'styled-components'
import { DraculaTheme } from './Theme'

declare module 'styled-components' {
  export interface DefaultTheme extends DraculaTheme {}
}
