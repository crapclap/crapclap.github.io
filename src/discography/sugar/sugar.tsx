import React from 'react'
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp as Pointer } from '@fortawesome/free-solid-svg-icons';

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
import "../../common/common.css"

type Props = {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
}

const Sugar: React.FC<Props> = props => {

  const cont = useStyles();
  const grid = gridStyles();

  function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />;
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  window.addEventListener('scroll', e => {
    const el: any = document.getElementById('jsScroll');
    if (window.scrollY > 1000) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });

  return (
    <div className={cont.root}>

      {/* SCROLL ICON */}
      <div id="jsScroll" className="scroll" onClick={scrollToTop}>
        <FontAwesomeIcon icon={Pointer} className={cont.pointer} />
      </div>

      {/* ~~~~~ TOP SECTION ~~~~~ */}
      <Container maxWidth='md'>
        <Grid container spacing={0} className='grid.top_root'>

          {/* ~~~~~ ALBUM SECTION ~~~~~ */}
          <Grid item xs={12} md={5} className='grid.album_root'>
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
                <Typography variant="subtitle2" align='right' className={cont.album_order}>
                  3rd EP
                </Typography>
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
              <Grid item xs={6} md={6} className='grid.info_sub_apple'>
                <div className={cont.info_sub_bg}>
                  <a href='https://music.apple.com/jp/album/sugar-ep/1579303124?l=en&ls=1&app=music'>
                    <img src={AppleMusicLogo} className={cont.info_sub_apple_logo} alt='info_sub_apple_logo' />
                  </a>
                </div>
              </Grid>

              {/* SUBSCRIPTION: SPOTIFY */}
              <Grid item xs={6} md={6} className='grid.info_spotify'>
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
                  <Divider />
                  <ListItem button>
                    <ListItemLink href="#PulpFiction">
                      <div className={cont.song_num}>1</div>　<div className={cont.song_title}>パルプフィクション</div>
                    </ListItemLink>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemLink href="#OneThreeFour">
                      <div className={cont.song_num}>2</div>　<div className={cont.song_title}>134</div>
                    </ListItemLink>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemLink href="#Summergreen">
                      <div className={cont.song_num}>3</div>　<div className={cont.song_title}>summergreen</div>
                    </ListItemLink>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemLink href="#AmericanLemonade">
                      <div className={cont.song_num}>4</div>　<div className={cont.song_title}>アメリカンレモネード</div>
                    </ListItemLink>
                  </ListItem>
                  <Divider />
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
              <div className={cont.bottom_logo}>
                <img src={AlbumLogo} alt='album_logo' />
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
      // margintTop: 120,
    },
    album_root: {
      // marginTop: 60
    },
    album_container: {
      padding: '5%',
    },
    album_artwork: {
    },
    album_title: {
    },
    album_order: {
    },
    info_root: {
      // marginTop: 60
    },
    info_container: {
      padding: '5%',
    },
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
      marginTop: 50,
      marginLeft: 0,
      fontFamily: "Helvetica",
      fontWeight: "bold",
      color: "black",
    },
    album_order: {
      marginTop: 65,
      marginRight: 0,
      fontFamily: "sans-serif",
      color: "gray",
    },

    // INFO SECTION
    info_sub_bg: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      '&:hover': {
        background: 'transparent',
      },
      borderRadius: '15px',
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
      marginTop: 10,
    },

    // LISTEN ALBUM
    listen_album: {
      marginTop: 0,
      marginBottom: 20,
      fontFamily: "Hiragino Sans",
      fontWeight: "bold",
      color: "grey",
    },

    // READ LYRICS
    read_lyrics: {
      marginTop: 60,
      marginBottom: 20,
      fontFamily: "Hiragino Sans",
      fontWeight: "bold",
      color: "grey",
    },

    // LYRIC LIST
    song_list: {
      marginTop: 0,
      align: 'center',
      width: '90%',
      fontFamily: "sans-serif",
      backgroundColor: 'transparent',
    },
    song_num: {
      color: 'gray',
      fontSize: 15,
    },
    song_title: {
      color: 'black',
      '&:hover': {
        color: 'grey',
      },
      fontSize: 15,
    },

    // BOTTOM LOGO
    bottom_logo: {
      marginTop: 200,
      paddingRight: 0,
      paddingBottom: 50,
    },
  })
)

export default Sugar