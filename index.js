// @ts-check

(() => {
  const textarea = document.querySelector("textarea");
  const button = document.querySelector("button");

  if (!textarea || !button) return;

  const text = textarea.value;

  button.addEventListener("click", () => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("Copied to clipboard");
      },
      (err) => {
        alert("Failed to copy to clipboard");
        console.error("Failed to copy to clipboard", err);
      }
    );
  });
})();
