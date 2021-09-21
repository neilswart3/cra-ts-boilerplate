import React from 'react'
import Styled from './styles'

interface GridButtonProps {
  title: string | React.ReactNode
  image?: string | null
  className?: string
  onClick: (e: any) => void
}

const GridButton: React.FC<GridButtonProps> = (props: GridButtonProps) => {
  const { title, image = null, onClick, className = 'GridButton' } = props

  return (
    <Styled.GridButton className={className}>
      <Styled.GridButtonActionArea onClick={onClick}>
        {image && <Styled.GridButtonMedia image={image} component="img" />}
        <Styled.GridButtonHeader title={title} hasImage={!!image} />
      </Styled.GridButtonActionArea>
    </Styled.GridButton>
  )
}

export default GridButton
