window.onload = async () => {
  const notes = await fetchNotes(1, 10);
  renderNotes(notes);
  // setupEventListeners();
};
