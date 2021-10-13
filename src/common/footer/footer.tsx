import "../common.css"

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className="footer">
      <Typography variant="caption" align='center' display="block" className={classes.footer}>
        ©crapclap
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    footer: {
      height: 25,
      bottom: 0,
      backgroundColor: 'white',
      color: 'gray',
      position: 'relative',
      paddingTop: 10,
      paddingBottom: 5,
    },
  }),
);

export default Footer;