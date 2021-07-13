
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InnerCard from './InnerCard';

const PRODUCTS = [
    {
        title : "Bamboo Stand",
        price : 25,
        description : "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        left : 101 
    },
    {
        title : "Black Edition Stand",
        price : 75,
        description : "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        left : 64
    },
    {
        title : "Mahogany Special Edition",
        price : 200,
        description : "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        left : 0 
    }
];

const thirdCardStyles = makeStyles(theme => ({
    paper : {
        padding : theme.spacing(6),
    },
    typo : {
        marginBottom : theme.spacing(4),
    }
}))

export default (
    props
) => {
    const classes = thirdCardStyles();
    return(
        <Paper className={classes.paper} >
            <Typography
                variant="h5"
                gutterBottom
            >About this project</Typography>
            <Typography
                color="textSecondary"
                gutterBottom
            >The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</Typography>
            <Typography
                color="textSecondary"
                gutterBottom
                className={classes.typo}
            >Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</Typography>
            {PRODUCTS.map(product => (
                <InnerCard product={product} key={product.title} />
            ))}
        </Paper>
    );
}

