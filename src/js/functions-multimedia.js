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

  

    /// FILTROS

    $(".multimedia--carrusel--filtros__item").on("click", function () {
        var idCategoria = $(this).attr("id").replace("filtro", "");
        
        $(".multimedia--carrusel--filtros__item").removeClass("filtroOn");
        $(this).addClass("filtroOn");
        

        $("#carrusel-videos").hide();
        $("#carrusel-filtro").remove();
        
        var videosFiltro = $(".videos" + idCategoria).clone();
        $("#carrusel-videos").after("<div class='owl-carousel owl-theme' id='carrusel-filtro'>");
        $("#carrusel-filtro").append(videosFiltro);

        $('#carrusel-filtro').owlCarousel({
            autoplay: false,
            loop: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 20,
                    autoWidth: true,
                    center: true,
                    nav: false,
                },
            
                992: {
                    items: 1,
                    nav: true,
                    margin: 0,
                    autoWidth: true, 
                    center: true,
                    mouseDrag:false
                }
            }
        });


    });
});
