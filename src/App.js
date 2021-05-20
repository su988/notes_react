import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/layout';
import SearchBar from './components/searchBar';
import FormModal from './components/formModal';
import AddNoteForm from './components/addNoteForm';
import FilterTabs from './components/filterTabs';
import ModalButton from './components/modalButton';
import NoteList from './components/noteList';

import useStyles from './styles';

function App() {
  const classes = useStyles();
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryTab, setCategoryTab] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <CssBaseline />
      <div className={classes.mainApp}>
        <Layout>
          <SearchBar notes={notes} setSearchTerm={setSearchTerm} />
          <div className={classes.btnContainer}>
            <FilterTabs setCategoryTab={setCategoryTab} />
            <ModalButton handleOpen={handleOpen} />
          </div>
          <FormModal
            openModal={openModal}
            handleClose={handleClose}
            title="Add Note"
          >
            <AddNoteForm
              setNotes={setNotes}
              handleClose={handleClose}
              notes={notes}
            />
          </FormModal>

          <NoteList
            notes={notes}
            setNotes={setNotes}
            searchTerm={searchTerm}
            categoryTab={categoryTab}
          />
        </Layout>
      </div>
    </>
  );
}

export default App;
