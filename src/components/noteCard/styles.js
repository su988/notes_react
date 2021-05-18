import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '404px',
    maxHeight: '174px',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '4px',
    color: '#fff',
    marginBottom: '25px',
    '&:nth-child(odd)': {
      marginRight: '15px',
    },
  },

  done: {
    backgroundColor: '#282E2999',
    minHeight: '100%',
    textDecoration: 'line-through',
  },

  work: {
    backgroundColor: '#5C6BC0',
    minHeight: '100%',
  },

  personal: {
    backgroundColor: '#66BB6A',
    minHeight: '100%',
  },

  home: {
    backgroundColor: '#FF9100',
    minHeight: '100%',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '-8px',
  },

  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '-13px',
  },

  checkbox: {
    marginRight: '5px',
    color: '#fff',
    opacity: '0.6',
  },

  title: {
    fontSize: '20px',
  },

  headerRight: {
    opacity: '0.6',
    marginRight: '-10px',
  },

  editBtn: {
    padding: 0,
    color: '#FFFFFF',
  },

  deleteBtn: {
    padding: 0,
    color: '#FFFFFF',
  },

  desctiption: {
    fontSize: '14px',
    height: '76px',
    maxWidth: '374px',
    marginBottom: '15px',
  },

  date: { opacity: '0.6', fontSize: '15px' },
}));

export default useStyles;
