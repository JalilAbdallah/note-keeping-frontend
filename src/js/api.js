async function fetchNotes(page = 1, limit = 10) {
  try {
    const response = await fetch(
      `http://localhost:5000/notes?page=${page}&limit=${limit}`,
    );

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
}
