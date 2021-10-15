import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Marble from './img/marble-pc.svg'

export const GridStyles = makeStyles((theme: Theme) =>

  createStyles({

    top_root: {
    },
    meta_root: {
    },
    media_root: {
    },
    media_scroll_down: {
      marginBottom: '360px',
      [theme.breakpoints.down('sm')]: {
        marginTop: 140,
      },
      [theme.breakpoints.up('md')]: {
        marginTop: 140,
      },
    },
    media_music: {
      marginBottom: '450px',
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        '&:hover': {
          '& $scroll_left, $scroll_right': {
            display: 'block',
          }
        }
      },
    },
    media_video: {
      marginBottom: '450px',
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        '&:hover': {
          '& $scroll_left, $scroll_right': {
            display: 'block',
          }
        }
      },
    },
    media_followus: {
      marginBottom: '300px',
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
      left: '5%',
      [theme.breakpoints.up('md')]: {
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
      font: 'Arial',
      width: '100%',
    },
    video_desc_mv: {
      textAlign: 'right',
      verticalAlign: 'middle',
      paddingRight: '20px',
      color: '#67E2D8',
      fontSize: 12,
      fontWeight: 'bold',
    },
    video_desc_title: {
      textAlign: 'left',
      verticalAlign: 'middle',
      paddingLeft: '20px',
      color: '#0D1B22',
      fontSize: 13,
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
    },
    music_item: {
      display: 'inline-block',
      marginRight: '20px',
    },
    music_artwork: {
      width: '250px',
      [theme.breakpoints.down('sm')]: {
      },
      [theme.breakpoints.up('md')]: {
        '&:hover': {
          width: '200px',
          margin: '12.5px',
          marginBottom: '25px',
        },
      },
    },
    music_desc_title: {
      marginTop: '20px',
      width: '250px',
      fontFamily: 'Ariel',
      fontWeight: 'bold',
      fontSize: 15,
      color: '#0D1B22'
    },
    music_desc_order: {
      width: '250px',
      fontFamily: 'Ariel',
      fontSize: 11,
      color: '#B2B2B2'
    },

    // SNS
    twitter: {
      marginRight: '10px',
      float: 'right',
      borderRadius: '50%',
      [theme.breakpoints.down('sm')]: {
      },
      [theme.breakpoints.up('md')]: {
        '&:hover': {
          boxShadow: '2px 2px 2px rgba(0,0,0,.7)',
        },
      },
    },
    instagram: {
      marginLeft: '10px',
      float: 'left',
      borderRadius: '50%',
      [theme.breakpoints.down('sm')]: {
      },
      [theme.breakpoints.up('md')]: {
        '&:hover': {
          boxShadow: '2px 2px 2px rgba(0,0,0,.7)',
        },
      },
    },
  }),
);