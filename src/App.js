import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/layout';
import { SearchBar } from './components/searchBar';
import FormModal from './components/formModal';
import AddNoteForm from './components/addNoteForm';
import { FilterTabs } from './components/filterTabs';
import ModalButton from './components/modalButton';
import ProgressBar from './components/progressBar';
import Image from './components/image';
import NoteList from './components/noteList';

import { useNotes } from './hooks/useNotes';
import useStyles from './styles';

function App() {
  const { notes, addNote } = useNotes();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryTab, setCategoryTab] = useState('all');
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();

  // Yes, you will have a lot of code here to handle
  // which is considered business logic and for that you
  // should use custom hooks
  // const { filteredNotes, deleteNote, editNote, markAsCompleted} = useNotes(notes, searchTerm, categoryTab);
  // const { } = useModals()

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <CssBaseline />
      <div className={classes.mainApp}>
        <Layout>
          <SearchBar onSearchTermChange={handleSearchTermChange} />
          <div className={classes.btnContainer}>
            <FilterTabs setCategoryTab={setCategoryTab} />
            <ModalButton handleOpen={handleOpen} />
          </div>

          <ProgressBar notes={notes} />
          {notes.length === 0 ? (
            <Image
              handleOpen={handleOpen}
              title="You don't have any notes"
              url="add"
            />
          ) : (
            <NoteList
              notes={notes}
              handleClose={handleClose}
              searchTerm={searchTerm}
              categoryTab={categoryTab}
            />
          )}
        </Layout>
      </div>
      <FormModal
        openModal={openModal}
        handleClose={handleClose}
        title="Add Note"
      >
        <AddNoteForm
          handleClose={handleClose}
          notes={notes}
          addNote={addNote}
        />
      </FormModal>
      {/* // TODO: Add EditModal here as well to prevent rendering multiple times of
      it + add a new variable to keep edit notes */}
    </>
  );
}

export default App;
