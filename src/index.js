// General imports
import React from "react"
import ReactDOM from "react-dom"

// Own imports - components
import App from "./App"

// Own imports - styles
import theme from "./styles/theme.js"

// Own imports - service worker
import serviceWorker from "./serviceWorker"

// Material ui imports
import {
    ThemeProvider
} from '@material-ui/styles'

ReactDOM.render( 
  <ThemeProvider theme={theme}>
      <App />
  </ThemeProvider>,
  document.getElementById("root")
)

serviceWorker.register();