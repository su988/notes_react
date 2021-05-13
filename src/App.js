import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/Layout';

import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.app}>
        <Layout>
          <div>hello worl</div>
        </Layout>
      </div>
    </>
  );
}

export default App;
