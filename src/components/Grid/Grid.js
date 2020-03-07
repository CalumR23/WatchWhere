import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Top5 from '../Top5/Top5'
import WelCard from '../WelCard/WelCard'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Top5 /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><WelCard /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Coming soon here</Paper>
        </Grid>
      </Grid>
    </div>
  );
}