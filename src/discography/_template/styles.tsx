import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
    },
    album_root: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: 30,
      },
      [theme.breakpoints.up('md')]: {
        marginBottom: 30,
      },
      [theme.breakpoints.up('lg')]: {
      },
    },
    album_container: {
      padding: 20,
    },
    album_artwork: {
    },
    album_title: {
    },
    album_order: {
    },
    info_root: {
    },
    info_container: {
      padding: 20,
    },
    info_sub_apple: {
      padding: 0,
    },
    info_sub_spotify: {
      padding: 0,
    }
  })
)

export const ContentStyles = makeStyles((theme: Theme) =>

  createStyles({

    // ROOT
    root: {
    },
    '@global': {
      '.makeStyles-logo-3': {
        height: 37,
        width: 92,
        padding: 10,
        marginLeft: 10,
      },
      '.jss3': {
        height: 37,
        width: 92,
        padding: 10,
        marginLeft: 10,
      },
    },

    // ALBUM SECTION
    album_artwork: {
      width: '100%',
    },
    album_title: {
      marginTop: 53,
      marginLeft: 0,
      fontFamily: "Helvetica",
      fontWeight: "bold",
      fontSize: 25,
      color: "black",
    },
    album_order: {
      marginTop: 60,
      marginRight: 0,
      textAlign: 'right',
      // fontFamily: "Brandon Grotesque",
      fontSize: 12,
      color: "gray",
    },

    // INFO SECTION
    info_sub_bg: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'white',
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: 'white',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.7)',
        },
      },
      [theme.breakpoints.up('lg')]: {
        backgroundColor: 'white',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.7)',
        },
      },
      width: 148,
      height: 95,
      borderRadius: '12px',
      margin: 'auto',
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
      marginTop: 0,
    },

    // LISTEN ALBUM
    listen_album: {
      marginTop: 0,
      fontFamily: "ヒラギノ角ゴシック",
      fontWeight: "bold",
      color: "#B2B2B2",
    },

    // READ LYRICS
    read_lyrics: {
      marginTop: 60,
      fontFamily: "ヒラギノ角ゴシック",
      fontWeight: "bold",
      color: "#B2B2B2",
    },

    // LYRIC LIST
    song_list: {
      marginTop: 0,
      align: 'left',
      width: '100%',
      fontFamily: "ヒラギノ角ゴシック",
      backgroundColor: 'transparent',
    },
    song_list_button: {
      paddingLeft: 0,
      height: 55,
      [theme.breakpoints.down('sm')]: {
        fontWeight: 600,
        color: '#383D40',
      },
      [theme.breakpoints.up('md')]: {
        fontWeight: 500,
        color: '#0D1B22',
        '&:hover': {
          color: 'grey',
        },
      },
      [theme.breakpoints.up('lg')]: {
        fontWeight: 500,
        color: '#0D1B22',
        '&:hover': {
          color: 'grey',
        },
      },
    },
    song_list_divider: {
      backgroundColor: '#E8E8E8',
    },
    song_num: {
      color: 'gray',
      fontSize: 13,
    },
    song_title: {
      fontSize: 13,
    },

    // BOTTOM LOGO
    bottom_section: {
      marginTop: 200,
      paddingRight: 0,
      paddingBottom: 50,
    },
    bottom_logo: {
      width: '80%',
    },
  })
)

export const LyricStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    song_title: {
      paddingTop: 120,
      marginBottom: 50,
      marginLeft: 0,
      flexGrow: 1,
      fontFamily: 'ヒラギノ角ゴシック',
      fontSize: 25,
      // fontWeight: 500,
      // color: "#0D1B22",
      [theme.breakpoints.down('sm')]: {
        fontWeight: 600,
        color: '#383D40',
      },
      [theme.breakpoints.up('md')]: {
        fontWeight: 500,
        color: '#0D1B22',
      },
      [theme.breakpoints.up('lg')]: {
        fontWeight: 500,
        color: '#0D1B22',
      },
    },
    lyric: {
      marginLeft: 0,
      lineHeight: 2,
      fontFamily: "ヒラギノ角ゴシック",
      fontSize: 15,
      color: "#0D1B22",
    },
    lyric_block: {
      marginBottom: 36,
    }
  }),
);