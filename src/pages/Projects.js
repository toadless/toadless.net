// General imports
import React from "react"

// Own imports
    // Font awesome icons
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { 
        faDragon,
        faFrog,
        faGlobe,
        faMusic,
    } from '@fortawesome/free-solid-svg-icons'

// Component
const Projects = props => {

    const styles = props.styles;

    // Component render JSX
    return (
        <div className={styles.container}>
            <img src="/assets/logo.jpeg" className={styles.logo} alt="logo" />

            <p className={styles.text}>
                Projects
                <div className={styles.blink}>‌ ‌ </div>
            </p>

            <div className={styles.projectsList}>
                {/* My Site.... */}
                <li className={styles.projectsName} onClick={() => window.location.href = "https://github.com/toadless/toadless"}>
                    <FontAwesomeIcon className={styles.fontAwesomeIcon} icon={faFrog} />
                    My Site
                </li>

                {/* Radio.... */}
                <li className={styles.projectsName} onClick={() => window.location.href="https://github.com/toadless/radio"}>
                    <FontAwesomeIcon className={styles.fontAwesomeIcon} icon={faMusic} />
                    Radio
                </li>

                {/* Monke */}
                <li className={styles.projectsName} onClick={() => window.location.href = "https://github.com/toadless/monke-bot"}>
                    <FontAwesomeIcon className={styles.fontAwesomeIcon} icon={faDragon} />
                    Monke
                </li>
            </div>
        </div>
    )
}

// Exports
export default Projects