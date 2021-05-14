import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    marginTop: '120px',
    marginLeft: '-15px',
    height: '456px',
    width: '824px',
    boxShadow: theme.shadows[5],
    borderRadius: '4px',
    padding: theme.spacing(2, 4, 3),
  },
}));

export default useStyles;
