import React from "react";
import "../common.css"
import Logo from "../../img/logo.svg"

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar} from '@material-ui/core';

const Header = () => {

  const classes = useStyles();

  return (
    <div className={classes.header}>
      <AppBar position="fixed" className={classes.bar}>
        <img src={Logo} className={classes.logo} alt='logo'/>
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
      height: '8vh',
    },
    logo: {
      height: 37,
      width: 92,
      padding: 10
    },
    bar: {
      height: '10vh',
      background: "transparent",
      boxShadow: 'none'
    },
  }),
);

export default Header;