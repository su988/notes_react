import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: '46px',
    boxShadow: '0px 3px 6px #00000029',
  },

  searchIcon: {
    margin: '5px 10px',
    color: '#00000099',
  },
}));

export default useStyles;
