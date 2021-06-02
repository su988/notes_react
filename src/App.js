import React, { useState, useEffect } from 'react';
import { CssBaseline, Box } from '@material-ui/core';
import { Layout } from './components/Layout';
import { SearchBar } from './components/SearchBar';
import { FormModal } from './components/FormModal';
import { AddNote } from './modules/add-note';
import { EditNote } from './modules/edit-note';
import { FilterTabs } from './components/FilterTabs';
import { ModalButton } from './components/ModalButton';
import { ProgressBar } from './components/ProgressBar';
import { Image } from './components/Image';
import { ListNote } from './modules/list-note';

import { useNotes } from './hooks/useNotes';
import { useModals } from './hooks/useModals';
import { useInputs } from './hooks/useInputs';

import useStyles from './styles';

export const App = () => {
  const { sortedNotes, addNote, editNote, deleteNote, toggleComplete } =
    useNotes();
  const {
    openNew,
    handleOpenNew,
    handleCloseNew,
    openEdit,
    handleOpenEdit,
    handleCloseEdit,
    openDelete,
    handleOpenDelete,
    handleCloseDelete,
  } = useModals();
  const { searchTerm, handleSearchTermChange, category, handleCategoryChange } =
    useInputs();
  const [currentId, setCurrentId] = useState();
  const [selectedNote, setSelectedNote] = useState({});

  const classes = useStyles();

  useEffect(() => {
    setSelectedNote(sortedNotes.find((note) => note.id === currentId));
  }, [currentId, sortedNotes]);

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

          <ProgressBar notes={sortedNotes} />
          {sortedNotes.length === 0 ? (
            <Image
              handleOpen={handleOpenNew}
              title="You don't have any notes"
              url="add"
            />
          ) : (
            <ListNote
              notes={sortedNotes}
              handleOpen={handleOpenEdit}
              searchTerm={searchTerm}
              category={category}
              editNote={editNote}
              toggleComplete={toggleComplete}
              setCurrentId={setCurrentId}
              openDelete={openDelete}
              onOpenDelete={handleOpenDelete}
              onCloseDelete={handleCloseDelete}
              id={currentId}
              deleteNote={deleteNote}
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
