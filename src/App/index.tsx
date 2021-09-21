import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Genres } from 'src/components'
import { GeneralLayout } from 'src/layouts'

function App() {
  return (
    <BrowserRouter>
      <GeneralLayout>
        <Switch>
          <Route path="/favourites">favourites</Route>
          <Route path="/upcoming">upcoming</Route>
          <Route path="/genres">
            <Genres />
          </Route>
          <Route path="/top-films">top Films</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </GeneralLayout>
    </BrowserRouter>
  )
}

export default App
