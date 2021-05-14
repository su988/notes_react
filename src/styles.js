import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainApp: {
    backgroundColor: '#F5F5F5',
    paddingTop: '75px',
  },

  btnContainer: {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
