import '../common/common.css'
import './top.css'
import '../../node_modules/react-modal-video/scss/modal-video.scss';

import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core';
import ModalVideo from 'react-modal-video'

import { GridStyles, ContentStyles } from './styles'
import { MusicList, VideoList } from '../common/list/list'

import FollowUs from './img/follow_us.svg'
import FollowUsSP from './img/follow_us_sp.svg'
import Logo from "./img/crapclap.svg"
import Music from './img/music.svg'
import Video from './img/video.svg'
import PlayButton from './img/play_button.svg'
import Instagram from './img/instagram.svg'
import Twitter from './img/twitter.svg'
import ScrollDown from './img/scroll_down.svg'
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
  // const [DynamicImgMobile, setDynamicImgMobile] = useState<string>(Invisible);
  const [DynamicVideoId, setDynamicVideoId] = useState<string>();
  const [Rotate, setRotate] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);

  const ref_music = useRef<HTMLUListElement>(null);
  const ref_video = useRef<HTMLUListElement>(null);

  const setModal = (open: boolean, id: string) => {
    setOpen(open);
    setDynamicVideoId(id);
  }

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

  // Change images and rotation dynamically
  const onScroll = (): void => {

    const position = scrollTop();
    // setScrollDown('');

    if (position >= 350 && position <= 1100) {
      setDynamicImgWeb(Video);
      // setDynamicImgMobile(Video);
      setRotate(true);
    }
    else if (position >= 1100 && position <= 1800) {
      setDynamicImgWeb(Music);
      // setDynamicImgMobile(Music);
      setRotate(true);
    }
    else if (position >= 1800) {
      setDynamicImgWeb(FollowUs);
      // setDynamicImgMobile(Invisible);
      setRotate(false);
    }
    else {
      setDynamicImgWeb(Logo);
      // setDynamicImgMobile(Invisible);
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
    <React.Fragment>
      <div className={cont.root}>
        {/* <Container maxWidth='xl'> */}
          <Grid container spacing={0} className={grid.top_root}>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId={DynamicVideoId} onClose={() => setOpen(false)} className={cont.modal} />

            <div id="ScrollToTop" />

            <Grid item xs={12} md={6} className={grid.meta_root}>
              <img src={DynamicImgWeb} className={cont.dynamic_img_web} alt='dynamicImg' id='rotate' />
              {/* <img src={DynamicImgMobile} className={cont.dynamic_img_mobile} alt='dynamicImg' id='rotate' /> */}
            </Grid>

            <Grid item xs={12} md={6} className={grid.media_root}>
              <Grid container spacing={0}>

                <Grid item xs={12} md={12} className={grid.media_scroll_down}>

                  <Typography align='center' className={cont.scroll_down_typo}>
                    <img src={ScrollDown} alt='scrollDown' />
                  </Typography>
                  <img src={Logo} className={cont.mobile_logo} alt='mobileLogo' />

                </Grid>

                <Grid item xs={12} md={12} className={grid.media_video}>

                  <img src={ScrollLeft} className={grid.scroll_left} onClick={() => horizontalScrollVideo(-360)} alt='scrollLeft' />
                  <img src={ScrollRight} className={grid.scroll_right} onClick={() => horizontalScrollVideo(360)} alt='scrollRight' />
                  <img src={Video} className={cont.mobile_logo_video} alt='mobileLogoVideo'/>
                  
                  <ul className={cont.video_list} ref={ref_video}>
                    {VideoList.map((video, index) => {
                      return (
                        <li className={cont.video_item} key={index} >
                          <div>
                            <img src={video.thumbnail} className={cont.video_embed} alt='thumbnail' onClick={() => setModal(true, video.videoId)} />
                            <img src={PlayButton} className={cont.play_button} alt='playbutton' />
                          </div>
                          <table className={cont.video_desc}>
                            <tbody>
                              <tr>
                                <td className={cont.video_desc_title} > {video.title} </td>
                                <td className={cont.video_desc_mv} > {video.description} </td>
                              </tr>
                            </tbody>
                          </table>
                        </li>
                      )
                    })}
                  </ul>

                </Grid>

                <Grid item xs={12} md={12} className={grid.media_music}>

                  <img src={ScrollLeft} className={grid.scroll_left} onClick={() => horizontalScrollMusic(-280)} alt='scrollLeft' />
                  <img src={ScrollRight} className={grid.scroll_right} onClick={() => horizontalScrollMusic(280)} alt='scrollRight' />
                  <img src={Music} className={cont.mobile_logo_music} alt='mobileLogoVideo'/>

                  <ul className={cont.music_list} ref={ref_music} >
                    {MusicList.map((music, index) => {
                      return (
                        <li className={cont.music_item} key={index} >
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

                  <Grid container spacing={0} className={cont.followus}>
                    <img src={FollowUsSP} className={cont.followus_img} alt='followus' />
                  </Grid>

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
        {/* </Container> */}
      </div >
    </React.Fragment>
  )
}

export default Top