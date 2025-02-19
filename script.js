document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("themeToggle");

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");

        // Muda o texto do botão com base no modo atual
        if (document.body.classList.contains("dark-mode")) {
            button.textContent = "☀️ Modo Claro";
        } else {
            button.textContent = "🌙 Modo Escuro";
        }
    }

    // Adiciona evento de clique ao botão
    button.addEventListener("click", toggleDarkMode);
});

