import React from 'react';
import { Tabs, Tab, Box } from '@material-ui/core';

import useStyles from './styles';

export const FilterTabs = ({ setCategoryTab }) => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles({ value });

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
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: { display: 'none' },
        }}
        className={classes.tabs}
        centered
      >
        <Tab
          className={value === 0 ? classes.selected : classes.tab}
          disableRipple
          label="All"
        />
        <Tab
          className={value === 1 ? classes.selected : classes.tab}
          disableRipple
          label="Home"
        />
        <Tab
          className={value === 2 ? classes.selected : classes.tab}
          disableRipple
          label="Work"
        />
        <Tab
          className={value === 3 ? classes.selected : classes.tab}
          disableRipple
          label="Personal"
        />
      </Tabs>
      {/* <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel> */}
    </>
  );
};

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;
//   return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
// }
