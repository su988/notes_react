import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: '46px',
    boxShadow: '0px 3px 6px #00000029',
  },

  searchIcon: {
    marginLeft: '10px',
    marginRight: '10px',
    color: '#00000099',
  },

  searchInput: {
    width: '100%',
  },
}));

export default useStyles;
