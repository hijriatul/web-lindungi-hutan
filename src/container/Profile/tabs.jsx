import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  tab: {
    width: '100%',
    marginTop: -20,
    marginBottom: 90,
    fontSize: 8,
    fontWeight: 700,
    backgroundColor: 'white',
  },
  button1: {
    width: 300,
    fontSize: 12,
    marginTop: 15,
    marginLeft: 8,
    marginBottom: 8,
    backgroundColor: '#00c744',
    borderRadius: 50,
    color: '#fff',
  },
  actionItem: {
      "&$selected": {
        color: "#00c744"
      }
    },
    selected: {
      color: "#00c744"
    },
    dn: {
      fontSize: 12,
      fontWeight: 'bold',
    }
}));

function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.tab}>
      <AppBar position="static" color="#fff">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="#212121"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className={classes.dn} component="body" label="Donasi" {...a11yProps(0)} />
          <Tab className={classes.dn} component="body" label="Kampanye" {...a11yProps(1)} />
          <Tab className={classes.dn} component="body" label="Gabung Aksi" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Button variant="contained" color="inherit" className={classes.button1}>
          <strong>Buat Kampanye Hutan</strong>
          </Button>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default FullWidthTabs;