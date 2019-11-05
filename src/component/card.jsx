import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import gambar from '../image/pohonhijau.png';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    marginBottom: 5,
  },
  media: {
    width: 240,
    height: 120,
    marginTop: 80,
    backgroundColor:'white',
  },
  grid: {
    width: 330,
    textAlign: 'center',
    color: '#fff',
    marginTop: 20,
  },
  bagian: {
    alignItems: 'center',
    textAlign: 'center',
    width: 330,
    fontSize: 12,
  },
  button: {
    width: 300,
    fontSize: 12,
    borderRadius: 50,
  },
  button1: {
    width: 300,
    fontSize: 12,
    marginTop: 15,
    marginBottom: 8,
    backgroundColor: '#00c744',
    borderRadius: 50,
    color: '#fff',
  },
  bawah: {
    width: 360,
    height: 200,
    backgroundImage: `url(${gambar})`,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  tulisan: {
    marginTop: 40,
    width: 330,
    fontSize: 12,
    color: '#fff'
  },
});

function Cards() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
       <center><CardMedia
          className={classes.media}
          image="lindungi.png"
          title="lindungi hutan"
        /></center>
        <CardContent className={classes.bagian}>
          <Typography gutterBottom variant="body" component="h2">
            Hal sederhana, jadi lebih bermakna bersama LindungiHutan. 
          </Typography>
          <Typography variant="body"  component="h3">
            Buat Aksi penanaman dan lingkungan dengan mudah, aman dan transparant. Mulai Tanam 
          </Typography>
          <Typography gutterBottom variant="body" component="h3">
            #PohonPertama Kamu
          </Typography>
          <Button variant="contained" color="inherit" className={classes.button1}>
          <strong>Buat Kampanye Hutan</strong>
          </Button>
          <Button variant="outlined" color="inherit" className={classes.button}>
          <strong>Pelajari Bagaimana Kami Bekerja</strong>
          </Button>
        </CardContent>
        <CardContent
        className={classes.bawah}
        image={require("../image/pohonhijau.png")}
        title="Pohon Hijau"
        >
        <Typography className={classes.tulisan} variant="body"  component="h4">
          LindungiHutan adalah platform crowdplanting penggalangan dana online untuk konservasi hutan dan lingkungan. 
        </Typography>
        <div className={classes.grid}>
          <Grid container spacing={3}>
            <Grid item xs={6} xs={3}>
              <h2>752.5jt</h2>
              Donasi
              Alam
            </Grid>
            <Grid item xs={6} xs={3}>
              <h2>74.2k</h2>
              Pohon
              Tertanam
            </Grid>
            <Grid item xs={6} xs={3}>
              <h2>14.2k</h2>
              Sahabat
              Alam
            </Grid>
            <Grid item xs={6} xs={3}>
              <h2>316</h2>
              Kampanye
              Alam
            </Grid>
          </Grid>
        </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Cards;