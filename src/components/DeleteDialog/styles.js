import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  dialog: {
    position: 'absolute',
  },

  title: {
    minWidth: '300px',
    padding: '0 20px',
  },
}));

export default useStyles;
