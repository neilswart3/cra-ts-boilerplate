import { CardHeader } from '@material-ui/core'
import React from 'react'
import Styled from './styles'

interface GenreItemProps {
  title: string
}

const GenreItem: React.FC<GenreItemProps> = ({ title }: GenreItemProps) => {
  return (
    <Styled.GenreItem>
      <Styled.GenreItemActionArea>
        <CardHeader title={title} />
      </Styled.GenreItemActionArea>
    </Styled.GenreItem>
  )
}

export default GenreItem
