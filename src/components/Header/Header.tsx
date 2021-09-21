import React from 'react'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Styled from './styles'
import { useLocation } from 'react-router'
import { navItems } from 'src/lib'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { pathname } = useLocation()

  const [{ header: title }] = Object.values(navItems).filter(
    ({ path }) => path === pathname
  )

  return (
    <Styled.Header>
      <Styled.Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Styled.Typography variant="h6">
          {title || 'Film Finder'}
        </Styled.Typography>
        <IconButton color="inherit" size="small">
          <AccountCircle fontSize="large" />
        </IconButton>
      </Styled.Toolbar>
    </Styled.Header>
  )
}
export default Header
