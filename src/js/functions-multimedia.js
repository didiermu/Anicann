$(document).ready(function () {
    $('#carrusel-videos').owlCarousel({
        autoplay: false,
        nav: false,
        loop: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 20,
                autoWidth: true,
                center: true
            },
        
            992: {
                items: 3,
                nav: true,
                margin: 0,
                autoWidth: true, 
                center: true,
                mouseDrag:false
            }
        }
    });
});
