export const progressTracker = (notes) => {
  if (notes.length === 0) {
    return { sum: 0, progress: 0 };
  }

  const sum = notes.reduce((sum, note) => {
    if (note.completed) {
      return sum + 1;
    } else {
      return 0;
    }
  }, 0);

  return { sum: sum, progress: Math.round((sum / notes.length) * 100) };
};
