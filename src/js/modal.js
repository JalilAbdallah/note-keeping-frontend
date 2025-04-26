const dialog = document.getElementById("deleteDialog");

const openConfirmDelete = (onDecision) => {
  const handleClose = () => {
    dialog.removeEventListener("close", handleClose);
    onDecision(dialog.returnValue === "confirm");
  };

  dialog.addEventListener("close", handleClose);
  dialog.showModal();
};
