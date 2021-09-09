
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'

    },
    textColor: {
        color: 'rgba(0, 0, 255, 0.3)',
        textDecoration: "underline",
        textTransform: "uppercase"
    },
    overrides: {

    }

}));
export default useStyles;