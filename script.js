document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("themeToggle");

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            button.textContent = "☀️ Modo Claro";
        } else {
            button.textContent = "🌙 Modo Escuro";
        }
    }

    button.addEventListener("click", toggleDarkMode);
});

