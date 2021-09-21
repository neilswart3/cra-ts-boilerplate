import React from 'react'
import { Typography } from '@material-ui/core'
import Styled from './styles'

const defaultMessage = 'An error has occured. Please try again later'

interface ErrorMessageProps {
  message?: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = (
  props: ErrorMessageProps
) => {
  const { message = defaultMessage } = props

  return (
    <Styled.ErrorMessage>
      <Typography variant="h5" align="center">
        {message}
      </Typography>
    </Styled.ErrorMessage>
  )
}

export default ErrorMessage
