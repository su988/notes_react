import { makeStyles } from '@material-ui/core/styles';

const mapBackgroundColorToValue = {
  0: '#69BCFF',
  1: '#FF9100',
  2: '#5C6BC0',
  3: '#66BB6A',
};

const useStyles = makeStyles((theme) => ({
  selected: {
    backgroundColor: (props) => mapBackgroundColorToValue[props.value],
    color: '#fff',
    minWidth: '89px',
    minHeight: '36px',
    marginRight: '2px',
    borderRadius: '8px',
  },

  tab: {
    minWidth: '89px',
    minHeight: '36px',
  },
}));

export default useStyles;
