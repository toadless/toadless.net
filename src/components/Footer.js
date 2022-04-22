// General imports
import React from "react"
import {
    useHistory
} from "react-router-dom"

// Own imports

// Component   
const Footer = props => {

    const styles = props.styles;

    const history = useHistory();

    // Component render JSX
    return (
        <div className={styles.footer}>
            <p className={styles.link} onClick={() => window.location.href = "https://status.toadless.net"}>Status</p>
            <p className={styles.link} onClick={() => history.push("/projects")}>Projects</p>
            <p className={styles.link} onClick={() => history.push("/")}>Home</p>
            <p className={styles.credits}>© Toadless 2021</p>
        </div>
    )
}

// Exports
export default Footer