$(document).ready(function () {
    $("html").css("opacity", "1");

    $('#modal-newsletter').modal('show')

    /////////// VALIDACION FORMULARIOS CONTACTO ///////////
    
    /// TEXTO

    function valText(nameInput) {

        var regEx = /^[a-zA-Z ]*$/;
        var validText = regEx.test(nameInput.val());

        if (nameInput.val().length < 1) {
            nameInput.siblings("span").remove();
            nameInput.after("<span class='error-input'>Campo requerido");
        }

        else {
            nameInput.siblings("span").remove();
            
            if (!validText) {
                nameInput.siblings("span").remove();
                nameInput.after('<span class="error-input"> Solo se aceptan letras </span>');
                nameInput.siblings("span").show();
            }
        
            else {
                nameInput.siblings("span").remove();
            }    
        }
        
        
    }

    
    /// NUMEROS

    function valNum(nameInput) {
        if (nameInput.val().length < 1) {
            nameInput.siblings("span").remove();
            nameInput.after("<span class='error-input'>Campo requerido");
        }

        else {

            var regEx = /^[0-9]+$/;
        
            var validEmail = regEx.test(nameInput.val());
        
            if (!validEmail) {
                nameInput.siblings("span").remove();
                nameInput.after('<span class="error-input"> Solo se permiten numeros </span>');
                nameInput.siblings("span").show();
            }

            else {
                nameInput.siblings("span").remove();
            }
        }
    }

    
    /// EMAIL

    function valMail(nameInput) {
        if (nameInput.val().length < 1) {
            nameInput.siblings("span").remove();
            nameInput.after("<span class='error-input'>Campo requerido");
         }
            
        else{
            var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var validNumbre = regEx.test(nameInput.val());
    
            if (!validNumbre) {
                nameInput.siblings("span").remove();
                nameInput.after('<span class="error-input"> Verifica el formato de email </span>');
                nameInput.siblings("span").show();
            }
    
            else{
                nameInput.siblings("span").remove();
            }
        }
    }

    var inputNombre = $("#form-newsletter").find("#input-name"),
        inputApellido = $("#form-newsletter").find("#input-apellido"),
        inputEdad = $("#form-newsletter").find("#input-edad"),
        inputEmail = $("#form-newsletter").find("#input-email");
    
   

    $('#boton-enviar-news').click(function () {

        valText(inputNombre);
        valText(inputApellido);
        valNum(inputEdad);
        valMail(inputEmail);
        

        // VALIDATE ALL

        if( $('#form-newsletter .error-input').length == 0){
            $('#modal-newsletter').modal('hide')
            $(this).attr("type", "submit");
        }
        
    });


    // HEADER

    $(".header--navegacion .btn").on("click", function () {
        $(".header").toggleClass("headerOn");
    });


    /// NOTICIAS


    $('#carrusel-noticias').owlCarousel({
        autoplay: false,
        nav: false,
        loop: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
                margin: 0
            },
        
            992: {
                items: 3,
                dots: false
                
            }
        }
    });

});