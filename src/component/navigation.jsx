import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link}  from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 360,
    position:"fixed",
    bottom:0,
    backgroundColor:"white",
    zIndex:200,
  },
    actionItem: {
      "&$selected": {
        color: "#00c744"
      }
    },
    selected: {
      color: "#00c744"
    },
});

function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
    <BottomNavigationAction component={Link} to="/" classes={{root: classes.actionItem,selected: classes.selected}} label="Home" icon={<HomeIcon />} />
    <BottomNavigationAction component={Link} to="/Kampanye" classes={{root: classes.actionItem,selected: classes.selected}} label="Kampanye" icon={<HistoryIcon />} />
    <BottomNavigationAction component={Link} to="/Profile" classes={{root: classes.actionItem,selected: classes.selected}} label="Profile" icon={<FavoriteIcon />} />
    </BottomNavigation>
  );
}

export default Navigation;