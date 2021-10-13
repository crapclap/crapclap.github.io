import "../common/common.css"
import "./top.css"

import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import { Grid, Container, Typography } from '@material-ui/core';


import { GridStyles, ContentStyles } from './styles'
import { MusicList, VideoList } from '../common/list/list'

import FollowUs from './img/follow_us.png'
import Invisible from './img/invisible.png'
import Logo from "../common/img/logo.svg"
import Music from './img/music.png'
import Video from './img/video.png'
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
  const [ScrollDown, setScrollDown] = useState<string>('SCROLL DOWN ↓');

  const ref_music = useRef<HTMLUListElement>(null);

  const horizontalScrollMusic = (offset: number) => {
    if (ref_music.current != null) {
      ref_music.current.scrollLeft += offset;
    }
  }

  const ref_video = useRef<HTMLUListElement>(null);

  const horizontalScrollVideo = (offset: number) => {
    if (ref_video.current != null) {
      ref_video.current.scrollLeft += offset;
    }
  }

  const onScroll = (): void => {

    const position = scrollTop();
    setScrollDown('');

    if (position >= 200 && position <= 800) {
      setDynamicImgWeb(Video);
      setDynamicImgMobile(Video);
    }
    else if (position >= 800 && position <= 1200) {
      setDynamicImgWeb(Music);
      setDynamicImgMobile(Music);
    }
    else if (position >= 1200) {
      setDynamicImgWeb(FollowUs);
      setDynamicImgMobile(Invisible);
    }
    else {
      setDynamicImgWeb(Logo);
      setDynamicImgMobile(Invisible);
    }
  };

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
            <img src={DynamicImgWeb} className={cont.dynamic_img_web} alt='dynamicImg' />
            <img src={DynamicImgMobile} className={cont.dynamic_img_mobile} alt='dynamicImg' />
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

              <Grid item xs={12} md={12} className={grid.media_scroll_down}>
                <table width='100%'>
                  <td className={cont.twitter}><img src={Twitter} alt='twitter' /></td>
                  <td className={cont.instagram}><img src={Instagram} alt='instagram' /></td>
                </table>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div >
  )
}

export default Top