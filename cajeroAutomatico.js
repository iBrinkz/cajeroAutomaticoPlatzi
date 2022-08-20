class Cajero{
    constructor(){
        this.fondo = 0;
        this.debito = 0;
    }

    totalDisponible(){
        for(var p in billetes){
            this.fondo = this.fondo + (billetes[p].valor * billetes[p].cantidad);
        }
        return this.fondo;
    }

    retirar(){
        var restante = this.debito;
        var entero = [];
        for(var i in billetes){
            entero[i] = parseInt(restante/billetes[i].valor);
            if(entero[i] > 0){
                while(entero[i] > billetes[i].cantidad){
                    entero[i] = entero[i] - 1;                    
                }
                restante = restante - (billetes[i].valor * entero[i]);
            }

            if(restante == 0){
                this.fondo = this.fondo - this.debito;
                for(var i in entero){
                    billetes[i].cantidad = billetes[i].cantidad - entero[i];
                    console.log("Billetes de "+ billetes[i].billete + " que quedan : " + billetes[i].cantidad);
                }
                console.log("se debito");
                return true;
            }else if(i == (billetes.length - 1)){
                return false;
            }
        }
    }
}
