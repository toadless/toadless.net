// General imports

// Own imports
    // Variables
    import { colors } from "../_colors"

// Styles
const mainStyles = {
    container: {
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    blink: {
        marginLeft: "16px",
        display: "inline",
        background: colors.text,
        animation: "$blink 1s infinite",
        fontWeight: "bold",
        fontFamily: "'SF Mono', 'Courier New', Courier, monospace",
        fontSize: "42px",
        color: colors.text,

        userSelect: "none",
        WebkitUserSelect: "none",
        KhtmlUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none"
    },

    logo: {
        height: "20vmin",
        animation: "$spin infinite 10s linear",

        userSelect: "none",
        WebkitUserSelect: "none",
        KhtmlUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",

        borderRadius: "50%",
    },

    text: {
        fontWeight: "bold",
        fontFamily: "'SF Mono', 'Courier New', Courier, monospace",
        fontSize: "42px",
        color: colors.text,
        display: "inline",

        userSelect: "none",
        WebkitUserSelect: "none",
        KhtmlUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none"
    },
    
    "@keyframes spin": {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)"
        },
    },

    "@keyframes blink": {
        from: {
          opacity: 1,
        },
      
        to: {
          opacity: 0,
        },
      }
}

// Exports
export default mainStyles