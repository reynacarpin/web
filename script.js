// Espera a que el contenido del DOM se haya cargado
document.addEventListener('DOMContentLoaded', function () {

    // Selecciona todas las imágenes con la clase 'zoom-img'
    const zoomImages = document.querySelectorAll('.zoom-img');

    // Itera sobre cada imagen para agregar el evento de clic
    zoomImages.forEach(function (image) {
        image.addEventListener('click', function () {
            // Alterna la clase 'active' al hacer clic
            this.classList.toggle('active');
        });
    });

});
