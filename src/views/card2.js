import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'left',
    padding: '10px',
    boxShadow: '0.5px 0.5px grey'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    color: 'black'
  },
  pos: {
    marginBottom: 12,
  },
  mission: {
    fontSize: 15,
    color: 'grey',
    marginLeft: '40px'
  }
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <AssignmentIcon fontSize="large" color="secondary"/>        Mission
        </Typography>
        <Typography className={classes.mission} variant="body2" component="p" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </CardContent>
    </Card>
  );
}
