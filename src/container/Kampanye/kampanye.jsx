import React from "react";
import Apps from "../../component/app"
import Navigation from "../../component/navigation";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { lighten, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
    pr: {
      width:'100%',
      height:220,
      background: 'linear-gradient(#045f50, rgba(16, 186, 158, 1));',
      borderRadius: '0 0 30px 30px;',
      paddingTop: 60,
    },
    km: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
    },
    am: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 17,
    },
    button1: {
        width: 300,
        fontSize: 12,
        marginTop: 20,
        marginLeft: 28,
        marginBottom: 8,
        backgroundColor: '#00c744',
        borderRadius: 50,
        color: '#fff',
      },
    cari: {
        width: 300,
        borderRadius: 50,
        marginLeft: 28,
        marginTop: 20,
        padding: 6 ,
        height: 40,
        color: '#555',
        backgroundColor: '#fff',
    },
    ck: {
      marginLeft: -120,
    },
    ka: {
      fontSize: 28,
      color : '#fff',
      textAlign: 'center',
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
      nama: {
        fontSize: 12,
        marginTop: 5,
        color: '#045F50',
      },
      nm: {
        marginTop: 8,
      },
      card2: {
        marginBottom: 60,
      },
  }));
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
function Kampanye(){
    const classes = useStyles();
    return(
        <React.Fragment>
        <div className="App">
            <Apps />
            <Navigation />
        </div>
        <Paper className={classes.pr}>
        <Typography  component="h3" className={classes.ka}>
         <strong>Kampanye Alam</strong>
        </Typography>
        <Typography  component="h3" className={classes.am}>
         Mulai Kampanye Alam pertamamu, buat gerakan penanaman atau aksi lingkungan dengan mudah, aman dan transparan. 
        </Typography>
        <Button variant="contained" color="inherit" className={classes.button1}>
          <strong>Buat Kampanye Hutan</strong>
          </Button>
        </Paper>


        <Card className={classes.card}>
            <CardActionArea>
                
                <Button variant="outlined" disabled className={classes.cari}>
                <Typography component="h5" className={classes.ck}>
                  Cari Kampanye
                </Typography>
                </Button>
                <CardContent className={classes.crd}>
                    <CardMedia
                    className={classes.cover}
                    image="kuning.png"
                    title="kuning"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                        <Typography component="h3" variant="body">
                         Mangrove dari Qonita Gholib untuk Pesisir Bed...
                        </Typography>
                        <Typography className={classes.nama} component="h4" variant="body">
                         Lindungi Hutan
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
                          Penanaman 
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
                image="gersang.png"
                title="gersang"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h3" variant="body">
                     1000 pohon untuk bekas lahan kebakaran TANJAB...
                    </Typography>
                    <Typography className={classes.nama} component="h4" variant="body">
                     Rini indriani
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
                        Fundraising 
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
                image="bantu.jpeg"
                title="bantu"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h3" variant="body">
                    Bantu Yogyakarta Hadapi Abrasi di Pesisir Pan...
                    </Typography>
                    <Typography className={classes.nama} component="h4" variant="body">
                    Dani Dwi Karlina                   
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
                        Penanaman 
                    </Typography>
                    </CardContent>
                </div>
            </CardContent>
            </CardActionArea>
        </Card>

        <Card className={classes.card2}>
            <CardActionArea>
            <CardContent className={classes.crd}>
                <CardMedia
                className={classes.cover}
                image="tanam.png"
                title="tanam"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h3" variant="body">
                     Tanam Buah atau Kayu
                    </Typography>
                    <Typography className={classes.nama} component="h4" variant="body">
                     Satria Gen
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
                        Fundraising 
                    </Typography>
                    </CardContent>
                </div>
            </CardContent>
            </CardActionArea>
        </Card>
        </React.Fragment>
    );
}

export default Kampanye;