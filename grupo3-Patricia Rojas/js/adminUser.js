/**
 * Campo de búsqueda. Variable global para poder acceder a ella desde cualquier parte del código.
 */
 var idBuscado=0;

 function consultarUser(){
 
    $.ajax({
        url:"http://129.151.120.39:8080/api/user/all",
        type:"GET",
        dataType:"json",
        success: function (response){
            $("#contenidoTabla").empty();
            response.forEach(element => {
                //JQUERY
                var row = $("<tr>");
                row.append($("<td>").text(element.identification));
                row.append($("<td>").text(element.name));
               // row.append($("<td>").text(element.address));
                row.append($("<td>").text(element.email));
                row.append($("<td>").text(element.type));
                row.append($("<td>").text(element.zone));
               // row.append($("<td>").text(element.cellphone));
                
                //row.append($("<td>").text(element.password));
                
                
                row.append($("<td class='text-center no-padding'>").append('<button type="button" class="btn btn-outline-warning btn-block w-100" data-bs-target="#updateCloudModal" data-bs-toggle="modal" onclick="buscarUser('+element.id+')">Editar</button>'));
                row.append($("<td class='text-center'>").append('<button type="button" class="btn btn-outline-danger btn-block w-100" onclick="eliminarUser('+element.id+',\''+element.name+'\')">Eliminar</button>'));
               $("#contenidoTabla").append(row);
            });
        },
        error: function(xhr,status){
            console.log("Ocurrió un error en el consumo.");
        }
    });
}
 
 
  /**
  * Se encarga de actualizar un registro de la base de datos.
  */
 function actualizarUser(){
     var id = idBuscado;
     var identification = $("#identificacionUpdateUser").val();
     var name= $("#nombreUpdateUser").val();
     var address=$("#direccionUpdateUser").val();
     var cellPhone=$("#celularUpdateUser").val();
     var email= $("#emailUpdateUser").val();
     var password= $("#claveUpdateUser").val();
     var zone=$("#zonaUpdateUser").val();
     var type=$("#typeUpdateUser").val();
 
     var data = {
         id:id,
         identification:identification,
         name:name,
         address: address,
         cellPhone:cellPhone,
         email:email,
         password:password,
         zone:zone,
         type:type,
     };
     $.ajax({
         url:"http://129.151.120.39:8080/api/user/update",
         type:"PUT",
         dataType:"json",
         data:JSON.stringify(data), //convertimos el objeto a un string para que sea compatible con el formato de la API.
         headers: {
             "Content-Type": "application/json"
         },
         statusCode: {
             201: function(){
                 idBuscado = 0;
                 $("#identificacionUpdateUser").val("");
                 $("#nombreUpdateUser").val("");
                 $("#direccionUpdateUser").val("");
                 $("#celularUpdateUser").val("");
                 $("#emailUpdateUser").val("");
                 $("#claveUpdateUser").val("");
                 $("#zonaUpdateUser").val("");
                 $("#typeUpdateUser").val("");
                 consultarCloud();
             }
         }
     });
 }
 
 /**
  * Se encarga de eliminar un registro de la base de datos.
  * @param {*} id 
  */
 function eliminarUser(id,name){
     var r = confirm("Segur@ de eliminar el usuario: con nombre: "+name);
     if (r == true) {
         var data = {
             id:id
         };
         /**
          * Se ejecuta el método de eliminar de la API.
          */
         $.ajax({
             url:"http://129.151.120.39:8080/api/user/"+id,
             type:"DELETE",
             dataType:"json",
             data:JSON.stringify(data),
             headers: {
                 "Content-Type": "application/json"
             },
             statusCode: {
                 204: function(){
                     /**
                      * Si el status code es 204, significa que la petición fue exitosa, se recarga la tabla.
                      */
                     consultarCloud();
                 }
             }
         });
     }
 }
 
 /**
  * Se encarga de buscar un registro de la base de datos y cargarlo en los campos de edición.
  * @param {*} id 
  */
 function buscarUser(id){
     $.ajax({
         url:"http://129.151.120.39:8080/api/user/"+id,
         type:"GET",
         dataType:"json",
         success: function (response){
             if(response.id!=null){
                 idBuscado = response.id;
                 $("#identificacionUpdateUser").val(response.identification);
                 $("#nombreUpdateUser").val(response.name);
                 $("#direccionUpdateUser").val(response.address);
                 $("#celularUpdateUser").val(response.cellPhone);
                 $("#emailUpdateUser").val(response.email);
                 $("#claveUpdateUser").val(response.password);
                 $("#zonaUpdateUser").val(response.zone);
                 $("#typeUpdateUser").val(response.type);
             }else{
                 alert("No se encontró el registro.");
             }
         },
         error: function(xhr,status){
             alert("Ocurrió un error en el consumo buscar id no logre arreglarlo.");
         }
     });
 }
 
 /**
  * Se ejecuta cuando se carga la página.
  */
 $(document).ready(function(){
  
     /**
      * Se cargan las nubes en la tabla.
      */
     consultarCloud();
 });