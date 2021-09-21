import React from 'react'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'src/store/actions/test'
import { Test } from 'src/lib/types'
import Styled from './styles'
import { CircularProgress } from '@material-ui/core'
import GenreItem from './GenreItem'

interface ReduxDispatchProps {
  getGenres: () => void
}

interface ReduxStateProps {
  genres: Test[]
  loading: boolean
}

type GenresProps = ReduxDispatchProps & ReduxStateProps

const Genres: React.FC<GenresProps> = (props: GenresProps) => {
  const { loading, genres, getGenres } = props

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

  return (
    <Styled.Genres>
      {genres.length > 0 &&
        genres.map(({ genre }) => <GenreItem key={genre} title={genre} />)}
    </Styled.Genres>
  )
}

const mapStateToProps = ({ test }: any): ReduxStateProps => ({
  genres: test.tests,
  loading: test.loading,
})

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  getGenres: () => dispatch(actions.fetchTestRequest()),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Genres)
