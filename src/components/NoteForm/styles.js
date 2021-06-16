import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

  textTitle: {
    marginBottom: '30px',
  },

  inputTitle: {
    width: '475px',
    height: '44px',
    borderRadius: '4px',
    backgroundColor: '#F4F4F4',
    paddingLeft: '10px',
  },

  input: {
    backgroundColor: '#F4F4F4',
    minHeight: '220px',
    maxWidth: '475px',
  },

  description: {
    borderRadius: '4px',
    backgroundColor: '#F4F4F4',
    maxHeight: '227px',
    paddingTop: '10px',
    paddingLeft: '5px',
  },

  formControl: {
    minWidth: '247px',
    marginLeft: '20px',
    marginTop: '-15px',
    borderRadius: '4px',
  },

  inputLabel: {
    backgroundColor: '#F4F4F4',
    height: '44px',
    width: '247px',
    marginTop: '-10px',
    paddingTop: '15px',
    paddingLeft: '10px',
    color: '#00000099',
    '&.Mui-focused': {
      color: '#00000099',
    },
  },

  error: {
    color: 'red',
  },

  select: {
    paddingTop: '5px',
    paddingLeft: '10px',
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
