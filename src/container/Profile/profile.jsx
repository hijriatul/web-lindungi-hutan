import React from "react";
import Apps from "../../component/app"
import Navigation from "../../component/navigation";
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import FullWidthTabs from '../Profile/tabs';

  const useStyles = makeStyles(theme => ({
    paper: {
      height: 480,
      padding: theme.spacing(5, 0),
      background: 'linear-gradient(2.06deg, #7BE3FA -44%, #045F50 87.81%);',
    },

    bigAvatar: {
      marginTop: 30,
      margin: 10,
      width: 130,
      height: 130,
      shadow: '0 10px 20px rgba(0,0,0,0.10)',
      background: 'linear-gradient(2.06deg, #7BE3FA -160%, #045F50 70.81%);',
    },

    margin: {
      width: 20,
      height: 40,
      marginLeft: 240,
      marginTop: -80,
    },
    icon: {
      fontSize: 12,
    },
    cb: {
      width: 360,
      height: 160,
      shadow: '0px 2px 2px rgba(0, 0, 0, 0.25);',
      background: 'linear-gradient(0deg, #66CA9C 0%, #66ABD4 100%);',
    },
    nama: {
      color: '#fff',
      textAlign: 'center',
      marginTop: 10,
    },
    gbng: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 13,
      marginTop: 5,
      marginBottom: 10,

    },
    isi2: {
      width: 75,
      height: 120,
      marginTop: 20,
      marginLeft: 8,
      background: 'linear-gradient(0deg, #66CA9C 0%, #66ABD4 100%);',
      padding: '2% 0%',
      margin:'10%',
      borderRadius:'8%',
      color: '#fff',
      textAlign: 'center',
    },
    isi1: {
      width: 75,
      height: 120,
      marginTop: 20,
      marginLeft: 10,
      background: 'linear-gradient(0deg, #66CA9C 0%, #66ABD4 100%);',
      padding: '2% 0%',
      margin:'10%',
      borderRadius:'8%',
      color: '#fff',
      textAlign: 'center',
    },
    isi3: {
      width: 75,
      height: 120,
      marginTop: 20,
      marginLeft: 7,
      background: 'linear-gradient(0deg, #66CA9C 0%, #66ABD4 100%);',
      padding: '2% 0%',
      margin:'10%',
      borderRadius:'8%',
      color: '#fff',
      textAlign: 'center',
    },
    isi4: {
      width: 75,
      height: 120,
      marginTop: 20,
      marginLeft: 5,
      background: 'linear-gradient(0deg, #66CA9C 0%, #66ABD4 100%);',
      padding: '2% 0%',
      margin:'10%',
      borderRadius:'8%',
      color: '#fff',
      textAlign: 'center',
    },
    bg: {
      color: '#fff',
      fontSize: 15,
      marginTop: 30,
      marginBottom: 10,
      marginLeft: 28,
    },
    fb: {
      margin: 10,
      color: '#fff',
      backgroundColor: '#0d47a1',
      marginLeft: 98,
      marginTop: -40,
  },
    tw: {
      margin: 10,
      color: '#fff',
      backgroundColor: '#42a5f5',
      marginLeft: 143,
      marginTop: -50,
    },
    sc: {
      width: 155,
      fontSize: 12,
      marginTop: -70,
      marginLeft: 190,
      marginBottom: 8,
      borderRadius: 50,
      color: '#fff',
    },
  }));

  function PaperSheet() {
    const classes = useStyles();

    return(
        <React.Fragment>
          <div className="App">
            <Apps />
            <Navigation />
          
          </div>

        <div className={classes.paper}>
        <Grid container justify="center" alignItems="center">
          <Avatar alt="" src="/static/images/avatar/1.jpg" className={classes.bigAvatar} />
        </Grid>
        <div>
        <Fab size="small" color="secondary" aria-label="edit" className={classes.margin}>
          <EditIcon className={classes.icon} />
        </Fab>
        </div>
          <Typography component="p" className={classes.nama}>
            Hijriatul Mubarokah
          </Typography>
          <Typography component="p" className={classes.gbng}>
            Gabung relawan sekarang
          </Typography>
          <Card className={classes.cb}>
          <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Paper className={classes.isi1}>
            0
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.isi2}>
            0
            </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.isi3}>
            0
            </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.isi4}>
            0KG
            </Paper>
        </Grid>
      </Grid>
      </div>
          </Card>

        <Grid>
        <Typography variant="body" component="h6" className={classes.bg}>
            Bagikan :
        </Typography>
        <Avatar variant="body" component="h5" className={classes.fb}>f</Avatar>
      <Avatar className={classes.tw}>
        <TwitterIcon />
      </Avatar>
      <Button variant="contained" component="h5" color="secondary" className={classes.sc}>
        <strong>Lengkapi Profile</strong>
      </Button>
        </Grid>
        </div>

      <div className="tb">
            <FullWidthTabs />
            
          
          </div>

    </React.Fragment>
    );
}

export default PaperSheet;













