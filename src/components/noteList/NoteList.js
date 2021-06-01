import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { v4 as uuidv4 } from 'uuid';
import { NoteCard } from '../noteCard';
import { Image } from '../image';

import useStyles from './styles';

export const NoteList = ({
  notes,
  searchTerm,
  category,
  editNote,
  deleteNote,
  toggleComplete,
  handleOpen,
  setCurrentId,
}) => {
  const [sortedNotes, setSortedNotes] = useState();
  const classes = useStyles();

  useEffect(() => {
    setSortedNotes(
      notes.sort((a, b) =>
        a.completed === b.completed
          ? b.created_at - a.created_at
          : a.completed - b.completed,
      ),
    );
  }, [notes]);

  const noteItems =
    sortedNotes &&
    sortedNotes
      .filter((note) => {
        return note.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          category === 'all'
          ? note
          : note.category === category;
      })
      .map((note) => {
        return (
          <NoteCard
            note={note}
            key={uuidv4()}
            editNote={editNote}
            deleteNote={deleteNote}
            toggleComplete={toggleComplete}
            handleOpen={handleOpen}
            setCurrentId={setCurrentId}
          />
        );
      });

  return (
    <>
      {noteItems && noteItems.length === 0 ? (
        <Image title="Couldn't find any notes" url="search" />
      ) : (
        <Box className={classes.cardContainer}>{noteItems}</Box>
      )}
    </>
  );
};
