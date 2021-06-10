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
import { ListNote } from './modules/list-note';

import { useNotes } from './hooks/useNotes';
import { useModals } from './hooks/useModals';

import useStyles from './styles';

export const App = () => {
  const { sortedNotes } = useNotes();
  const { openNew, handleCloseNew, openEdit, handleCloseEdit } = useModals();
  const [selectedId, setSelectedId] = useState();
  const [selectedNote, setSelectedNote] = useState({});
  const classes = useStyles();

  useEffect(() => {
    setSelectedNote(sortedNotes.find((note) => note.id === selectedId));
  }, [selectedId, sortedNotes]);

  return (
    <>
      <CssBaseline />
      <Box className={classes.mainApp}>
        <Layout>
          <SearchBar />
          <Box className={classes.btnContainer}>
            <FilterTabs />
            <ModalButton />
          </Box>

          <ProgressBar notes={sortedNotes} />

          {sortedNotes.length === 0 ? (
            <Image isNew={true} title="You don't have any notes" url="add" />
          ) : (
            <ListNote
              notes={sortedNotes}
              id={selectedId}
              setSelectedId={setSelectedId}
            />
          )}
        </Layout>
      </Box>
      <FormModal
        openModal={openNew}
        handleClose={handleCloseNew}
        title="Add Note"
      >
        <AddNote handleClose={handleCloseNew} />
      </FormModal>

      <FormModal
        openModal={openEdit}
        handleClose={handleCloseEdit}
        title="Update Note"
      >
        <EditNote
          handleClose={handleCloseEdit}
          selectedNote={selectedNote}
          id={selectedId}
        />
      </FormModal>
    </>
  );
};
