import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider, StylesProvider, CssBaseline } from '@material-ui/core'
import { theme } from 'src/lib'
import { Provider } from 'react-redux'
import { store } from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://data-imdb1.p.rapidapi.com'
axios.defaults.method = 'GET'
axios.defaults.headers['x-rapidapi-host'] = 'data-imdb1.p.rapidapi.com'
axios.defaults.headers['x-rapidapi-key'] =
  'ba2618e220mshc1e7f7aa2c0eceap1a123ejsncda8e0ca61b5'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
