export const sortedNotes = (notes) => {
  notes.sort((a, b) =>
    a.completed === b.completed
      ? Date.parse(b.created_at) - Date.parse(a.created_at)
      : a.completed - b.completed,
  );
};
