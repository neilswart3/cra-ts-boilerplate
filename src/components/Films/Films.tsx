import React from 'react'
import { useParams } from 'react-router'
import Styled from './styles'

interface FilmsProps {}

const Films: React.FC<FilmsProps> = (props: FilmsProps) => {
  const { id }: { id: string } = useParams()

  return <Styled.Films>Films component: {id}</Styled.Films>
}

export default Films
