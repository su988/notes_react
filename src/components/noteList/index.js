import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NoteCard from '../noteCard';
import Image from '../image';

import useStyles from './styles';

function NoteList({
  notes,
  searchTerm,
  categoryTab,
  editNote,
  deleteNote,
  toggleComplete,
  handleOpen,
  setCurrentId,
}) {
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
      // filter only once instead
      .filter((note) => {
        if (searchTerm === '') {
          return note;
        } else if (
          note.title.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return note;
        }
      })
      .filter((note) => {
        if (note.category === categoryTab) {
          return note;
        } else if (categoryTab === 'all') {
          return note;
        }
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
        <div className={classes.cardContainer}>{noteItems}</div>
      )}
    </>
  );
}

export default NoteList;
