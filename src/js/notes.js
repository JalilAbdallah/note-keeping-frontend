
// Function to fetch notes from the backend
async function fetchNotes(page = 1, limit = 10) {
    try {
      const response = await fetch(`http://localhost:5000/notes?page=${page}&limit=${limit}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch notes: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return data.notes;
    } catch (error) {
      console.error('Error fetching notes:', error);
      return [];
    }
  }
  
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }
  
  function renderNotes(notes) {
    const notesSection = document.querySelector('.notes-section');
  
    const existingNotes = notesSection.querySelectorAll('.note-card:not(.create-note)');
    existingNotes.forEach(note => note.remove());
  
    notes.forEach(note => {
      const noteCard = document.createElement('article');
      noteCard.classList.add('note-card');
  
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
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    const notes = await fetchNotes(1, 10);
    renderNotes(notes);
  });