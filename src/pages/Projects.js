// General imports
import React from "react"

// Own imports
    // Font awesome icons
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { 
        faDragon,
        faFrog,
        faGlobe,
    } from '@fortawesome/free-solid-svg-icons'

// Component
const Projects = props => {

    const styles = props.styles;

    // Component render JSX
    return (
        <div className={styles.container}>
            <img src="/assets/logo.png" className={styles.logo} alt="logo" />

            <p className={styles.text}>
                Projects
                <div className={styles.blink}>i</div>
            </p>

            <div className={styles.projectsList}>
                {/* My Site.... */}
                <li className={styles.projectsName} onClick={() => window.location.href = "https://github.com/toadless/toadless"}>
                    <FontAwesomeIcon className={styles.fontAwesomeIcon} icon={faFrog} />
                    My Site
                </li>

                {/* Quack.... */}
                <li className={styles.projectsName} onClick={() => window.location.href="https://github.com/toadless/quack"}>
                    <FontAwesomeIcon className={styles.fontAwesomeIcon} icon={faDragon} />
                    Quack
                </li>

                {/* Quack Site.... */}
                <li className={styles.projectsName} onClick={() => window.location.href = "https://github.com/toadless/quack-site"}>
                    <FontAwesomeIcon className={styles.fontAwesomeIcon} icon={faGlobe} />
                    Quacks Site
                </li>
            </div>
        </div>
    )
}

// Exports
export default Projects