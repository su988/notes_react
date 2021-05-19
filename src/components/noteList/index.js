import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import NoteCard from '../noteCard';

import useStyles from './styles';

function NoteList({ notes, setNotes }) {
  const classes = useStyles();
  const noteItems = notes.map((note) => (
    <NoteCard note={note} setNotes={setNotes} notes={notes} key={uuidv4()} />
  ));
  return (
    <>
      <div className={classes.cardContainer}>{noteItems}</div>
    </>
  );
}

export default NoteList;
