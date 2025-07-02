document.addEventListener('DOMContentLoaded', () => {
    console.log('Site carregado completamente. O Guardião está observando...');

    // Exemplo: Rolagem suave para links de âncora (menu lateral)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Você pode adicionar mais funcionalidades gerais aqui, como:
    // - Efeitos de paralaxe
    // - Galeria de imagens (com lightboxes)
    // - Lógica para um menu hamburguer (se for responsivo)
});
