// Modo Oscuro Persistente con LocalStorage
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");

  // Verificar si hay preferencia guardada
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    toggleButton.textContent = "☀️";
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("darkMode", "enabled");
      toggleButton.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "disabled");
      toggleButton.textContent = "🌙";
    }
  });
});
