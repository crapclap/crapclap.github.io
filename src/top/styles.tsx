import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import PCBackground from './img/pc_bg.svg'
import SPBackground from './img/sp_bg.svg'

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
        marginTop: '150px',
        marginBottom: '104px',
      },
      [theme.breakpoints.up('md')]: {
        marginTop: '50vh',
        marginBottom: '50vh',
      }
    },
    media_video: {
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '84px', 
      },
      [theme.breakpoints.up('md')]: {
        '&:hover': {
          '& $scroll_left, $scroll_right': {
            display: 'block',
          }
        },
        marginBottom: '450px',
      },
    },
    media_music: {
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '102px', 
      },
      [theme.breakpoints.up('md')]: {
        '&:hover': {
          '& $scroll_left, $scroll_right': {
            display: 'block',
          }
        },
        marginBottom: '450px',
      },
    },
    media_followus: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: '82px',
      },
      [theme.breakpoints.up('md')]: {
        marginBottom: '40vh',
      },
      // marginBottom: '40vh',
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
      backgroundAttachment: 'fixed',
      position: 'relative',
      height: '100%',
      flexGrow: 1,
      margin: 0,
      padding: 0,
      [theme.breakpoints.down('sm')]: {
        backgroundImage: `url(${SPBackground})`,
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
      marginTop: '20px',
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
      left: '5%',
      zIndex: 1,
      [theme.breakpoints.up('md')]: {
        display: 'none'
      },
    },
    mobile_logo: {
      [theme.breakpoints.down('sm')]: {
        width: 100,
        // marginTop: 150,
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },

    // MODAL
    modal: {
    },

    // VIDEO SECTION
    video_list: {
      overflowX: 'scroll',
      whiteSpace: 'nowrap',
      scrollBehavior: 'smooth',
      height: '240px',
      [theme.breakpoints.down('sm')]: {
        paddingInlineStart: '30px'
      },
    },
    video_item: {
      display: 'inline-block',
      width: '315px',
      height: '230px',
      marginRight: '13px',
    },
    video_embed: {
      borderTopLeftRadius: '18px',
      borderTopRightRadius: '18px',
      width: '100%',
      height: '180px',
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
    play_button: {
      zIndex: 1,
      left: '-50px',
      bottom: '15px',
      position: 'relative',
      height: '40px',
    },
    mobile_logo_video: {
      zIndex: 1,
      width: 30,
      height: 38,
      position: 'absolute',
      top: '0px',
      left: '20px',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },

    // MUSIC SECTION
    music_list: {
      overflowX: 'scroll',
      whiteSpace: 'nowrap',
      scrollBehavior: 'smooth',
      [theme.breakpoints.down('sm')]: {
        paddingInlineStart: '30px'
      },
    },
    music_link: {
      textDecoration: 'none',
      '&:focus, &:hover, &:visited, &:link, &:active': {
        textDecoration: 'none',
      },
    },
    music_item: {
      display: 'inline-block',
      marginRight: '13px',
      [theme.breakpoints.down('sm')]: {
      },
      [theme.breakpoints.up('md')]: {
        '&:hover': {
          '& $music_artwork': {
            opacity: 0.8,
          },
          '& $music_desc_title': {
            opacity: 0.8,
          },
          '& $music_desc_order': {
            opacity: 0.8,
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
    mobile_logo_music: {
      zIndex: 1,
      width: 30,
      height: 38,
      position: 'absolute',
      top: '0px',
      left: '20px',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
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
          opacity: 0.8,
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
          opacity: 0.8,
        },
      },
    },
    followus: {
      textAlign: 'center',
      marginBottom: '20px',
      [theme.breakpoints.down('sm')]: {
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    followus_img: {
      display: 'block',
      margin: 'auto',
    },
  }),
);