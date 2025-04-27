const openConfirmDelete = () => {
  const dialog = document.getElementById("deleteDialog");
  return new Promise((resolve) => {
    const confirm = () => resolve(dialog.returnValue === "confirm");
    // const close  = () => resolve(null);

    dialog.addEventListener("close", confirm, { once: true });
    // For 'Esc' key
    // dialog.addEventListener('cancel', close, { once:true });
    dialog.showModal();
  });
};

function openNoteDialog(mode = "create", initialData = {}) {
  const dialog = document.getElementById("createDialog");
  const form = dialog.querySelector("form");
  const h2 = form.querySelector("h2");
  const submitBtn = form.querySelector('button[type="submit"]');

  h2.textContent = mode === "edit" ? "Edit note" : "Create a new note";
  submitBtn.textContent = mode === "edit" ? "Save changes" : "Save";
  form.noteTitle.value = initialData.title ?? "";
  form.noteContent.value = initialData.content ?? "";

  return new Promise((resolve) => {
    const submit = (e) => {
      console.log("submit");

      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      form.reset();
      dialog.close();
      resolve({
        title: data.noteTitle.trim(),
        content: data.noteContent.trim(),
      });
    };

    const close = () => {
      form.reset();
      dialog.close();
    };

    form.addEventListener("submit", submit, { once: true });
    // dialog.addEventListener('close',  close,  { once:true });
    // dialog.addEventListener('cancel', close,  { once:true });

    const cancelBtn = dialog.querySelector(".secondary");
    cancelBtn.addEventListener("click", close, { once: true });
    dialog.showModal();
  });
}
