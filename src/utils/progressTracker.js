export const progressTracker = (notes) => {
  const count = notes.filter((note) => note.completed).length;
  const progress = notes.length === 0 ? 0 : (100 / notes.length) * count;

  return { count, progress };
};
