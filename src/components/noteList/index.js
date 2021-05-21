import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import NoteCard from '../noteCard';
import Image from '../image';

import useStyles from './styles';

function NoteList({ notes, setNotes, searchTerm, categoryTab }) {
  const classes = useStyles();

  const noteItems = notes
    .filter((note) => {
      if (searchTerm === '') {
        return note;
      } else if (note.title.toLowerCase().includes(searchTerm.toLowerCase())) {
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
          setNotes={setNotes}
          notes={notes}
          key={uuidv4()}
        />
      );
    });

  return (
    <>
      {noteItems.length === 0 ? (
        <Image title="Couldn't find any notes" url="search" />
      ) : (
        <div className={classes.cardContainer}>{noteItems}</div>
      )}
    </>
  );
}

export default NoteList;
