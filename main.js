var denominador;
var numerador;
var resultado;
var resultadoFraccion;
var resultadoRealFraccion;

function calculoFraccion(max,min){

    var element = document.getElementById("rectanguloFracciones");
            element.classList.remove("rectFraccAnimateSuccess");
            element.classList.remove("rectFraccAnimateFail");

// denominador

denominador = Math.floor(Math.random() * (max-min)) + min;

// numerador

numerador = Math.floor(Math.random() * (denominador-min)) + min;

    if(numerador < denominador && numerador > 0 ){

        
        document.getElementById('rectanguloFracciones').innerHTML='';

        resultadoFraccion = numerador + "/" + denominador;

        resultado = resultadoFraccion;

        document.getElementById("resultado").innerHTML = "<span id='txtResultado'>" + resultadoFraccion + "<span>";

        resultadoRealFraccion = numerador / denominador;

        var diferencia = denominador - numerador;    

        var recFracc = document.getElementById("rectanguloFracciones");
        
        var j; var k;

            for ( j=0; j < numerador; j++){

                recFracc.innerHTML += "<div class='itemsRellenos'></div>";

                document.getElementsByClassName("itemsRellenos")[j].style.width = (100 / denominador) + "%";

                console.log(j);

            }
            
            for ( k=0; k < diferencia; k++){

                recFracc.innerHTML += "<div class='items'></div>";

                document.getElementsByClassName("items")[k].style.width = (100 / denominador) + "%";

                console.log(k);

            }
    }

    console.log(resultadoFraccion);

}

function cambiarDenominador(clicked_id){  

    var id = clicked_id;
    var denominadorGenerado;

    if ( id == 'anadirDenominador')
    {
        denominadorGenerado = denominador + 1;
    }
    else if ( id == 'quitarDenominador'){
        denominadorGenerado = denominador - 1;
    }
    
    var element = document.getElementById("rectanguloFracciones");
    element.classList.remove("rectFraccAnimateSuccess");
    element.classList.remove("rectFraccAnimateFail");

    // TODO: Poner condiciones para que haga una cosa u otra según si es +Denominador o -Denominador

    if(denominadorGenerado < 1){
        document.getElementsByClassName("modal")[0].style.display = 'block';
        document.getElementsByClassName("msgError")[0].innerHTML = '<h2 class="titleMsgError">Error</h2><span class="txtMsgError">El denominador no puede ser menor que uno.</span>';
        denominadorGenerado = denominadorGenerado + 1;
    }

    else if(denominadorGenerado > 10){
        document.getElementsByClassName("modal")[0].style.display = 'block';
        document.getElementsByClassName("msgError")[0].innerHTML = '<h2 class="titleMsgError">Error</h2><span class="txtMsgError">El denominador no puede ser mayor que diez.</span>';
        denominadorGenerado = denominadorGenerado - 1;
    }

    else{

            if(numerador < denominadorGenerado && numerador > 0 ){  

                document.getElementById('rectanguloFracciones').innerHTML='';
            
                resultado = numerador + "/" + denominadorGenerado;

                document.getElementById("resultado").innerHTML = "<span id='txtResultado'>" + resultado + "<span>";

                var diferencia = denominadorGenerado - numerador;    

                var recFracc = document.getElementById("rectanguloFracciones");
                
                var j; var k;

                    for ( j=0; j < numerador; j++){

                        recFracc.innerHTML += "<div class='itemsRellenos'></div>";

                        document.getElementsByClassName("itemsRellenos")[j].style.width = (100 / denominadorGenerado) + "%";

                        console.log(j);

                    }
                    
                    for ( k=0; k < diferencia; k++){

                        recFracc.innerHTML += "<div class='items'></div>";

                        document.getElementsByClassName("items")[k].style.width = (100 / denominadorGenerado) + "%";

                    }
               
            }
            else{
                if ( denominadorGenerado == numerador){
                    document.getElementsByClassName("modal")[0].style.display = 'block';
                    document.getElementsByClassName("msgError")[0].innerHTML = '<h2 class="titleMsgError">Error</h2><span class="txtMsgError">El resultado de la fracción no puede ser la unidad.</span>';
                    denominadorGenerado = denominadorGenerado - 1;
                    return false;
                }
            }
        
    }

    denominador = denominadorGenerado;
}


function cambiarNumerador(clicked_id){
    
    var id = clicked_id;
    var numeradorGenerado;

    if ( id == 'aumentaNumerador')
    {
        numeradorGenerado = numerador + 1;
    }
    else if ( id == 'quitaNumerador'){
        numeradorGenerado = numerador - 1;
    }
    
    var element = document.getElementById("rectanguloFracciones");
    element.classList.remove("rectFraccAnimateSuccess");
    element.classList.remove("rectFraccAnimateFail");

    if(numeradorGenerado < 1){
        document.getElementsByClassName("modal")[0].style.display = 'block';
        document.getElementsByClassName("msgError")[0].innerHTML = '<h2 class="titleMsgError">Error</h2><span class="txtMsgError">El numerador no puede ser menor que uno.</span>';
        numeradorGenerado = numeradorGenerado + 1;
    }

    else if(numeradorGenerado > 10){
        document.getElementsByClassName("modal")[0].style.display = 'block';
        document.getElementsByClassName("msgError")[0].innerHTML = '<h2 class="titleMsgError">Error</h2><span class="txtMsgError">El numerador no puede ser mayor que 10.</span>';
        numeradorGenerado = numeradorGenerado - 1;
        return false;
    }

    else{

        if(numeradorGenerado < denominador){ 

            document.getElementById('rectanguloFracciones').innerHTML='';
        
            resultado = numeradorGenerado + "/" + denominador;
        
            document.getElementById("resultado").innerHTML = "<span id='txtResultado'>" + resultado + "<span>";
        
            var diferencia = denominador - numeradorGenerado;    
        
            var recFracc = document.getElementById("rectanguloFracciones");
            
            var j; var k;
        
                for ( j=0; j < numeradorGenerado; j++){
        
                    recFracc.innerHTML += "<div class='itemsRellenos'></div>";
        
                    document.getElementsByClassName("itemsRellenos")[j].style.width = (100 / denominador) + "%";
        
                    console.log(j);
        
                }
                
                for ( k=0; k < diferencia; k++){
        
                    recFracc.innerHTML += "<div class='items'></div>";
        
                    document.getElementsByClassName("items")[k].style.width = (100 / denominador) + "%";
        
                }
        }

        else{
            if ( numeradorGenerado == denominador){
                document.getElementsByClassName("modal")[0].style.display = 'block';
                document.getElementsByClassName("msgError")[0].innerHTML = '<h2 class="titleMsgError">Error</h2><span class="txtMsgError">El resultado de la fracción no puede ser la unidad.</span>';
                numeradorGenerado = numeradorGenerado - 1;
            }
        }
    }

    numerador = numeradorGenerado;
}

// PARTE 3
// TODO: Hacer una animación cuando coincida el resultado de la Parte 1 con el botón de confirmar la fracción


var rectFracciones = document.getElementById('rectanguloFracciones') ;

function confirmarFraccionInicial(){

    resultado = numerador / denominador;

    if (resultado == resultadoRealFraccion)
        {
            var element = document.getElementById("rectanguloFracciones");
            element.classList.remove("rectFraccAnimateSuccess");
            document.getElementById('rectanguloFracciones').className='rectFraccAnimateSuccess';
            
        }
    else{
            var element = document.getElementById("rectanguloFracciones");
            element.classList.remove("rectFraccAnimateFail");
            document.getElementById('rectanguloFracciones').className='rectFraccAnimateFail';
        }
}

// POP UP

function cerrarPopUp(){

    document.getElementsByClassName("modal")[0].style.display = 'none';

}
