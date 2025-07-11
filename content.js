// Dodaje hostname do tytułu strony, jeśli jeszcze nie został dodany
(function() {
    const hostname = window.location.hostname;
    if (!document.title.includes(hostname)) {
        document.title = `${document.title} [${hostname}]`;
    }
})();
