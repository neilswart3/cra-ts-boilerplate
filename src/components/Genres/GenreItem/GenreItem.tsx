import React from 'react'
import { useHistory } from 'react-router'
import { CardHeader } from '@material-ui/core'
import Case from 'case'
import Styled from './styles'

interface GenreItemProps {
  title: string
}

const GenreItem: React.FC<GenreItemProps> = ({ title }: GenreItemProps) => {
  const { push } = useHistory()

  const handleClick = (): void => {
    push(`/genre/${Case.kebab(title)}`)
  }

  return (
    <Styled.GenreItem>
      <Styled.GenreItemActionArea onClick={handleClick}>
        <CardHeader title={title} />
      </Styled.GenreItemActionArea>
    </Styled.GenreItem>
  )
}

export default GenreItem
