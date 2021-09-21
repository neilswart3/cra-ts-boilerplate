import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from '@material-ui/core/styles'
import { palette } from './palette'

let theme = createTheme({
  palette,
} as ThemeOptions)

theme = responsiveFontSizes(theme)

export default theme
