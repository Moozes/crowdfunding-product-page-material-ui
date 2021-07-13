
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const innerCardStyles = makeStyles(theme => ({
    paper : {
        marginBottom : theme.spacing(4),
        padding : theme.spacing(1),
        borderColor : props => (props.active && props.product.left !== 0 && props.modal) ? theme.palette.primary.main : '',
    },
    title : {
        flex : 1,
    },
    left : {
        flex : 1
    },
    cardHeader : {
        marginBottom : theme.spacing(2)
    },
    cardContent : {
        marginBottom : theme.spacing(2)
    },
    input : {
        width : 80,
        marginRight : theme.spacing(1),
    }
}))

export default  (
    {
        product,
        modal,
        index,
        activeProduct,
        setActiveProduct,
        handleContinue
    }
) => {
    const classes = innerCardStyles({active : index==activeProduct, product, modal});
    const actionAria = !modal ? (
        <>
            <Grid item className={classes.left} >
                <Typography component="span" variant="h6" > {product.left} </Typography>
                <Typography component="span" variant="subtitle1" color="textSecondary" >left</Typography>
            </Grid>
            <Grid item component={Button} variant="contained" color="primary" disabled={product.left == 0}>
                {product.left !== 0 ? 'Select Reward' : 'Out of stock'} 
            </Grid>
        </>

    ) : (index == activeProduct && product.left != 0) ? (
            <>
                <Grid item className={classes.left} >
                <Typography  >
                    Enter your pledge
                </Typography>
                </Grid>
                <Grid item>
                    <TextField 
                        type="number"
                        size="small"
                        variant="outlined"
                        className={classes.input}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleContinue}
                    >
                        Continue
                    </Button>
                </Grid>
            </>
        ) : ('')
    ;

    return(
        <Paper variant="outlined" className={classes.paper} onClick={setActiveProduct}>
            <Grid container className={classes.cardHeader} >
                <Grid item component={Typography} variant="h6" className={classes.title} >{product.title}</Grid>
                <Grid item component={Typography} color="primary">{product.price ? `Pledge ${product.price} or more` : ''}</Grid>
            </Grid>
            <Typography color="textSecondary" className={classes.cardContent} >{product.description}</Typography>
            <Grid container alignItems="center" >
                {actionAria}
            </Grid>
        </Paper>
    );
}