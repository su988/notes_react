import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    marginTop: '120px',
    marginLeft: '-15px',
    height: '456px',
    width: '824px',
    boxShadow: theme.shadows[5],
    borderRadius: '4px',
  },

  title: {
    color: '#00000099',
    marginLeft: '40px',
  },

  line: {
    color: '#F4F4F4',
    height: 0.5,
  },
}));

export default useStyles;
