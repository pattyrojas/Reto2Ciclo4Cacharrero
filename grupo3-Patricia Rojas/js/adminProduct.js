//Esta función permite consultar el listado de productos
function consultarProduct() {

  $.ajax({
    url: "http://129.151.120.39:8080/api/clone/all",
    type: "GET",
    dataType: "json",
    success: function (response) {
      $("#contenidoTabla").empty();
      response.forEach(element => {
        //JQUERY
        var row = $("<tr>");
        row.append($("<td>").text(element.id));
        row.append($("<td>").text(element.brand));
        row.append($("<td>").text(element.procesor));
        row.append($("<td>").text(element.os));
        row.append($("<td>").text(element.description));
        row.append($("<td>").text(element.memory));
        row.append($("<td>").text(element.hardDrive));
        row.append($("<td>").text(element.availability));
        row.append($("<td>").text(element.price));
        row.append($("<td>").text(element.quantity));
        row.append($("<td>").text(element.photography));

        row.append($("<td class='text-center no-padding'>").append('<button type="button" class="btn btn-outline-warning btn-block w-100" data-bs-target="#updateCloudModal" data-bs-toggle="modal" onclick="buscarUser(' + element.id + ')">Editar</button>'));
        row.append($("<td class='text-center'>").append('<button type="button" class="btn btn-outline-danger btn-block w-100" onclick="eliminarProduct(' + element.id + ',\'' + element.brand + '\')">Eliminar</button>'));
        $("#contenidoTabla").append(row);
      });
    },
    error: function (xhr, status) {
      console.log("Ocurrió un error en el consumo.");
    }
  });
}

 /**
  * Se encarga de eliminar un registro de la base de datos.
  * @param {*} id 
  */
  function eliminarProduct(id,procesor){
    var r = confirm("Segur@ de eliminar el usuario: con nombre: "+procesor);
    if (r == true) {
        var data = {
            id:id
        };
        /**
         * Se ejecuta el método de eliminar de la API.
         */
        $.ajax({
            url:"http://129.151.120.39:8080/api/clone/"+id,
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
                    consultarProduct();
                }
            }
        });
    }
}