

$("#login").click(function(){
    if($.trim($("#email").val()) == "" || $.trim($("#contrasena").val()) == ""){
        alert("Por favor ingrese el correo y la contraseña");
    }else{
        let datos = {
            email: $("#email").val(),
            contrasena: $("#contrasena").val()
        }
        $.ajax({
            url:"http://129.151.120.39:8080/api/user/"+datos.email+"/"+datos.contrasena,
            method:"GET",
            dataType:"json",
            //solo funciona con código 200 el success, para un post es diferente ojo!
            success:function(response){
                console.log(response);
                if (response.id == null ){alert("¿No tienes cuenta?, presiona registrar ")};
                if (response.name != "NO DEFINIDO" ){alert("Bienvenido "+ response.name)};
                
            }
        });
    }
});


$("#guardar").click(function(){
    if($.trim($("#emailRegistro").val()) == "" || $.trim($("#usuarioRegistro").val()) == "" 
    || $.trim($("#contrasenaRegistro").val()) == "" || $.trim($("#contrasenaRegistro2").val()) == ""
    || $.trim($("#identificationUser").val()) == "" || $.trim($("#addressUser").val()) == ""
    || $.trim($("#phoneUser").val()) == "" || $.trim($("#zoneUser").val()) == ""
    || $.trim($("#typeUser").val()) == ""
    ){
        alert("Por favor ingrese todos los campos");
    }else{
        if($("#contrasenaRegistro").val() == $("#contrasenaRegistro2").val()){
            let datos = {
                id:$("#idUser").val(),
                identification:$("#identificationUser").val(),
                name: $("#usuarioRegistro").val(),
                address:$("#addressUser").val(),
                cellPhone:$("#phoneUser").val(),
                email: $("#emailRegistro").val(),
                password: $("#contrasenaRegistro").val(),
                zone:$("#zoneUser").val(),
                type:$("#typeUser").val(),
            }
            $.ajax({
                url:"http://129.151.120.39:8080/api/user/new",
                method:"POST",
                dataType:"json",
                data:JSON.stringify(datos),
                contentType:"application/json",
                Headers:{
                    "Content-Type":"application/json"
                },
                statusCode: {
                    //ojo aca con success tomaría el 200 y generaria un error
                    201: function(response){
                        console.log(response);
                        alert("Ya estas registrado "+response.name);
                    }
                }
            });
        }else{
            alert("Las contraseñas no coinciden");
        }
    }
});