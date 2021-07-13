import { useState } from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import mastercraftLogo from "../images/logo-mastercraft.svg";
import { Grid, Button, IconButton } from "@material-ui/core";

import BookmarkIcon from '@material-ui/icons/Bookmark';

const useStyles = makeStyles(theme => ({
    paper : {
        position : "relative",
        padding : theme.spacing(6),
        marginBottom : theme.spacing(4),
    },
    img : {
        position : "absolute",
        top : 0,
        left : "50%",
        transform : 'translate(-50%, -50%)'
    },
    bookmark : {
        cursor : "pointer",
        '&:hover' : {
            '&>button' : {
                background : props => props.bookmarked ? theme.palette.primary.dark : theme.palette.grey[900],
            }
        }
    },
    iconButton : {
        background : props => props.bookmarked ?  theme.palette.primary.main : theme.palette.grey[700],
    },
    svg : {
        color : props => props.bookmarked ? "#fff" : theme.palette.grey[500],
    },
    span : {
        padding : theme.spacing(2, 2, 2, 1),
        color : props => props.bookmarked ? theme.palette.primary.main : "#000",
    }
}))

export default (
    props
) => {
    const [bookmarked, setBookmarked] = useState(false);
    const classes = useStyles({bookmarked});
    return(
        <Paper
            className={classes.paper}
        >
            <img src={mastercraftLogo} alt="logo mastercraft" className={classes.img} />
            <Typography
                variant="h5"
                align="center"
                gutterBottom
            >
            Mastercraft Bamboo Monitor Riser
            </Typography>
            <Typography
                varaint="body1"
                align="center"
                paragraph
            >
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
            </Typography>
            <Grid container justify="space-between" alignItems="center">
                <Grid item>
                    <Button
                        onClick={() => props.setModalOpen(true)}
                        variant="contained"
                        color="primary"
                    >
                        back this project
                    </Button>
                </Grid>
                <Grid item>
                    <div
                        className={classes.bookmark}
                        onClick={() => setBookmarked(!bookmarked)}
                    >
                        <IconButton
                            disableRipple
                            className={classes.iconButton}
                        >
                            <BookmarkIcon className={classes.svg} fontSize="small"/>
                        </IconButton>
                        <span
                            className={classes.span}
                        >Bookmark{bookmarked ? 'ed' : ''}</span>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}