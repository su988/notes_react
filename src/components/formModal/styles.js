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
    height: '456px',
    width: '825px',
    boxShadow: theme.shadows[5],
    borderRadius: '4px',
  },

  title: {
    color: '#00000099',
    marginLeft: '40px',
    fontSize: '24px',
    padding: '15px 0 10px 0',
  },

  line: {
    color: '#F4F4F4',
    height: 0.5,
  },
}));

export default useStyles;
