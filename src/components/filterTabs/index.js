import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import useStyles from './styles';

export default function FilterTabs({ setCategoryTab }) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

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
}
