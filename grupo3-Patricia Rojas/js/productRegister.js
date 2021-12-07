$("#guardarProducto").click(function(){
  if($.trim($("#idProduct").val()) == "" || $.trim($("#brandProduct").val()) == "" 
  || $.trim($("#procesorProduct").val()) == "" || $.trim($("#osProduct").val()) == ""
  || $.trim($("#descriptionProduct").val()) == "" || $.trim($("#memoryProduct").val()) == ""
  || $.trim($("#hardDriveProduct").val()) == "" || $.trim($("#availabilityProduct").val()) == ""
  || $.trim($("#priceProduct").val()) == ""
  || $.trim($("#quantityProduct").val()) == "" || $.trim($("#photographyProduct").val()) == ""
  ){
      alert("Por favor ingrese todos los campos");
  }else{

  //let sirve para capturar los datos que tengo en el formulario
    
    let data = {
  
    id : $("#idProduct").val(),
    brand : $("#brandProduct").val(),
    procesor : $("#procesorProduct").val(),
    os : $("#osProduct").val(),
    description : $("#descriptionProduct").val(),
    memory : $("#memoryProduct").val(),
    hardDrive : $("#hardDriveProduct").val(),
    availability : $("#availabilityProduct").val(),
    price : $("#priceProduct").val(),
    quantity : $("#quantityProduct").val(),
    photography : $("#photographyProduct").val(),
  }
    
    $.ajax({
      //endpoint es la url
      url:"http://129.151.120.39:8080/api/clone/new",
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
              alert("Ya esta registrado el clon con "+response.procesor);
          }
      }
  });
  }})
  
  