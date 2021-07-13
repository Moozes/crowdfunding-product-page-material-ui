import { Button } from "@material-ui/core"
import Header from "./components/Header"
import { CssBaseline, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import FirstCard from "./components/FirstCard";
import SecondCard from "./components/SecondCard";
import ThirdCard from "./components/ThirdCard";
import ModalCard from "./components/ModalCard";
import { useState } from "react";
import FinishModal from "./components/FinishModal";

const useStyles = makeStyles(theme => ({
  '@global' : {
      ul : {
          listStyle : 'none',
          margin : 0,
          padding : 0
      }
  },
  container : {
    position : "relative",
    top : "-80px"
  }
}))

export default () => { 
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalFinishOpen, setModalFinishOpen] = useState(false);
  return(
    <>
      <CssBaseline/>
      <Header>qsddqsd</Header>
      <Container maxWidth="sm"className={classes.container}>
        <FirstCard
          setModalOpen={setModalOpen}
        />
        <SecondCard/>
        <ThirdCard/>
      </Container>
      <ModalCard
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setModalFinishOpen={setModalFinishOpen}
      />
      <FinishModal
        modalFinishOpen={modalFinishOpen}
        setModalFinishOpen={setModalFinishOpen}
      />
    </>
  )
};