const setupEventListeners = () => {
  const notesSection = document.querySelector(".notes-section");

  notesSection.addEventListener("click", (e) => {
    const trashBtn = e.target.closest(".delete-btn");
    if (!trashBtn) return;

    const card = trashBtn.closest(".note-card");
    const id = card.dataset.id;

    openConfirmDelete(async (confirmed) => {
      if (!confirmed) return;

      try {
        await deleteNote(id);
        removeNoteCardById(id);
      } catch (err) {
        alert("Could not delete note: " + err.message);
      }
    });
  });
};
