import React from 'react'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CircularProgress, Typography } from '@material-ui/core'
import { GenresState } from 'src/store/actions/genres/types'
import * as actions from 'src/store/actions/genres'
import GenreItem from './GenreItem'
import Styled from './styles'

interface ReduxDispatchProps {
  getGenres: () => void
}

interface ReduxStateProps {
  data: GenresState
}

type GenresProps = ReduxDispatchProps & ReduxStateProps

const Genres: React.FC<GenresProps> = (props: GenresProps) => {
  const {
    data: { genres, loading, error },
    getGenres,
  } = props

  React.useEffect(() => {
    if (getGenres && genres.length === 0) {
      getGenres()
    }
  }, [getGenres, genres])

  if (loading)
    return (
      <Styled.Loading>
        <CircularProgress />
      </Styled.Loading>
    )

  if (error)
    return (
      <Styled.Loading>
        <Typography align="center" variant="h4">
          An error has occured. Please try again later.
        </Typography>
      </Styled.Loading>
    )

  return (
    <Styled.Genres>
      {genres.length > 0 &&
        genres.map(({ genre }) => <GenreItem key={genre} title={genre} />)}
    </Styled.Genres>
  )
}

const mapStateToProps = ({ genres }: any): ReduxStateProps => ({
  data: genres,
})

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  getGenres: () => dispatch(actions.fetchGenresRequest()),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Genres)
