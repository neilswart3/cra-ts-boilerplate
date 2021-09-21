import styled from 'styled-components'

const Genres = styled.div`
  display: grid;
  min-height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 0.5rem;
`

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Styled = { Genres, Loading }

export default Styled
