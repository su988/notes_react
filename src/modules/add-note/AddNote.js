import React from 'react';
import { NoteForm } from '../../components/NoteForm';

export const AddNote = ({ handleClose, addNote }) => {
  return (
    <>
      <NoteForm handleClose={handleClose} addNote={addNote} isEdit={false} />
    </>
  );
};
