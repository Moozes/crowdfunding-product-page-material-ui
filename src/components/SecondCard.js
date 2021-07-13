import {Fragment} from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const stats = [
    {
        strong : "$89,914",
        sub : "of $100,000 backed",
    },
    {
        strong : "5,007",
        sub : "total backers",
    },
    {
        strong : "56",
        sub : "days left",
    }
]

const useStyles = makeStyles(theme => ({
    paper : {
        padding : theme.spacing(6),
        marginBottom : theme.spacing(4),
    },
    grid : {
        marginBottom : theme.spacing(4),
    },
    gridItem : {
        alignSelf : "stretch"
    },
    hr : {
        height : "100%",
        margin : 0
    },
    progressBar : {
        height : 10
    }
}))


export default (
    props
) => {
    const classes = useStyles();
    return(
        <Paper className={classes.paper}>
            <Grid container justify="space-between" alignItems="center" className={classes.grid} >
                    {stats.map((stat, index) => (
                        <Fragment key={index}>
                            <Grid item  >
                                <Typography
                                    variant="h5"
                                >
                                    {stat.strong}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    color="textSecondary"
                                >
                                    {stat.sub}
                                </Typography>
                            </Grid>
                            {index !== 2 && (
                                    <Grid item  className={classes.gridItem}>
                                        <hr className={classes.hr}/>
                                    </Grid>
                            )}
                        </Fragment>
                    ))}
            </Grid>
            <LinearProgress variant="determinate" value={50} className={classes.progressBar}/>
        </Paper>
    );
}