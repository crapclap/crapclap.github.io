import React from 'react'
import { Link as Scroll } from 'react-scroll';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
  PulpFiction,
  OneThreeFour,
  Summergreen,
  AmericanLemonade
} from './lyrics/lyrics'

import {
  Container,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';

import Artwork from '../../img/sugar-artwork.jpg'
import AlbumLogo from '../../img/sugar-logo.svg'
import AppleMusicLogo from '../../img/apple-music.svg'
import SpotifyLogo from '../../img/spotify.png'
import Arrow from '../../img/arrow.svg'
import "../../common/common.css"

const Sugar = () => {

  const cont = useStyles();
  const grid = gridStyles();

  window.addEventListener('scroll', e => {
    const el: any = document.getElementById('ScrollToTop');
    if (window.scrollY > 1000) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });

  return (
    <div className={cont.root} id='Top'>

      {/* ~~~~~ Scroll Button ~~~~~ */}
      <div id="ScrollToTop" className="scroll">
        <Scroll to="Header" smooth={true} duration={100}>
          <img src={Arrow} className={cont.pointer} />
        </Scroll>
      </div>

      {/* ~~~~~ TOP SECTION ~~~~~ */}
      <Container maxWidth='md'>
        <Grid container spacing={0} className={grid.top_root}>

          {/* ~~~~~ ALBUM SECTION ~~~~~ */}
          <Grid item xs={12} md={5} className={grid.album_root}>
            <Grid container spacing={0} className={grid.album_container}>

              {/* ALBUM ARTWORK */}
              <Grid item xs={12} md={12} className={grid.album_artwork}>
                <img src={Artwork} className={cont.album_artwork} alt='artwork' />
              </Grid>

              {/* ALBUM TITLE: SUGAR */}
              <Grid item xs={6} md={6} className={grid.album_title}>
                <Typography variant="h4" align='left' className={cont.album_title}>
                  Sugar
                </Typography>
              </Grid>

              {/* ALBUM ORDER: 3RD EP */}
              <Grid item xs={6} md={6} className={grid.album_order}>
                <p className={cont.album_order}> 3rd EP </p>
              </Grid>

            </Grid>
          </Grid>

          <Grid item xs={1} sm={1} md={2} className='divider'></Grid>

          {/* ~~~~~ INFO SECTION ~~~~~ */}
          <Grid item xs={12} md={5} className='grid.info_root'>
            <Grid container spacing={2} className={grid.info_container}>

              {/* INFO: アルバムを聴く */}
              <Grid item xs={12} md={12} className='grid.info_listen_album'>
                <Typography variant="overline" align='left' display="block" className={cont.listen_album}>
                  アルバムを聴く
                </Typography>
              </Grid>

              {/* SUBSCRIPTION: APPLE MUSIC */}
              <Grid item xs={6} md={6} className={grid.info_sub_apple}>
                <div className={cont.info_sub_bg}>
                  <a href='https://music.apple.com/jp/album/sugar-ep/1579303124?l=en&ls=1&app=music'>
                    <img src={AppleMusicLogo} className={cont.info_sub_apple_logo} alt='info_sub_apple_logo' />
                  </a>
                </div>
              </Grid>

              {/* SUBSCRIPTION: SPOTIFY */}
              <Grid item xs={6} md={6} className={grid.info_sub_spotify}>
                <div className={cont.info_sub_bg}>
                  <a href='https://open.spotify.com/artist/1qefytAD4qHuTqxo2iw6sD?si=SNQVLhymSeKPNMvxnhAxDA&dl_branch=1'>
                    <img src={SpotifyLogo} className={cont.info_sub_spotify_logo} alt='info_sub_spotify_logo' />
                  </a>
                </div>
              </Grid>


              {/* INFO: 歌詞を読む */}
              <Grid item xs={12} md={12} className='grid.info_read_lyrics'>
                <Typography variant="overline" align='left' display="block" className={cont.read_lyrics}>
                  歌詞を読む
                </Typography>
              </Grid>

              {/* SONG LIST */}
              <Grid item xs={12} md={12} className='grid.info_song_list'>
                <List className={cont.song_list}>
                  <Divider className={cont.song_list_divider} variant='fullWidth' />

                  <Scroll to="PulpFiction" smooth={true} duration={100}>
                    <ListItem className={cont.song_list_button}>
                      <div className={cont.song_num}>1</div>　<div className={cont.song_title}>パルプフィクション</div>
                    </ListItem>
                  </Scroll>

                  <Divider className={cont.song_list_divider} variant='fullWidth' />

                  <Scroll to="OneThreeFour" smooth={true} duration={100}>
                    <ListItem className={cont.song_list_button}>
                      <div className={cont.song_num}>2</div>　<div className={cont.song_title}>134</div>
                    </ListItem>
                  </Scroll>

                  <Divider className={cont.song_list_divider} variant='fullWidth' />

                  <Scroll to="Summergreen" smooth={true} duration={100}>
                    <ListItem className={cont.song_list_button}>
                      <div className={cont.song_num}>3</div>　<div className={cont.song_title}>summergreen</div>
                    </ListItem>
                  </Scroll>

                  <Divider className={cont.song_list_divider} variant='fullWidth' />

                  <Scroll to="AmericanLemonade" smooth={true} duration={100}>
                    <ListItem className={cont.song_list_button}>
                      <div className={cont.song_num}>4</div>　<div className={cont.song_title}>アメリカンレモネード</div>
                    </ListItem>
                  </Scroll>

                  <Divider className={cont.song_list_divider} variant='fullWidth' />
                </List>
              </Grid>

            </Grid>
          </Grid>

        </Grid>
      </Container>

      {/* LYRIC AREA */}
      <Container maxWidth='sm'>
        <div className='lyric_area'>
          <div id='PulpFiction'>
            <PulpFiction />
          </div>
          <div id='OneThreeFour'>
            <OneThreeFour />
          </div>
          <div id='Summergreen'>
            <Summergreen />
          </div>
          <div id='AmericanLemonade'>
            <AmericanLemonade />
          </div>
        </div>

        {/* BOTTOM LOGO */}
        <div className='bottom_logo'>
          <Grid container spacing={3}>
            <Grid item xs={6} />
            <Grid item xs={6}>
              <div className={cont.bottom_section}>
                <img src={AlbumLogo} alt='album_logo' className={cont.bottom_logo} />
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>

    </div >
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
    album_root: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: 30,
      },
      [theme.breakpoints.up('md')]: {
        marginBottom: 30,
      },
      [theme.breakpoints.up('lg')]: {
      },
    },
    album_container: {
      padding: 20,
    },
    album_artwork: {
    },
    album_title: {
    },
    album_order: {
    },
    info_root: {
    },
    info_container: {
      padding: 20,
    },
    info_sub_apple: {
      padding: 0,
      // width: 150,
      // height: 100,
    },
    info_sub_spotify: {
      padding: 0,
      // width: 150,
      // height: 100,
    }
  })
)

const useStyles = makeStyles((theme: Theme) =>

  createStyles({

    // ROOT
    root: {
    },

    // ALBUM SECTION
    album_artwork: {
      width: '100%',
    },
    album_title: {
      marginTop: 53,
      marginLeft: 0,
      fontFamily: "Helvetica",
      fontWeight: "bold",
      fontSize: 25,
      color: "black",
    },
    album_order: {
      marginTop: 60,
      marginRight: 0,
      textAlign: 'right',
      // fontFamily: "Brandon Grotesque",
      fontSize: 12,
      color: "gray",
    },

    // INFO SECTION
    info_sub_bg: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'white',
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: 'white',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.7)',
        },
      },
      [theme.breakpoints.up('lg')]: {
        backgroundColor: 'white',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.7)',
        },
      },
      width: 148,
      height: 95,
      borderRadius: '12px',
      margin: 'auto',
      textAlign: 'center',
    },
    info_sub_apple_logo: {
      width: '50%',
      margin: 'auto',
      padding: 38,
      alignItems: 'center',
    },
    info_sub_spotify_logo: {
      width: '50%',
      margin: 'auto',
      padding: 38,
      alignItems: 'center',
    },

    // SCROLL ICON
    pointer: {
      marginTop: 0,
    },

    // LISTEN ALBUM
    listen_album: {
      marginTop: 0,
      fontFamily: "ヒラギノ角ゴシック",
      fontWeight: "bold",
      color: "#B2B2B2",
    },

    // READ LYRICS
    read_lyrics: {
      marginTop: 60,
      fontFamily: "ヒラギノ角ゴシック",
      fontWeight: "bold",
      color: "#B2B2B2",
    },

    // LYRIC LIST
    song_list: {
      marginTop: 0,
      align: 'left',
      width: '100%',
      fontFamily: "ヒラギノ角ゴシック",
      backgroundColor: 'transparent',
    },
    song_list_button: {
      paddingLeft: 0,
      height: 55,
      [theme.breakpoints.down('sm')]: {
        fontWeight: 600,
        color: '#383D40',
      },
      [theme.breakpoints.up('md')]: {
        fontWeight: 500,
        color: '#0D1B22',
        '&:hover': {
          color: 'grey',
        },
      },
      [theme.breakpoints.up('lg')]: {
        fontWeight: 500,
        color: '#0D1B22',
        '&:hover': {
          color: 'grey',
        },
      },
    },
    song_list_divider: {
      backgroundColor: '#E8E8E8',
    },
    song_num: {
      color: 'gray',
      fontSize: 13,
    },
    song_title: {
      fontSize: 13,
    },

    // BOTTOM LOGO
    bottom_section: {
      marginTop: 200,
      paddingRight: 0,
      paddingBottom: 50,
    },
    bottom_logo: {
      width: '80%',
    },
  })
)

export default Sugar