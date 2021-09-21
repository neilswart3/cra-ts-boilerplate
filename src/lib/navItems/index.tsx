import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import NewReleasesIcon from '@material-ui/icons/NewReleases'
import StarsIcon from '@material-ui/icons/Stars'
import GradeIcon from '@material-ui/icons/Grade'
import CategoryIcon from '@material-ui/icons/Category'

const navItems = {
  home: {
    label: 'Home',
    header: 'Film Finder',
    path: '/',
    icon: <HomeIcon />,
  },
  topFilms: {
    label: 'Top Films',
    header: 'Top Rated Films',
    path: '/top-films',
    icon: <GradeIcon />,
  },
  genres: {
    label: 'Genres',
    header: 'Films By Genre',
    path: '/genres',
    icon: <CategoryIcon />,
  },
  upcoming: {
    label: 'Upcoming',
    header: 'Upcoming Films',
    path: '/upcoming',
    icon: <NewReleasesIcon />,
  },
  favourites: {
    label: 'Favourites',
    header: 'My Favourites',
    path: '/favourites',
    icon: <StarsIcon />,
  },
}

export default navItems
