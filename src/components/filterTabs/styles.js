import { makeStyles } from '@material-ui/core/styles';

// const mapBackgroundColorToCategoryTab = {
//   all: 'red',
//   home: 'blue',
//   work: 'yellow',
//   personal: 'green',
// };

const useStyles = makeStyles((theme) => ({
  tabs: {},

  tab: {
    // backgroundColor: (props) =>
    //   mapBackgroundColorToCategoryTab[props.categoryTab],
    backgroundColor: '#69BCFF',
    marginRight: '2px',
    borderRadius: '8px',
  },
}));

export default useStyles;
