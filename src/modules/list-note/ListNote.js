import React from 'react';
import Box from '@material-ui/core/Box';
import { v4 as uuidv4 } from 'uuid';
import { NoteCard } from '../../components/NoteCard';
import { Image } from '../../components/Image';
import { DeleteDialog } from '../../components/DeleteDialog';

import { useInputs } from '../../hooks/useInputs';
import useStyles from './styles';

export const ListNote = ({ notes, id, setSelectedId }) => {
  const { searchTerm, category } = useInputs();
  const classes = useStyles();

  const noteItems =
    notes &&
    notes
      .filter((note) => {
        return category === 'all'
          ? note.title.toLowerCase().includes(searchTerm.toLowerCase())
          : note.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
              note.category === category;
      })
      .map((note) => {
        return (
          <NoteCard note={note} key={uuidv4()} setSelectedId={setSelectedId} />
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
