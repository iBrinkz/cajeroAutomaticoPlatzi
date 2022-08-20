var dato = document.getElementById("cantidad");
var btnRetirar = document.getElementById("retirar");
var btnMostrarDetalle = document.getElementById("mostrarDetalle");

btnRetirar.addEventListener("mouseup", debitar);
//btnMostrarDetalle.addEventListener("mouseup", mostrarDetalle);

var billetes = [];
billetes.push(new Billetes("Cincuenta", 50, 3));
billetes.push(new Billetes("Veinte", 20, 2));
billetes.push(new Billetes("Diez", 10, 2));

var cajero = new Cajero();
mostrarDetalle();


function cajaDisponible(){
    
}

function debitar(){
    cajero.debito = dato.value;
    if(!isNaN(cajero.debito) && cajero.debito > 0){
        if((cajero.debito <= cajero.fondo) && (cajero.debito % 1 == 0)){
            if(cajero.retirar(cajero.debito)){
                alert("Haz retirado: " + cajero.debito);
            }else{
                alert("La cantidad "+ cajero.debito + " no esta disponible " +
                "disponible en este momento. Ingrese otro cantidad por favor.");
            }
        }else{
            alert("El cajero devuelve solo billetes de 10, 20 y 50");
        }
    }else{
        alert("Ingrese un valor numerico mayor o igual que 10");
    }
}

function mostrarDetalle(){
    document.write("<br /><strong>Total disponible: </strong>" + cajero.totalDisponible());
}

