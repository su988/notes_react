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
      indicatorColor="primary"
      textColor="primary"
    >
      <Tab label="All" />
      <Tab label="Home" />
      <Tab label="Work" />
      <Tab label="Personal" />
    </Tabs>
  );
}
