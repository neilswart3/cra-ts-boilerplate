import Case from 'case'
import { navItems } from 'src/lib'

export const getHeaderText = (pathname: string): string => {
  const [navPath] = Object.values(navItems).filter(
    ({ path }) => path === pathname
  )

  if (!navPath) {
    const pathArray = pathname.split('/')
    const path = pathArray[pathArray.length - 1]

    return Case.capital(path)
  }

  return navPath.header
}
