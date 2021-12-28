// General imports

// Material-ui imports
import { 
    makeStyles
} from "@material-ui/styles"

// Own imports
    // Styles
    import { colors } from "../_colors"

// Styles
const useAppStyles = makeStyles({
    '@global':{
        body:{
          backgroundColor: colors.background,
        },
    },

    app: {
    }
})

// Exports
export default useAppStyles