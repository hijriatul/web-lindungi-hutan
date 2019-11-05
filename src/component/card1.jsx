import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { lighten, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles({
  card: {
    marginBottom: 8,
    height: 370,
  },
  media: {
    width: 300,
    height: 115,
    marginTop: 20,
    backgroundColor:'white',
  },
  bagian: {
    alignItems: 'center',
    textAlign: 'center',
    width: 330,
    fontSize: 12,
    marginTop: 20,
  },
  cover: {
    width: 150,
    height: 112,
  },
  crd: {
    width: 360,
    height: 112,
    display: 'flex',
  },
  details: {
    flexDirection: 'column',
    width: 210,
  },
  content: {
    flex: '1 0 auto',
    fontSize: 12,
  },
  card1: {
    width: 360,
    height: 150,
    marginBottom: 8,
  },
  bwh: {
      textAlign: 'center',
      fontSize: 14,
  },
  paper: {
      width: 300,
      height: 160,
      backgroundColor: '#fff',
      padding: 30,
  },
  button1: {
    width: 300,
    fontSize: 12,
    marginTop: 15,
    marginBottom: 8,
    backgroundColor: '#f53855',
    borderRadius: 50,
    color: '#fff',
  },
  ambil: {
    width: 300,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  nama: {
    fontSize: 12,
    marginTop: 5,
    color: '#045F50',
  },
  nm: {
    marginTop: 8,
  }
});

const BorderLinearProgress = withStyles({
  root: {
    height: 6,
    width: 160,
    borderRadius: 20,
    backgroundColor: lighten('#e0e0e0', 0.5),
    marginTop: 3,
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#045F50',
  },
})(LinearProgress);

function Cardd() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Card className={classes.card}>
            <CardActionArea>
            <center><CardMedia
                className={classes.media}
                image="Bukanplastik.png"
                title="bukan plastik"
                /></center>
                <CardContent className={classes.bagian}>
                <Typography gutterBottom variant="body" component="h2">
                    Tanam pohon dimana hari ini? 
                </Typography>
                </CardContent>
                <CardContent className={classes.crd}>
                    <CardMedia
                    className={classes.cover}
                    image="Tap.png"
                    title="Tap"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                        <Typography component="h3" variant="body">
                            #SatuHutan 100 Pohon untuk Gunung Salak!
                        </Typography>
                        <Typography className={classes.nama} component="h4" variant="body">
                            Nadia A
                        </Typography>
                        <div className={classes.root}>
                          <BorderLinearProgress
                            className={classes.margin}
                            variant="determinate"
                            color="secondary"
                            value={50}
                          />
                        </div>
                        <Typography className={classes.nm} component="h4" variant="body">
                          Penanaman 1 Hari lagi
                        </Typography>
                        </CardContent>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={classes.card1}>
            <CardActionArea>
            <CardContent className={classes.crd}>
                <CardMedia
                className={classes.cover}
                image="laut.png"
                title="laut"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h3" variant="body">
                        1000 pohon untuk bima
                    </Typography>
                    <Typography className={classes.nama} component="h4" variant="body">
                        MARFUATIN
                    </Typography>
                    <div className={classes.root}>
                      <BorderLinearProgress
                        className={classes.margin}
                        variant="determinate"
                        color="secondary"
                        value={50}
                      />
                    </div>
                    <Typography className={classes.nm} component="h4" variant="body">
                        Fundraising 1 Hari lagi
                    </Typography>
                    </CardContent>
                </div>
            </CardContent>
            </CardActionArea>
        </Card>
        <Card className={classes.card1}>
            <CardActionArea>
            <CardContent className={classes.crd}>
                <CardMedia
                className={classes.cover}
                image="bumihijau.png"
                title="bumi hijau"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h3" variant="body">
                    #SatuHutan 1 Pohon untuk 1000 Kehidupan Kalim...
                    </Typography>
                    <Typography className={classes.nama} component="h4" variant="body">
                    Nafasya Risma Maharani                    
                    </Typography>
                    <div className={classes.root}>
                      <BorderLinearProgress
                        className={classes.margin}
                        variant="determinate"
                        color="secondary"
                        value={50}
                      />
                    </div>
                    <Typography className={classes.nm} component="h4" variant="body">
                        Penanaman 1 Hari lagi
                    </Typography>
                    </CardContent>
                </div>
            </CardContent>
            </CardActionArea>
        </Card>
        <div>
            <CardContent className={classes.bwh}>
                <Typography component="body" variant="body">
                Selengkapnya
                </Typography>
            </CardContent>
            <Paper className={classes.paper}>
                <Typography className={classes.ambil} variant="body" component="h3">
                Ambil bagian untuk menghijaukan kembali Indonesia. 
                </Typography>
                <Button
                    variant="contained"
                    className={classes.button1}
                    startIcon={<FavoriteIcon />}
                >
                    Donasi
                </Button>
            </Paper>
        </div>
    </React.Fragment>
  );
}

export default Cardd;