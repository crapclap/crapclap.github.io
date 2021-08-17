import React from 'react'
import { Link } from 'react-router-dom'
import { Timeline } from "react-twitter-widgets";

import {
  Button,
  Grid,
  Container
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles';

import Logo from "../img/cc_logo.jpg"
import Artwork from '../img/sugar-artwork.jpg'
import Member from '../img/member.jpg'
import "../common/common.css"

const Top = () => {

  const grid = gridStyles();
  const cont = useStyles();

  return (
    <div className={cont.root}>
      <Container maxWidth='md'>
        <Grid container spacing={0} className={grid.top_root}>

          <Grid item xs={12} md={5} className={grid.artwork_root}>
            <Grid container spacing={0} className={grid.artwork_container}>

              <Grid item xs={12} md={12} className={grid.artwork}>
                <img src={Logo} className={cont.img} alt='logo' />
              </Grid>

              <Grid item xs={12} md={12} className={grid.artwork}>
                <img src={Artwork} className={cont.img} alt='artwork' />
                <p> New Album: Sugar </p>
                <Button variant="contained" component={Link} to='/discography/sugar' className={cont.button}>
                  歌詞公開中
                </Button>
              </Grid>

            </Grid>
          </Grid>

          <Grid item xs={1} sm={1} md={2} className='divider'></Grid>

          <Grid item xs={12} md={5} className={grid.tweet_root}>
            <Grid container spacing={0} className={grid.tweet_container}>

            <Grid item xs={12} md={12} className={grid.artwork}>
                <img src={Member} className={cont.img} alt='member' />
              </Grid>

              <Grid item xs={12} md={12} className={cont.tweet}>
                <Timeline
                  dataSource={{
                    sourceType: 'profile',
                    screenName: 'crap_clap'
                  }}
                  options={{
                    width: "90%",
                    height: "600"
                  }}
                />
              </Grid>

            </Grid>
          </Grid>

        </Grid>
      </Container>
    </div>
  )
}

const gridStyles = makeStyles((theme: Theme) =>

  createStyles({

    top_root: {
      [theme.breakpoints.down('sm')]: {
        marginTop: 100,
      },
      [theme.breakpoints.up('md')]: {
        marginTop: 160,
      },
      [theme.breakpoints.up('lg')]: {
        marginTop: 160,
      },
    },
    artwork_root: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: 30,
      },
      [theme.breakpoints.up('md')]: {
        marginBottom: 30,
      },
      [theme.breakpoints.up('lg')]: {
      },
    },
    tweet_root: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: 30,
      },
      [theme.breakpoints.up('md')]: {
        marginBottom: 30,
      },
      [theme.breakpoints.up('lg')]: {
        marginBottom: 60,
      },
    },
    artwork_container: {
    },
    artwork: {
      marginBottom: 60,
    },
    tweet_container: {
    },
  })
)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    button: {
      marginBottom: 60,
      marginTop: 60,
      fontWeight: 'bold',
      backgroundColor: 'white',
      width: '80%',
    },
    img: {
      width: '90%',
    },
    tweet: {
    },
  }),
);

export default Top
