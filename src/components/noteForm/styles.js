import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    // '&::placeholder': { color: 'red' },
  },

  form: {
    padding: '20px 30px',
  },

  inputContainer: {
    display: 'flex',
  },

  textfield: {
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    marginBottom: '30px',
  },

  inputTitle: {
    width: '475px',
    height: '44px',
    borderRadius: '4px',
    backgroundColor: '#F4F4F4',
  },

  description: {
    borderRadius: '4px',
    height: '227px',
    backgroundColor: '#F4F4F4',
  },

  formControl: {
    minWidth: '246px',
    marginLeft: '20px',
  },

  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  btn: {
    color: '#2196F3',
    textTransform: 'uppercase',
    fontSize: '14px',
    letterSpacing: 1.25,
  },
}));

export default useStyles;
