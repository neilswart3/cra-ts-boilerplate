import React from 'react'
import { CircularProgress } from '@material-ui/core'
import Styled from './styles'

const Loading: React.FC = () => {
  return (
    <Styled.Loading>
      <CircularProgress />
    </Styled.Loading>
  )
}

export default Loading
