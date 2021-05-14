import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/layout';
import SearchBar from './components/searchBar';
import FormModal from './components/formModal';

import useStyles from './styles';

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.mainApp}>
        <Layout>
          <SearchBar />
          <div className={classes.btnContainer}>
            <div>Tabs</div>
            <FormModal />
          </div>
          {/* <NotesList /> */}
        </Layout>
      </div>
    </>
  );
}

export default App;
