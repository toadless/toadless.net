// General imports
import React from "react"
import {
  /*Router must be imported for its functionality to work, even though the 
  Router component wraps the parent App component.*/
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Own imports
  // Components
  import {
    Main
  } from "./components/_exports"
  // Styles
  import useAppStyles from "./styles/hooks/app";

// Component
const App = () => {
  const styles = useAppStyles();

  // Component render JSX
  return (
    <Router>

      <Main className={styles.app} />

    </Router>
  )
}

// Exports
export default App