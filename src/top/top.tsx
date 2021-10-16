import "../common/common.css"
import "./top.css"

import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import { Grid, Container, Typography } from '@material-ui/core';

import { GridStyles, ContentStyles } from './styles'
import { MusicList, VideoList } from '../common/list/list'

import FollowUs from './img/follow_us.svg'
import Invisible from './img/invisible.png'
import Logo from "../common/img/logo.svg"
import Music from './img/music.svg'
import Video from './img/video.svg'
import Instagram from './img/instagram.svg'
import Twitter from './img/twitter.svg'
import ScrollLeft from './img/scroll_left.svg'
import ScrollRight from './img/scroll_right.svg'

const scrollTop = (): number => {
  return Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
};

const Top: React.FC = () => {

  const grid = GridStyles();
  const cont = ContentStyles();

  const [DynamicImgWeb, setDynamicImgWeb] = useState<string>(Logo);
  const [DynamicImgMobile, setDynamicImgMobile] = useState<string>(Invisible);
  const [Rotate, setRotate] = useState<boolean>(false);
  const [ScrollDown, setScrollDown] = useState<string>('SCROLL DOWN ↓');

  const ref_music = useRef<HTMLUListElement>(null);
  const ref_video = useRef<HTMLUListElement>(null);

  const horizontalScrollMusic = (offset: number) => {
    if (ref_music.current != null) {
      ref_music.current.scrollLeft += offset;
    }
  }

  const horizontalScrollVideo = (offset: number) => {
    if (ref_video.current != null) {
      ref_video.current.scrollLeft += offset;
    }
  }

  // const screenHeight = window.parent.screen.height

  // Change images and rotation dynamically
  const onScroll = (): void => {

    const position = scrollTop();
    // setScrollDown('');

    if (position >= 350 && position <= 1100) {
      setDynamicImgWeb(Video);
      setDynamicImgMobile(Video);
      setRotate(true);
    }
    else if (position >= 1100 && position <= 1800) {
      setDynamicImgWeb(Music);
      setDynamicImgMobile(Music);
      setRotate(true);
    }
    else if (position >= 1800) {
      setDynamicImgWeb(FollowUs);
      setDynamicImgMobile(Invisible);
      setRotate(false);
    }
    else {
      setDynamicImgWeb(Logo);
      setDynamicImgMobile(Invisible);
      setRotate(false);
    }
  };

  // Rotate Image
  window.onscroll = function () {
    let deg = 0
    if (document.getElementById('rotate') != null) {
      if (Rotate) {
        deg = 90 + window.pageYOffset / 110
      }
      document.getElementById('rotate')!.style.transform = 'rotate(' + deg + 'rad)';
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  });

  return (
    <div className={cont.root}>
      <Container maxWidth='xl'>
        <Grid container spacing={0} className={grid.top_root}>

          <div id="ScrollToTop" />

          <Grid item xs={12} md={6} className={grid.meta_root}>
            <img src={DynamicImgWeb} className={cont.dynamic_img_web} alt='dynamicImg' id='rotate' />
            <img src={DynamicImgMobile} className={cont.dynamic_img_mobile} alt='dynamicImg' id='rotate' />
          </Grid>

          <Grid item xs={12} md={6} className={grid.media_root}>
            <Grid container spacing={0}>

              <Grid item xs={12} md={12} className={grid.media_scroll_down}>

                <Typography align='center' className={cont.scroll_down_typo}>
                  {ScrollDown}
                </Typography>
                <img src={Logo} className={cont.mobile_logo} alt='mobileLogo' />

              </Grid>

              <Grid item xs={12} md={12} className={grid.media_video}>

                <img src={ScrollLeft} className={grid.scroll_left} onClick={() => horizontalScrollVideo(-360)} alt='scrollLeft' />
                <img src={ScrollRight} className={grid.scroll_right} onClick={() => horizontalScrollVideo(360)} alt='scrollRight' />
                <ul className={cont.video_list} ref={ref_video}>
                  {VideoList.map((video) => {
                    return (
                      <li className={cont.video_item}>
                        <iframe src={video.url} title={video.title} frameBorder="0" allow="autoplay;" width="100%" allowFullScreen className={cont.video_embed} />
                        <table className={cont.video_desc}>
                          <td className={cont.video_desc_title} > {video.title} </td>
                          <td className={cont.video_desc_mv} > {video.description} </td>
                        </table>
                      </li>
                    )
                  })}
                </ul>

              </Grid>

              <Grid item xs={12} md={12} className={grid.media_music}>

                <img src={ScrollLeft} className={grid.scroll_left} onClick={() => horizontalScrollMusic(-280)} alt='scrollLeft' />
                <img src={ScrollRight} className={grid.scroll_right} onClick={() => horizontalScrollMusic(280)} alt='scrollRight' />

                <ul className={cont.music_list} ref={ref_music} >
                  {MusicList.map((music) => {
                    return (
                      <li className={cont.music_item}>
                        <Link to={'discography/' + music.page} className={cont.music_link}>
                          <img src={music.artwork} className={cont.music_artwork} alt='artwork' />
                          <Typography align='left' className={cont.music_desc_title}> {music.title} </Typography>
                          <Typography align='left' className={cont.music_desc_order}> {music.order} </Typography>
                        </Link>
                      </li>
                    )
                  })}
                </ul>

              </Grid>

              <Grid item xs={12} md={12} className={grid.media_followus}>
                <Grid container spacing={0}>

                  <Grid item xs={6} md={6} >
                    <a href='https://twitter.com/crap_clap' >
                      <img src={Twitter} className={cont.twitter} alt='twitter' />
                    </a>
                  </Grid>

                  <Grid item xs={6} md={6} >
                    <a href='https://www.instagram.com/crap_clap/?hl=ja' >
                      <img src={Instagram} className={cont.instagram} alt='instagram' />
                    </a>
                  </Grid>

                </Grid>
              </Grid>

            </Grid>

          </Grid>

        </Grid>
      </Container>
    </div >
  )
}

export default Top