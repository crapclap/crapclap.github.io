import "../common.css"

import Logo from "../img/logo.svg"

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

const Header = () => {

  const classes = useStyles();

  return (
    <div className={classes.header} id='Header'>
      <AppBar position="fixed" className={classes.bar}>
        <a href='/' className={classes.logo} >
          <img src={Logo} alt='logo' />
        </a>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    logo: {
      height: 37,
      width: 92,
      padding: 10,
      marginLeft: 10,
    },
    bar: {
      height: 60,
      background: "transparent",
      boxShadow: 'none'
    },
  }),
);

export default Header;