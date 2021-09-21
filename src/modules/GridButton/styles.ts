import { Card, CardActionArea, CardHeader, CardMedia } from '@material-ui/core'
import styled from 'styled-components'

const GridButton = styled(Card)`
  display: block;
`

const GridButtonActionArea = styled(CardActionArea)`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
`

interface GridButtonMediaProps {
  component: string | React.ReactNode
}

const GridButtonMedia = styled(CardMedia)<GridButtonMediaProps>``

interface GridButtonHeaderProps {
  hasImage: boolean
}

const GridButtonHeader = styled(CardHeader)<GridButtonHeaderProps>`
  width: 100%;
  text-align: center;

  ${({ hasImage }) =>
    hasImage
      ? `
      position: absolute;
      bottom: 0;
      `
      : ''}
`

const Styled = {
  GridButton,
  GridButtonActionArea,
  GridButtonMedia,
  GridButtonHeader,
}

export default Styled
