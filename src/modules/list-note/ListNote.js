import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { v4 as uuidv4 } from 'uuid';
import { NoteCard } from '../../components/NoteCard';
import { Image } from '../../components/Image';
import { DeleteDialog } from '../../components/DeleteDialog';

import useStyles from './styles';

export const ListNote = ({ notes, searchTerm, category, id, setCurrentId }) => {
  const classes = useStyles();

  const noteItems =
    notes &&
    notes
      .filter((note) => {
        if (category === 'all') {
          return note.title.toLowerCase().includes(searchTerm.toLowerCase());
        } else {
          return (
            note.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            note.category === category
          );
        }
      })
      .map((note) => {
        return (
          <NoteCard note={note} key={uuidv4()} setCurrentId={setCurrentId} />
        );
      });

  return (
    <>
      {noteItems && noteItems.length === 0 ? (
        <Image title="Couldn't find any notes" url="search" />
      ) : (
        <Box className={classes.root}>
          <Box className={classes.cardContainer}>{noteItems}</Box>
          <DeleteDialog id={id} />
        </Box>
      )}
    </>
  );
};
