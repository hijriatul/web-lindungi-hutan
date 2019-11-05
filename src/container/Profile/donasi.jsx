import React from "react";
import Apps from "../../component/app"
import Navigation from "../../component/navigation";
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {
     fade,
    withStyles,
  } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
      marginTop: 50,
      textAlign: 'center',
      marginBottom: 15,
    },
    nomina: {
      fontSize: 14,
      marginLeft: 20,
    },
    button: {
      width: 125,
      marginTop: -15,
    },
    button1: {
      width: 130,
      marginTop: -15,
      marginLeft: 10,
    },
    button2: {
      width: 125,
      marginTop: -7,
    },
    button3: {
      width: 130,
      marginTop: -7,
      marginLeft: 10,
    },
    paper: {
        height: 40,
        marginTop: -4,
        backgroundColor: '#f2f1f0',
    },
    rp: {
        margin: 10,
        marginLeft: 15,
        textAlign: 'center',
        color: '#757575',
    },
    container: {
       display: 'flex',
       flexWrap: 'wrap',
    },
    textField: {
       marginLeft: theme.spacing(1),
       marginRight: theme.spacing(1),
       width: 200,
       height: 40,
    },
    dns: {
        marginTop: -5,
        width: 236,
    },
    bintang: {
        fontStyle: 'italic',
        marginLeft: 112,
        marginTop: -5,
    },
    nm: {
        marginLeft: 28,
        marginTop: -18,
        width: 284,
    },
    cek: {
        color:'#bdbdbd',
        fontSize: 10,
        marginBottom: 20,
    },
    label: {
        marginTop: -49,
        marginLeft: 70,
        fontSize: 12,
        marginBottom: 20,
    },
    box: {
        marginLeft: 30,
    },
    komen: {
        marginLeft: 28,
        marginTop: -18,
        width: 284,
        marginBottom: 80,
    },
  }));


function Donasi(){
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const BootstrapInput = withStyles(theme => ({
        root: {
          'label + &': {
            marginTop: theme.spacing(3),
          },
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.common.white,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '10px 12px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            fontFamily: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
              boxShadow: `${fade('#045f50', 0.25)} 0 0 0 0.2rem`,
              borderColor: '#045f50',
            },
          },
        }))(InputBase);
        const Bootstrap = withStyles(theme => ({
            root: {
              'label + &': {
                marginTop: theme.spacing(3),
              },
            },
            input: {
                borderRadius: 4,
                position: 'relative',
                backgroundColor: theme.palette.common.white,
                border: '1px solid #ced4da',
                fontSize: 16,
                height: 100,
                padding: '10px 12px',
                transition: theme.transitions.create(['border-color', 'box-shadow']),
                fontFamily: [
                  '-apple-system',
                  'BlinkMacSystemFont',
                  '"Segoe UI"',
                  'Roboto',
                  '"Helvetica Neue"',
                  'Arial',
                  'sans-serif',
                  '"Apple Color Emoji"',
                  '"Segoe UI Emoji"',
                  '"Segoe UI Symbol"',
                ].join(','),
                '&:focus': {
                  boxShadow: `${fade('#045f50', 0.25)} 0 0 0 0.2rem`,
                  borderColor: '#045f50',
                },
              },
            }))(InputBase);
            const [age, setAge] = React.useState('');
            const handleChange = event => {
                setAge(event.target.value);
              };
            
        

    return(
        <React.Fragment>
            <div className="App">
                <Apps />
                <Navigation />
            </div>
      <CardContent>
        <Typography className={classes.title} variant="h4" component="h3">
          Ambil bagian untuk menghijaukan kembali Indonesia    
        </Typography>
        <Typography className={classes.nomina} variant="body" component="h5">
          Nominal donasi    
        </Typography>
      </CardContent>


      <CardActions>
      <Grid container spacing={1}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={5}>
            <Button variant="outlined" color="#00c853" className={classes.button}>
            Rp. 20.000
            </Button>
        </Grid>
        <Grid item xs={5}>
            <Button variant="outlined" color="#00c853" className={classes.button1}>
            Rp. 50.000
            </Button>
        </Grid>
        <Grid item xs={1}>
      </Grid>
      </Grid>
      </CardActions>
      <CardActions>
      <Grid container spacing={1}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={5}>
            <Button variant="outlined" color='#045f50' className={classes.button2}>
            Rp. 20.000
            </Button>
        </Grid>
        <Grid item xs={5}>
            <Button variant="outlined" color="#00c853" className={classes.button3}>
            Rp. 50.000
            </Button>
        </Grid>
        <Grid item xs={1}>
      </Grid>
      </Grid>
      </CardActions>
      <CardActions>
      <Grid container spacing={1}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
        <Paper className={classes.paper}>
            <Grid container spacing={1}>
            <Grid item xs={2}>
                <Typography className={classes.rp} variant="body" component="h5">
                Rp.    
                </Typography>
            </Grid>
            <Grid item xs={10}>
            <FormControl className={classes.dns}>
                <BootstrapInput placeholder="Minimun Rp. 20000" id="bootstrap-input" />
            </FormControl>
            </Grid>
            </Grid>
        </Paper>
        </Grid>
        <Grid item xs={1}>
      </Grid>
      </Grid>
      </CardActions>
      <Typography className={classes.bintang} variant="body2" component="p">
      *nominal donasi kelipatan ribuan    
      </Typography>

      
      <CardContent>
        <Typography className={classes.nomina} variant="body" component="h5">
          Nama    
        </Typography>
      </CardContent>
      <CardActions>
      <FormControl className={classes.nm}>
            <BootstrapInput placeholder="Nama Lengkap" id="bootstrap-input" />
      </FormControl>
      </CardActions>
      <FormControlLabel className={classes.box} control={
      <Checkbox
      className={classes.cek}
      value="checkedC" />} 
         />
        <Typography className={classes.label} variant="body2" component="p">
        Donasi sebagai anonim (tanpa nama)
        </Typography>

      <CardContent>
        <Typography className={classes.nomina} variant="body" component="h5">
          Email   
        </Typography>
      </CardContent>
      <CardActions>
      <FormControl className={classes.nm}>
            <BootstrapInput placeholder="Email Aktif" id="bootstrap-input" />
      </FormControl>
      </CardActions>


      <CardContent>
        <Typography className={classes.nomina} variant="body" component="h5">
          No telp./Whatsapp   
        </Typography>
      </CardContent>
      <CardActions>
      <FormControl className={classes.nm}>
            <BootstrapInput placeholder="no telp./Whatsapp" id="bootstrap-input" />
      </FormControl>
      </CardActions>


      <CardContent>
        <Typography className={classes.nomina} variant="body" component="h5">
          Komentar 
        </Typography>
      </CardContent>
      <CardActions>
      <FormControl className={classes.komen}>
        <Bootstrap placeholder="Komentar akan ditampilkan pada kampanye alam yang kamu donasikan (optional)" id="bootstrap-input" />
      </FormControl>
      </CardActions>


      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
    );
}

export default Donasi;