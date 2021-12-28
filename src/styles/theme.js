// General imports

// Material-ui imports
import {
    createTheme
} from "@material-ui/core/styles"

// Own imports
import { colors } from "./_colors"

const theme = createTheme({
    palette: {
        background: {
            paper: colors.background,
        },
    },
    overrides: {
        // Overriding styles
        MuiTypography: {
            root: {
                color: colors.text,
                fontWeight: "bold",
                fontFamily: "'SF Mono', 'Courier New', Courier, monospace",
                fontSize: "42px",
            },
        },
    },
})

export default theme