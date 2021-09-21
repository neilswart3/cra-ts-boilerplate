import React from 'react'
import { useHistory } from 'react-router'
import Case from 'case'
import Styled from './styles'

interface GenreItemProps {
  title: string
}

const GenreItem: React.FC<GenreItemProps> = ({ title }: GenreItemProps) => {
  const { push } = useHistory()

  const handleClick = (): void => {
    push(`/genre/${Case.kebab(title)}`, { genre: title })
  }

  return <Styled.GenreItem title={title} onClick={handleClick} />
}

export default GenreItem
