import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ErrorMessage, Loading } from 'src/components'
import { FilmsState } from 'src/store/actions/films/types'
import * as actions from 'src/store/actions/films'
import Styled from './styles'
import FilmItem from './FilmItem'

type LocationState = {
  state: {
    genre: string
  }
}

interface ReduxStateProps {
  films: FilmsState
}

interface ReduxDispatchProps {
  getFilms: (args: string) => void
}

type FilmsProps = ReduxStateProps & ReduxDispatchProps

const Films: React.FC<FilmsProps> = (props: FilmsProps) => {
  const {
    films: { data, loading, error },
    getFilms,
  } = props
  const { state }: LocationState = useLocation()
  const { push } = useHistory()

  if (!state.genre) push('/')

  React.useEffect(() => {
    if (data.length === 0 && state.genre) {
      getFilms(state.genre)
    }
  }, [getFilms, data, state.genre])

  if (loading) return <Loading />
  if (error) return <ErrorMessage />

  return (
    <Styled.Films>
      {data.length > 0 &&
        data.map(({ imdb_id: id, title }) => (
          <FilmItem key={id} id={id} title={title} />
        ))}
    </Styled.Films>
  )
}

const mapStateToProps = ({ films }: any): ReduxStateProps => ({
  films,
})

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  getFilms: (args: string) => dispatch(actions.fetchFilmsRequest({ args })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Films)
