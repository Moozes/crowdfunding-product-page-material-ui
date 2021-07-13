import { createMuiTheme } from "@material-ui/core";
import { cyan } from "@material-ui/core/colors";
export const theme = createMuiTheme({
    palette : {
        primary : {
            main : cyan[500],
            contrastText : "#fff"
        },
    },
    overrides : {
        MuiButton : {
            root : {
                textTransform : 'none',
                borderRadius : 40
            }
        },
        MuiPaper : {
            rounded : {
                borderRadius : 20
            }
        },
        MuiOutlinedInput : {
            root : {
                borderRadius : 20
            }
        }
    }
});