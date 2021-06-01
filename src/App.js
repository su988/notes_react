import React, { useState, useEffect } from 'react';
import { CssBaseline, Box } from '@material-ui/core';
import { Layout } from './components/layout';
import { SearchBar } from './components/searchBar';
import { FormModal } from './components/formModal';
import { AddNote } from './modules/add-note';
import { EditNote } from './modules/edit-note';
import { FilterTabs } from './components/filterTabs';
import { ModalButton } from './components/modalButton';
import { ProgressBar } from './components/progressBar';
import { Image } from './components/image';
import { NoteList } from './components/noteList';

import { useNotes } from './hooks/useNotes';
import { useModals } from './hooks/useModals';
import { useInputs } from './hooks/useInputs';

import useStyles from './styles';

export const App = () => {
  const { notes, addNote, editNote, deleteNote, toggleComplete } = useNotes();
  const {
    openNew,
    handleOpenNew,
    handleCloseNew,
    openEdit,
    handleOpenEdit,
    handleCloseEdit,
  } = useModals();
  const { searchTerm, handleSearchTermChange, category, handleCategoryChange } =
    useInputs();
  const [currentId, setCurrentId] = useState();
  const [selectedNote, setSelectedNote] = useState({});

  const classes = useStyles();

  useEffect(() => {
    setSelectedNote(notes.find((note) => note.id === currentId));
  }, [currentId, notes]);

  return (
    <>
      <CssBaseline />
      <Box className={classes.mainApp}>
        <Layout>
          <SearchBar onSearchTermChange={handleSearchTermChange} />
          <Box className={classes.btnContainer}>
            <FilterTabs onCategoryChange={handleCategoryChange} />
            <ModalButton handleOpen={handleOpenNew} />
          </Box>

          <ProgressBar notes={notes} />
          {notes.length === 0 ? (
            <Image
              handleOpen={handleOpenNew}
              title="You don't have any notes"
              url="add"
            />
          ) : (
            <NoteList
              notes={notes}
              handleOpen={handleOpenEdit}
              searchTerm={searchTerm}
              category={category}
              editNote={editNote}
              deleteNote={deleteNote}
              toggleComplete={toggleComplete}
              setCurrentId={setCurrentId}
            />
          )}
        </Layout>
      </Box>
      <FormModal
        openModal={openNew}
        handleClose={handleCloseNew}
        title="Add Note"
      >
        <AddNote handleClose={handleCloseNew} addNote={addNote} />
      </FormModal>

      <FormModal
        openModal={openEdit}
        handleClose={handleCloseEdit}
        title="Update Note"
      >
        <EditNote
          handleClose={handleCloseEdit}
          selectedNote={selectedNote}
          id={currentId}
          editNote={editNote}
        />
      </FormModal>
    </>
  );
};
