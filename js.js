var $images = document.querySelectorAll('.pict');
$images.forEach(function (element) {
    element.addEventListener('click', function (event) {
        var image = event.target;
        var name = image.id;
        var attribute = element.getAttribute('src');

        if (attribute === ('img/' + name + 'blur.jpg')) {
            this.setAttribute('src', 'img/' + name + '.jpg');
            this.setAttribute('title', 'кликните, чтобы спрятать изображение');
        } else {
            this.setAttribute('src', 'img/' + name + 'blur.jpg');
            this.setAttribute('title', 'кликните, чтобы увидеть изображение');
        }
    });
});