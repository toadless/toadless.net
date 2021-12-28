//General imports
import React from "react"

import { 
    /*Router must be imported for its functionality to work, even though the 
    Router component wraps the parent App component.*/
    BrowserRouter as Router, Route, Redirect, Switch
} from "react-router-dom"

// Own imports 
    // Pages
    import {
        MainPage,
        ProjectsPage,
    } from '../pages/_exports';
    // Styles
    import useMainStyles from "../styles/hooks/main";
    // Components
    import {
        Header,
        Footer,
    } from "./_exports"

// Component
const Main = () => {
    const styles = useMainStyles();

    return (
        <div>
            <Header styles={styles} />
            <Footer styles={styles} />

            <Switch>
                {/*Links to Route components below are rendered by the Header 
                        component, so parent Router component wraps entire App component
                        instead. Note that child components must not be rendered using 
                        the render callback of a Route component, as this will prevent
                        the use of hooks within those child components!*/}
                <Route exact path="/">
                    <MainPage styles={styles} />
                </Route>

                <Route exact path="/projects">
                    <ProjectsPage styles={styles} />
                </Route>

            </Switch>
        </div>
    )
}

export default Main  