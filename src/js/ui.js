const renderNotes = (notes) => {
  const notesSection = document.querySelector(".notes-section");

  const existingNotes = notesSection.querySelectorAll(
    ".note-card:not(.create-note)",
  );
  existingNotes.forEach((note) => note.remove());

  notes.forEach((note) => {
    const noteCard = document.createElement("article");
    noteCard.classList.add("note-card");

    noteCard.innerHTML = `
          <header>
            <h2>${note.title}</h2>
            <time datetime="${note.createdAt}" class="note-date">${formatDate(note.createdAt)}</time>
          </header>
          <hr />
          <p class="note-body">${note.content}</p>
        `;

    notesSection.appendChild(noteCard);
  });
};
