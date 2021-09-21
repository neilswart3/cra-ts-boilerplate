import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { BottomNavigationAction } from '@material-ui/core'
import { navItems } from 'src/lib'
import Styled from './styles'

type Value = '/' | '/top-films' | '/genres' | '/upcoming' | 'favourites'

const Footer: React.FC = () => {
  const { pathname } = useLocation()
  const { push } = useHistory()

  const handleChange = (_e: React.ChangeEvent<{}>, newVal: Value): void => {
    push(newVal)
  }

  return (
    <Styled.Footer value={pathname} onChange={handleChange}>
      {Object.entries(navItems).map(([key, { label, path, icon }]) => (
        <BottomNavigationAction
          key={key}
          value={path}
          label={label}
          icon={icon}
        />
      ))}
    </Styled.Footer>
  )
}

export default Footer
