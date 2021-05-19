import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import NoteCard from '../noteCard';

import useStyles from './styles';

function NoteList({ notes, setNotes, searchTerm }) {
  const classes = useStyles();
  const noteItems = notes
    .filter((note) => {
      if (searchTerm === '') {
        return note;
      } else if (note.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return note;
      }
    })
    .map((note) => {
      return (
        <NoteCard
          note={note}
          setNotes={setNotes}
          notes={notes}
          key={uuidv4()}
        />
      );
    });

  return (
    <>
      <div className={classes.cardContainer}>{noteItems}</div>
    </>
  );
}

export default NoteList;
