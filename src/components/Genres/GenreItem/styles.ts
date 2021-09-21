import styled from 'styled-components'
import { Card, CardActionArea } from '@material-ui/core'

const GenreItem = styled(Card)`
  display: block;
`

const GenreItemActionArea = styled(CardActionArea)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Styled = { GenreItem, GenreItemActionArea }

export default Styled
