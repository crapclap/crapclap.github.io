import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import PCBackground from './img/pc_bg.svg'

export const GridStyles = makeStyles((theme: Theme) =>

  createStyles({

    top_root: {
    },
    meta_root: {
    },
    media_root: {
    },
    media_scroll_down: {
      [theme.breakpoints.down('sm')]: {
        marginTop: '20vh',
      },
      marginBottom: '50vh',
      marginTop: '50vh',
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
      marginBottom: '40vh',
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
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      position: 'relative',
      height: '100%',
      flexGrow: 1,
      margin: 0,
      padding: 0,
      [theme.breakpoints.down('sm')]: {
        backgroundImage: `url(${PCBackground})`,
      },
      [theme.breakpoints.up('md')]: {
        backgroundImage: `url(${PCBackground})`,
      },
    },
    '@global': {
      '.makeStyles-logo-3': {
        display: 'none',
      },
      '.jss3': {
        display: 'none',
      },
    },
    scroll_down_typo: {
      fontFamily: 'Arial',
      fontSize: '14',
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    dynamic_img_web: {
      display: 'flex',
      position: 'fixed',
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
      left: '12%',
      zIndex: 1,
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
      [theme.breakpoints.down('sm')]: {
      },
      [theme.breakpoints.up('md')]: {
        '&:hover': {
          '& $music_artwork': {
            display: 'block',
            width: '200px',
            paddingTop: '12.5px',
            paddingLeft: '25px',
            paddingRight: '12.5px',
            paddingBottom: '25px',
          },
          '& $music_desc_title': {
            textDecoration: 'underline',
          },
        },
      },
    },
    music_artwork: {
      width: '250px',
    },
    music_desc_title: {
      marginTop: '20px',
      width: '250px',
      fontFamily: 'Arial',
      fontWeight: 'bold',
      fontSize: 15,
      color: '#0D1B22',
    },
    music_desc_order: {
      width: '250px',
      fontFamily: 'Arial',
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