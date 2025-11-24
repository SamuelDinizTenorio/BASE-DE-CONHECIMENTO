/**
 * Manipulador de Erros Global para erros síncronos e de sintaxe não capturados.
 * Funciona como um "catch" de último recurso para a aplicação.
 */
window.addEventListener('error', function(event) {
    console.error("Ocorreu um erro global não capturado:", event.message);
});

/**
 * Manipulador de Erros Global para Promises que foram rejeitadas e não tiveram
 * um .catch() para tratar o erro. Essencial para código assíncrono.
 */
window.addEventListener('unhandledrejection', function(event) {
    console.error("Ocorreu uma rejeição de Promise não capturada:", event.reason);
});
