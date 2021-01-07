$(document).ready(function(){
    var text = $(":text");
    $("#color").click(function(){
        var oculto = $("#cajaDesplegable").css("left")=="-250px";
        if (oculto){
            $("#cajaDesplegable").animate({
                left:"0px"
            });
            $("#color").animate({
                left: "210px"
            }), $("#botonMenu").attr("src", "frontend/image/svg/x.svg")
        }
        else {
            $("#cajaDesplegable").animate({
                left:"-250px"
            });
            $("#color").animate({
                left: "270px"
            }), $("#botonMenu").attr("src", "frontend/image/svg/menu.svg")
        }
    });
    // $(text).focus(function(){
    //     var formtextid = ["Nombre aqui", "Apellido aqui", "Edad aqui", "Codigo Postal aqui"];
    //     var txtval = $(text).val()
    //     if (txtval == formtextid[0]){
    //         $(text).val("");
    //     }
    //     else if (txtval == formtextid[1]){
    //         $(text).val("");
    //     }
    //     else if (txtval == formtextid[2]){
    //         $(text).val("");
    //     }
    //     else if (txtval == formtextid[3]){
    //         $(text).val("");
    //     }
    // });
// -----------------------------------------------------------------------------------------------------------------    
    // var txtid = ["#name", "#lastname", "#age", "#cp"];
    // var txtval = ["Nombre aqui", "Apellido aqui", "Edad aqui", "Codigo Postal aqui"];
    // for (var i=0; i<=txtid.length; i++){
    //     $(txtid[i]).focus(function(){
    //         for (var j=0; j<=txtval.length; j++){
    //             if ($(txtid[i]).val() == txtval[j]){
    //                 $(txtid[i]).val("");
    //             }
    //         }
    //     });
    // }
    $("#name").focus(function(){
        if ($("#name").val() == "Nombre aqui"){
            $(this).val("");
        }
    });
    $("#name").blur(function(){
        if ($("#name").val() == ""){
            $(this).val("Nombre aqui");
            return false;
        }
    });
    $("#lastname").focus(function(){
        if ($("#lastname").val() == "Apellido aqui"){
            $(this).val("");
        }
    });
    $("#lastname").blur(function(){
        if ($("#lastname").val() == ""){
            $(this).val("Apellido aqui");
            return false;
        }
    });
    $("#age").focus(function(){
        if ($("#age").val() == "Edad aqui"){
            $(this).val("");
        }
    });
    $("#age").blur(function(){
        if ($("#age").val() == ""){
            $(this).val("Edad aqui");
            return false;
        }
    });
    $("#cp").focus(function(){
        if ($("#cp").val() == "Codigo Postal aqui"){
            $(this).val("");
        }
    });
    $("#cp").blur(function(){
        if ($("#cp").val() == ""){
            $(this).val("Codigo Postal aqui");
            return false;
        }
    });
    $("#email-id").focus(function(){
        if ($(this).val() == "Email aqui"){ 
            $(this).val("");
        }
    });
    $("#email-id").blur(function(){
        if ($(this).val() == ""){
            $(this).val("Email aqui");
        };
    });
    $("#enviar").click(function(){
        if ($("#name").val() == "Nombre aqui" || $("#name").val(isNaN) == true){
            alert ("sta mal");
            $("#name").val("Nombre aqui");
            return false;
        }
        else if ($("#lastname").val() == "Apellido aqui"){
            alert ("sta mal");
            return false;
        }
        else if ($("#age").val() == "Edad aqui"){
            alert ("sta mal");
            return false;
        }
        else if ($("#cp").val() == "Codigo Postal aqui"){
            alert ("sta mal");
            return false;
        }
    });
    // --------------------------------------------------------------------------------------------------------------------------------
        function text1(){
            document.getElementById("onLoaderText").innerHTML = "Cargando Recursos..";
        }
        function text2(){
            document.getElementById("onLoaderText").innerHTML = "Cargando Recursos...";
        }
        function text3(){
            document.getElementById("onLoaderText").innerHTML = "Cargando Recursos.";
        }
        var idtext = document.getElementById("onLoaderText").innerHTML;

        if (idtext == "Cargando Recursos."){
            setTimeout(text1, 2000);
            clearTimeout(text1);
            setTimeout(text2, 4000);
            clearTimeout(text2);
            setTimeout(text3, 6000);
            clearTimeout(text3);
        }
        setInterval(function(){
            if (idtext == "Cargando Recursos."){
                setTimeout(text1, 2000);
                setTimeout(text2, 4000);
                setTimeout(text3, 6000);
            }
        }, 6000)
        window.onload = function(){
            var idtexte = document.getElementById("cajaOnLoader");
            idtexte.style.visibility = "hidden";
            idtexte.style.opacity = "0";
            idtexte.style.transition = "3s";
        }
});
