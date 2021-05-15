import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '404px',
    minHeight: '174px',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '4px',
    color: '#fff',
    marginBottom: '25px',
    '&:nth-child(odd)': {
      marginRight: '15px',
    },
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
  },

  title: {
    fontSize: '20px',
  },

  actionContainer: {
    opacity: '0.6',
  },

  desctiption: { fontSize: '14px' },

  date: { opacity: '0.6', fontSize: '15px' },
}));

export default useStyles;
