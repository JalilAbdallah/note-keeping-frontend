const renderNotes = (notes = []) => {
  const notesSection = document.querySelector(".notes-section");

  const existingNotes = notesSection.querySelectorAll(
    ".note-card:not(.create-note)",
  );
  existingNotes.forEach((note) => note.remove());

  notes.forEach((note) => notesSection.appendChild(buildNoteCard(note)));
};

const buildNoteCard = (note) => {
  const noteCard = document.createElement("article");
  noteCard.className = "note-card";
  noteCard.dataset.id = note._id;
  noteCard.innerHTML = `
  <header>
    <div class="note-header">
      <h2>${note.title}</h2>
      <time datetime="${note.createdAt}" class="note-date">${formatDate(note.createdAt)}</time>
    </div>

    <button class="delete-btn" aria-label="Delete note" title="Delete note">
      <i class="ph ph-trash"></i>
    </button>
  </header>
  <hr />
  <p class="note-body">${note.content}</p>
`;

  return noteCard;
};

const removeNoteCardById = (id) => {
  const card = document.querySelector(`.note-card[data-id="${id}"]`);
  if (card) card.remove();
};

const addNoteCard = (note) => {
  const container = document.querySelector(".notes-section");
  container.insertBefore(buildNoteCard(note), container.children[1]);
};
