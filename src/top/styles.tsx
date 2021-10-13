import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Marble from './img/marble-pc.svg'

export const GridStyles = makeStyles((theme: Theme) =>

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

export const ContentStyles = makeStyles((theme: Theme) =>
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