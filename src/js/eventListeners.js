const notesSection = document.querySelector(".notes-section");

notesSection.addEventListener("click", async (e) => {
  if (e.target.closest(".delete-btn")) {
    const card = e.target.closest(".note-card");
    console.log(card);

    if (await openConfirmDelete()) {
      await deleteNote(card.dataset.id);
      removeNoteCardById(card.dataset.id);
    }
    return;
  }

  if (e.target.closest(".create-note")) {
    const data = await openCreateNote();
    if (data) addNoteCard(await createNote(data));
  }
});
