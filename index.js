// @ts-check

(() => {
  const textarea = document.querySelector("textarea");
  const button = document.querySelector("button");
  const pre = document.querySelector("pre");

  if (!textarea || !button || !pre) return;

  button.addEventListener("click", () => {
    const text = textarea.value;
    navigator.clipboard.writeText(text).then(
      async () => {
        console.log("Copied to clipboard");
        const readText = await navigator.clipboard.readText();
        pre.textContent += `copied text: ${readText}\n`;
      },
      (err) => {
        alert("Failed to copy to clipboard");
        console.error("Failed to copy to clipboard", err);
      }
    );
  });
})();
