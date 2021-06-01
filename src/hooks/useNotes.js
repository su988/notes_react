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
      created_at: new Date(),
      id: uuidv4(),
    };

    setNotes((prev) => [newData, ...prev]);
  };

  const editNote = (data, id) => {
    setNotes((prev) =>
      prev.map((note) => {
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
  };

  const toggleComplete = (id) => {
    setNotes((prev) =>
      prev.map((note) => {
        if (note.id === id) {
          return { ...note, completed: !note.completed };
        }
        return note;
      }),
    );
  };

  return {
    notes,
    addNote,
    editNote,
    deleteNote,
    toggleComplete,
  };
};
