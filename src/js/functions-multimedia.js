$(document).ready(function () {
    $('#carrusel-videos').owlCarousel({
        autoplay: false,
        nav: false,
        loop: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
        
            992: {
                items: 3,
                nav: true,
                autoWidth: true, 
                center: true,
                mouseDrag:false
            }
        }
    });
});
