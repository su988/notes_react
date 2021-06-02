import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { dateFormatter } from '../utils/dateFomatter';

export const useNotes = () => {
  const [notes, setNotes] = useState(
    localStorage.getItem('notes')
      ? JSON.parse(localStorage.getItem('notes'))
      : [],
  );
  const [sortedNotes, setSortedNotes] = useState([]);

  useEffect(() => {
    setSortedNotes(
      notes.sort((a, b) =>
        a.completed === b.completed
          ? Date.parse(b.created_at) - Date.parse(a.created_at)
          : a.completed - b.completed,
      ),
    );
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(sortedNotes));
  }, [sortedNotes]);

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
    sortedNotes,
    addNote,
    editNote,
    deleteNote,
    toggleComplete,
  };
};
