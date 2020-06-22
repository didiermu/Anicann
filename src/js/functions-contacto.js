$(document).ready(function () {

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

    /// TEXTO Y NUMERO

    function valTextNum(nameInput) {

        if (nameInput.val() < 1) {
            nameInput.siblings("span").remove();
            nameInput.after("<span class='error-input'>Campo requerido");
        } else {
            nameInput.siblings("span").remove();
            var regEx = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
            var validText = regEx.test(nameInput.val());

            if (!validText) {
                nameInput.siblings("span").remove();
                nameInput.after('<span class="error-input"> No se permiten caracteres especiales </span>');
                nameInput.siblings("span").show();
            } else {
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


    /// NEWS
    
    
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
            $('#modal-newsletter').modal('hide');
            $('#modal-thankyou').modal('show');
            // $(this).attr("type", "submit");
        }
        
    });


    /// CONTACTO
   
    $('#boton-enviar-contacto').click(function () {

        var inputNombre = $("#form-contacto").find("#input-name"),
            inputApellido = $("#form-contacto").find("#input-apellido"),
            inputEdad = $("#form-contacto").find("#input-edad"),
            inputEmail = $("#form-contacto").find("#input-email"),
            inputComentarios = $("#form-contacto").find("#input-comentarios");

        console.log(inputComentarios.val());

        valText(inputNombre);
        valText(inputApellido);
        valNum(inputEdad);
        valMail(inputEmail);
        valTextNum(inputComentarios);
        

        // VALIDATE ALL

        if( $('#form-contacto .error-input').length == 0){
            $('#modal-thankyou').modal('show');
            // $(this).attr("type", "submit");
        }
        
    });
});