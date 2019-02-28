import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import GoogleAuth from './GoogleAuth';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  paper: {
    background: '#163574'
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar classes={{ paper: classes.paper }}>
        <Toolbar>
          <Typography className={classes.grow} variant="h6" color="inherit">
            Streamy
          </Typography>
          <GoogleAuth />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
