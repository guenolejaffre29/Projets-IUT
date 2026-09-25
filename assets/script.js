// Affiche le lien CV uniquement si assets/cv.pdf existe réellement.
(async () => {
  const link = document.getElementById("cv-link");
  if (!link) return;
  try {
    const res = await fetch(link.getAttribute("href"), { method: "HEAD" });
    if (res.ok) link.hidden = false;
  } catch (_) {
    // pas de CV disponible pour le moment
  }
})();
