import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  imageTitle: {
    fontSize: '34px',
    color: '#00000099',
    opacity: '60%',
  },

  add: {
    width: '258px',
    height: '258px',
    background: `url('/add-note-illustration.svg')`,
    '&:hover': {
      cursor: 'pointer',
    },
  },

  search: {
    width: '258px',
    height: '258px',
    background: `url('/search-image.svg')`,
  },
}));

export default useStyles;
