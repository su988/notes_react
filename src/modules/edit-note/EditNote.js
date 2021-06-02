import React from 'react';
import { NoteForm } from '../../components/NoteForm';
import { useNotes } from '../../hooks/useNotes';

export const EditNote = ({ handleClose, id, selectedNote }) => {
  const { editNote } = useNotes();
  return (
    <>
      <NoteForm
        handleClose={handleClose}
        id={id}
        editNote={editNote}
        selectedNote={selectedNote}
        isEdit={true}
      />
    </>
  );
};
