import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import gambar from '../image/pohon.png';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: 360,
    height: 40,
    position:'fixed',
    zIndex:200,
  },
  navbar: {
    height: 40,
    backgroundColor: '#045f50',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginBottom: 15,
  },
  title: {
    flexGrow: 1,
    marginBottom: 15,
  },
  logo: {
    marginRight: 8,
    marginBottom: 15,
    height: "23px",
  },
}));

function Apps() {
  const classes = useStyles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <img className={classes.logo} src={gambar} width="20" height="20" alt="" />
          <Typography variant="body" className={classes.title}>
            <strong>lindungihutan</strong>
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          {auth && (
            <div>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Apps;