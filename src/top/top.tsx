import React, { FC, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'

import {
  Grid,
  Container,
  Typography
} from '@material-ui/core';

import {
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles';

import "../common/common.css"
import "./top.css"

import FollowUs from './img/follow_us.png'
import Invisible from './img/invisible.png'
import Logo from "../common/img/logo.svg"
import Music from './img/music.png'
import Video from './img/video.png'
import Instagram from './img/instagram.svg'
import Twitter from './img/twitter.svg'
import Marble from './img/marble-pc.svg'
import ScrollLeft from './img/scroll_left.svg'
import ScrollRight from './img/scroll_right.svg'

import { MusicList, VideoList } from '../common/list/list'

const scrollTop = (): number => {
  return Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
};

const Top: React.FC = () => {

  const grid = gridStyles();
  const cont = useStyles();

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
      marginBottom: 400,
    },
    meta_root: {
    },
    media_root: {
    },
    media_scroll_down: {
      marginTop: '200px',
      marginBottom: '200px',
    },
    media_music: {
      marginTop: '200px',
      marginBottom: '200px',
      position: 'relative',
      '&:hover': {
        '& $scroll_left, $scroll_right': {
          display: 'block',
        }
      }
    },
    media_video: {
      marginTop: '200px',
      marginBottom: '200px',
      position: 'relative',
      '&:hover': {
        '& $scroll_left, $scroll_right': {
          display: 'block',
        }
      }
    },
    scroll_left: {
      position: 'absolute',
      left: 0,
      top: '50%',
      display: 'none',
    },
    scroll_right: {
      position: 'absolute',
      right: 0,
      top: '50%',
      display: 'none',
    },
  })
)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundImage: `url(${Marble})`,
      position: 'relative',
      height: '100 %',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100 %',
      margin: 0,
      padding: 0,
    },
    scroll_down_typo: {
      marginTop: 250,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    dynamic_img_web: {
      display: 'flex',
      position: 'fixed',
      width: 100,
      top: '50%',
      left: '25%',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
    },
    dynamic_img_mobile: {
      display: 'flex',
      position: 'fixed',
      width: 30,
      top: '50%',
      left: '10%',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      },
      [theme.breakpoints.up('lg')]: {
        display: 'none'
      },
    },
    mobile_logo: {
      [theme.breakpoints.down('sm')]: {
        width: 100,
        marginTop: 250,
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },

    // VIDEO SECTION
    video_list: {
      overflowX: 'scroll',
      whiteSpace: 'nowrap',
      scrollBehavior: 'smooth',
      height: '240px',
    },
    video_embed: {
      borderTopLeftRadius: '18px',
      borderTopRightRadius: '18px',
      height: '180px',
    },
    video_item: {
      display: 'inline-block',
      width: '320px',
      height: '230px',
      marginRight: '30px',
    },
    video_desc: {
      marginTop: '20px',
      height: '30px',
      backgroundColor: 'white',
      borderRadius: '18px',
      fontSize: 13,
      width: '100%',
    },
    video_desc_mv: {
      textAlign: 'right',
      paddingRight: '20px',
      color: 'green',
      fontWeight: 'bold',
    },
    video_desc_title: {
      textAlign: 'left',
      paddingLeft: '20px',
      color: 'black',
      fontWeight: 'bold',
    },

    // MUSIC SECTION
    music_list: {
      overflowX: 'scroll',
      whiteSpace: 'nowrap',
      scrollBehavior: 'smooth',
    },
    music_link: {
      textDecoration: 'none',
      '&:focus, &:hover, &:visited, &:link, &:active': {
        textDecoration: 'none',
      },
      // textDecorationLine: 'none',
      // textDecorationColor: 'black',
    },
    music_item: {
      display: 'inline-block',
      marginRight: '30px',
    },
    music_artwork: {
      width: '250px',
      [theme.breakpoints.down('sm')]: {
      },
      [theme.breakpoints.up('md')]: {
        '&:hover': {
          width: '200px',
          margin: '12.5px',
        },
      },
      [theme.breakpoints.up('lg')]: {
        '&:hover': {
          width: '200px',
          margin: '12.5px',
        },
      },
    },
    music_desc_title: {
      fontFamily: 'Ariel',
      fontWeight: 'bold',
      fontSize: 15,
    },
    music_desc_order: {

    },

    // SNS
    twitter: {
      paddingRight: '0',
    },
    instagram: {
      paddingLeft: '0',
    },
  }),
);

export default Top
