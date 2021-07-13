import React , { useState }from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import InnerCard from './InnerCard';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '../images/icon-check.svg';

const useStyles = makeStyles(theme => ({
    actions : {
        justifyContent : "center",
    }
}))

export default (
    props
) => {
    const classes = useStyles();
    return(
        <Dialog open={props.modalFinishOpen} onClose={() => props.setModalFinishOpen(false)} >
            <DialogTitle align="center" >
                <img src={CheckIcon} />
                <br/>
                Thanks for your support!
            </DialogTitle>
            <DialogContent>
                <DialogContentText align="center">
                Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.actions} >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => props.setModalFinishOpen(false)}
                >
                    Got it
                </Button>
            </DialogActions>
        </Dialog>
    );
}