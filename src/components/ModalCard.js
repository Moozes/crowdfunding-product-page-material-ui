import React , { useState }from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InnerCard from './InnerCard';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const PRODUCTS = [
    {
        title : "Pledge with no reward",
        price : null,
        description : "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email..",
        left : 1 //seulement pour affichage 
    },
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

const useStyles = makeStyles(theme => ({
    closeIcon : {
        position : "absolute",
        top : theme.spacing(1),
        right : theme.spacing(1)
    }
}))

export default (
    {
        modalOpen,
        setModalOpen,
        setModalFinishOpen
    }
) => {
    const classes = useStyles();
    const [activeProduct, setActiveProduct] = useState(null);
    
    const handleContinue = () => {
        setModalOpen(false);
        setModalFinishOpen(true);
    }
    return(
        <Dialog  open={modalOpen} onClose={() => setModalOpen(false)} >
            <DialogTitle>
                Back this project
                <IconButton className={classes.closeIcon} onClick={() => setModalOpen(false)}>
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                </DialogContentText>
                {PRODUCTS.map((product, index) => (
                    <InnerCard 
                        product={product} 
                        modal 
                        key={index} 
                        activeProduct={activeProduct} 
                        index={index}  
                        setActiveProduct={() => setActiveProduct(index)}
                        handleContinue={handleContinue}
                    />
                ))}
            </DialogContent>
        </Dialog>
    );
}