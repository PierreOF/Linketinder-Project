"use strict";
function navigate(page) {
    import(`./${page}.js`)
        .then(module => {
        document.getElementById('content').innerHTML = module.default();
    })
        .catch(err => console.error("Erro ao carregar módulo:", err));
}
// expõe a função globalmente para ser acessível no HTML
window.navigate = navigate;
