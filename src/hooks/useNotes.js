import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { dateFormatter } from '../utils/dateFomatter';

export const useNotes = (initialNotes = []) => {
  const [notes, setNotes] = useState(initialNotes);

  const addNote = (data) => {
    const newData = {
      ...data,
      completed: false,
      date: dateFormatter(),
      id: uuidv4(),
    };
    setNotes((prev) => [...prev, newData]);
  };

  const editNote = (data, id) => {
    console.log(notes);
    return setNotes(
      notes.map((note) => {
        if (id === note.id) {
          return {
            ...note,
            title: data.title,
            description: data.description,
            category: data.category,
            date: dateFormatter(),
          };
        }
        return note;
      }),
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    // console.log(id);
    // console.log(notes);
  };

  const toggleComplete = () => {};

  // const handleSearch = () => {};
  // const filteredNotes = initialNotes.filter;

  return {
    notes,
    addNote,
    editNote,
    toggleComplete,
    deleteNote,
  };
};
