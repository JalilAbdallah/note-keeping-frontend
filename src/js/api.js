const BASE_URL = "http://localhost:5000/api/notes";

const fetchNotes = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch notes: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data.notes;
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  }
};

const deleteNote = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Failed to delete note");
};
