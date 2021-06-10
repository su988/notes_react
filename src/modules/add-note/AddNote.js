import React from 'react';
import { NoteForm } from '../../components/NoteForm';
import { useNotes } from '../../hooks/useNotes';

export const AddNote = ({ handleClose }) => {
  const { addNote } = useNotes();
  return (
    <>
      <NoteForm handleClose={handleClose} addNote={addNote} isEdit={false} />
    </>
  );
};
