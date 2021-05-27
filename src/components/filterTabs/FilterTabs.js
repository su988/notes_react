import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import useStyles from './styles';

export const FilterTabs = ({ categoryTab, setCategoryTab }) => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles({ categoryTab });

  // Use tab panel component from MUI to avoid all these
  // if else statements
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setCategoryTab('all');
    } else if (newValue === 1) {
      setCategoryTab('home');
    } else if (newValue === 2) {
      setCategoryTab('work');
    } else if (newValue === 3) {
      setCategoryTab('personal');
    }
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      // check the classes object to style it
      // you'll need some dynamic styling
      TabIndicatorProps={{
        style: {
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          marginLeft: '75px',
          backgroundColor: '',
        },
      }}
      className={classes.tabs}
      centered
    >
      <Tab className={classes.tab} disableRipple label="All" />
      <Tab className={classes.tab} disableRipple label="Home" />
      <Tab className={classes.tab} disableRipple label="Work" />
      <Tab className={classes.tab} disableRipple label="Personal" />
    </Tabs>
  );
};
