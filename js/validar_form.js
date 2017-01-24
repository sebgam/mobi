
    $(document).ready(function(){
        
        $("#text1").hide();
        $("#text2").hide();
        $("#img_ok").hide();
        $("#img_fall").hide();
        
        
   //------------------------------------validacion usuario-----------     
        $("#user").focusin(function(){
            $("#text1").slideDown(500);
            $("#user").css("border-style","none");
            });
        $("#user").focusout(function(){
            
            if($("#user").val()==""){
            $("#user").css("border","solid red 1px").attr("placeholder","campo obligatorio");
            }
            
             })
        
  //-------------------------------------validacion contraseña      
        
         $("#pass").focusin(function(){
            $("#text2").slideDown(500);
            $("#pass").css("border-style","none");
            });
        $("#pass").focusout(function(){
            
            if($("#pass").val()==""){
            $("#pass").css("border","solid red 1px").attr("placeholder","campo obligatorio");
            }
            
             })
        
        
      //------------validar formulario-------------------
        
        $("#form").submit(function(){
            
            var elementos = document.querySelectorAll("input[type=text],input[type=password]");
            
           for(var i=0; i < elementos.length;i++){
               if($(elementos[i]).val()==""){
                   $(elementos[i]).css("border","solid red 1px").attr("placeholder","campos obligatorios");
                   return false;
               }
           }
            
            if($("#user").val()=="sebas" && $("#pass").val()=="1234"){
                $("#img_ok").slideDown(2000);
                $("#boton").attr("value","CORRECTO").css("background","#2ecc71");
                $("#img_fall").slideUp(1000);
            }else{
                $("#img_fall").slideDown(2000);
                $("#boton").attr("value","INCORRECTO").css("background","red");
                $("#img_ok").slideUp(1000);
            }
            return false;
        })
        
        
    });
    
    