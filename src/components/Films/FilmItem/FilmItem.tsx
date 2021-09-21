import { Typography } from '@material-ui/core'
import React from 'react'
import Styled from './styles'

interface FilmItemProps {
  title: string
  id: string
}

const FilmItem: React.FC<FilmItemProps> = ({ title, id }: FilmItemProps) => {
  const handleClick = (): void => {
    console.log('title:', title)
    console.log('id:', id)
  }

  return (
    <Styled.FilmItem
      title={
        <Typography align="center" variant="caption" component="h4">
          {title}
        </Typography>
      }
      image={`https://via.placeholder.com/182x268.png?text=${title
        .split(' ')
        .join('+')}`}
      onClick={handleClick}
    />
  )
}

export default FilmItem
