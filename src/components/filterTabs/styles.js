import { makeStyles } from '@material-ui/core/styles';

const mapBackgroundColorToCategoryTab = {
  all: 'red',
  home: 'blue',
  work: 'yellow',
  personal: 'green',
};

const useStyles = makeStyles((theme) => ({
  tabs: {
    marginLeft: '-50px',
  },

  tab: {
    backgroundColor: (props) =>
      mapBackgroundColorToCategoryTab[props.categoryTab],
  },
}));

export default useStyles;
