import React from 'react'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { GenresState } from 'src/store/actions/genres/types'
import * as actions from 'src/store/actions/genres'
import { ErrorMessage, Loading } from 'src/components'
import GenreItem from './GenreItem'
import Styled from './styles'

interface ReduxDispatchProps {
  getGenres: () => void
}

interface ReduxStateProps {
  genres: GenresState
}

type GenresProps = ReduxDispatchProps & ReduxStateProps

const Genres: React.FC<GenresProps> = (props: GenresProps) => {
  const {
    genres: { data, loading, error },
    getGenres,
  } = props

  React.useEffect(() => {
    if (getGenres) {
      getGenres()
    }
  }, [getGenres])

  if (loading) return <Loading />
  if (error) return <ErrorMessage />

  return (
    <Styled.Genres>
      {data.length > 0 &&
        data.map(({ genre }) => <GenreItem key={genre} title={genre} />)}
    </Styled.Genres>
  )
}

const mapStateToProps = ({ genres }: any): ReduxStateProps => ({
  genres,
})

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  getGenres: () => dispatch(actions.fetchGenresRequest()),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Genres)
