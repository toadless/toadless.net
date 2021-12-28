// General imports

// Material-ui imports
import { 
    makeStyles
} from "@material-ui/styles"

// Own imports
    // Other JSS files
    import {
        mainStyles,
        projectsStyles,
        headerStyles,
        footerStyles,
    } from "../jss/_exports"

// Styles
const useMainStyles = makeStyles({
    // Insert imported JSS styles
    ...mainStyles,
    ...projectsStyles,
    ...headerStyles,
    ...footerStyles,
})

// Exports
export default useMainStyles