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

function openCreateNote() {
  const dialog = document.getElementById("createDialog");
  const form = dialog.querySelector("form");
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
