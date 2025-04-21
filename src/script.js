(function () {
  const scriptTag = document.currentScript;
  const targetUrl = window.location.origin;

  if (!targetUrl) return;

  fetch("https://svc.cloudmateria.com/api/visit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: targetUrl }),
  }).catch(() => {
    // Silently fail, no logs
  });
})();
