function saveUser(user){

//let sirve para capturar los datos que tengo en el formulario
  
  let data = {

  identification : $("#identificationUser").val(),
  name : $("#nameUser").val(),
  address : $("#addressUser").val(),
  cellphone : $("#cellphone").val(),
  email : $("#emailUser").val(),
  password : $("#passwordUser").val(),
  zone : $("#zoneUser").val(),
  type : $("#typeUser").val(),
}
  
  $.ajax({
    //endpoint es la url
    url:"http://129.151.120.39:8080/api/user/new",
    method:"POST",
    dataType:"json",
    //nombre del objeto
    data:JSON.stringify(data),
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
}

 /**
  * Se encarga de consultar todos los registros de la base de datos para la tabla Cloud.
  */


