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
    const data = await openNoteDialog("create");
    if (data) addNoteCard(await createNote(data));
  }

  if (e.target.closest(".note-card")) {
    const card = e.target.closest(".note-card");
    const initial = {
      title: card.querySelector("h2").textContent,
      content: card.querySelector(".note-body").textContent,
    };

    const data = await openNoteDialog("edit", initial);
    if (data) updateNoteCard(card, await updateNote(card.dataset.id, data));
  }
});
