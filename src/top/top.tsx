import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles';

import "../common/common.css"
import Logo from "../img/cc_logo.jpg"
import Artwork from '../img/sugar-artwork.jpg'

const Top = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth='xs'>
        <img src={Logo} className={classes.img} alt='logo' />
        <img src={Artwork} className={classes.img} alt='artwork' />
        <p> New Album: Sugar </p>
        <Button variant="contained" component={Link} to='/discography/sugar' className={classes.button}>
          歌詞公開中
        </Button>
      </Container>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    button: {
      marginTop: 60,
      marginBottom: 60,
      fontWeight: 'bold',
      backgroundColor: 'white',
      width: '80%',
    },
    img: {
      width: '90%',
      marginTop: 60,
    },
  }),
);

export default Top
