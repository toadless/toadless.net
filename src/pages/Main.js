// General imports
import React from "react"

// Own imports

// Component
const Main = props => {

    const styles = props.styles;

    // Component render JSX
    return (
        <div className={styles.container}>
            <img src="/assets/logo.png" className={styles.logo} alt="logo" />

            <p className={styles.text}>
                Toadless
                <div className={styles.blink}>‌ ‌ </div>
            </p>
        </div>
    )
}

// Exports
export default Main