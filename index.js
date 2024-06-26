// @ts-check

(() => {
  const textarea = document.querySelector("textarea");
  const button = document.querySelector("button");
  const pre = document.querySelector("pre");

  if (!textarea || !button || !pre) return;

  const { clipboard } = navigator;

  button.addEventListener("click", () => {
    const text = textarea.value;

    clipboard.writeText(text).then(
      async () => {
        console.log("Copied to clipboard");
        const readText = await clipboard.readText();
        pre.textContent += `copied text: ${readText}\n`;
      },
      (err) => {
        alert("Failed to copy to clipboard");
        console.error("Failed to copy to clipboard", err);
      }
    );
  });

  const line = document.querySelector("#line");
  line?.addEventListener("click", () => {
    location.href = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent("https://www.google.com/")}&text=test`
  })
})();
