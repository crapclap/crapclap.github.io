import React from 'react'
import { Link as Scroll } from 'react-scroll';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import {
  Container,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';

import {
  MilkTea,
  Rain,
  TheTime
} from './lyrics/lyrics'

import {
  ContentStyles,
  GridStyles
} from '../_template/styles'

import "../../common/common.css"
import Artwork from './img/glm-artwork.jpg'
import AppleMusicLogo from '../../common/img/apple-music.svg'
import SpotifyLogo from '../../common/img/spotify.png'
import Arrow from '../../common/img/arrow.svg'
import { GoodLookingMan as Information } from '../../common/list/list';

const GoodLookingMan = () => {

  const cont = ContentStyles()
  const grid = GridStyles()

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
          <img src={Arrow} className={cont.pointer} alt='arrow' />
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
                  {Information.title}
                </Typography>
              </Grid>

              {/* ALBUM ORDER: 3RD EP */}
              <Grid item xs={6} md={6} className={grid.album_order}>
                <p className={cont.album_order}> {Information.order}</p>
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
                  <a href={Information.link.apple_music}>
                    <img src={AppleMusicLogo} className={cont.info_sub_apple_logo} alt='info_sub_apple_logo' />
                  </a>
                </div>
              </Grid>

              {/* SUBSCRIPTION: SPOTIFY */}
              <Grid item xs={6} md={6} className={grid.info_sub_spotify}>
                <div className={cont.info_sub_bg}>
                  <a href={Information.link.spotyfy}>
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

                  {Information.song.map((song, index: number) => {
                    index += 1;
                    return (
                      <>
                        <Divider className={cont.song_list_divider} variant='fullWidth' />

                        <Scroll to={song.id} smooth={true} duration={100}>
                          <ListItem className={cont.song_list_button}>
                            <div className={cont.song_num}>{index}</div>　<div className={cont.song_title}>{song.name}</div>
                          </ListItem>
                        </Scroll>
                      </>
                    )
                  })}

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
          <div id='MilkTea'>
            <MilkTea />
          </div>
          <div id='Rain'>
            <Rain />
          </div>
          <div id='TheTime'>
            <TheTime />
          </div>
        </div>

        {/* BOTTOM LOGO */}
        <div className='bottom_logo'>
          <Grid container spacing={3}>
            <Grid item xs={6} />
            <Grid item xs={6}>
              <div className={cont.bottom_section}>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>

    </div >
  )
}

export default GoodLookingMan