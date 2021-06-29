import { CssBaseline } from '@material-ui/core'
import App from 'domains/App'
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('📕root📕'),
)

reportWebVitals()
