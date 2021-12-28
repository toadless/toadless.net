// General imports
import React from "react"

// Own imports
    // Font awesome icons
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
    import { 
        faGithubSquare,
        faDiscord,
     } from "@fortawesome/free-brands-svg-icons"

// Component
const Header = props => {

    const styles = props.styles;

    // Component render JSX
    return (
        <div className={styles.socials}>
            <FontAwesomeIcon icon={faGithubSquare} className={styles.socialsIcon} onClick={() => window.location.href = "https://github.com/toadless"} />
            <FontAwesomeIcon icon={faDiscord} className={styles.socialsIcon} onClick={() => window.location.href = "https://discord.gg/SzQdJPbwrQ"} />
        </div>
    )
}

// Exports
export default Header