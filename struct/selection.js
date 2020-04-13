function selection(){
    // Author : Ilham Gibran Achmad Mudzakir - 24 Maret 2020
    this.select1BasicIf = function(x, y){
        var result;
        if(x > y){
            x += 2;
        }

        result = (x-y)+(Math.pow(y,2));

        return result;
    }

    this.select2BasicIfElse = function(x, y){
        var result = 0;
        if(x > y){
            result += x%y;
        }else{
            result += Math.pow(x,2);
        }

        return result;
    }

    this.select3Switch = function(x, y, opr){
        var result;
        switch(opr){
            case 1: result = x+y; break;
            case 2: result = x-y; break;
            case 3: result = x*y; break;
            case 4: result = x/y; break;
            default: result = x; break;
        }

        return result;
    }

    this.select4Ambil = function(x, saldo, limit){
        if(saldo > x){
            if(limit > x){
                return saldo-x;
            }
        }
        return -1;
    }

    this.select5BilanganNol = function(x){
        if(x != 0){
            if(x > 0){
                return 1;
            }else{
                return -1
            }
        }

        return 0
    }

    this.select6Ambil = function(x, saldo, limit){
        if(saldo < x){
            return -1
        }else{
            if(limit > x){
                return saldo - x;
            }
        }
        return limit;
    }

    this.select7Ambil = function(x, saldo, limit){
        limUtang = 25;

        if(saldo > x){
            if(limit-x >= 0){
                return saldo - x;
            }
        }else{
            if(Math.abs(saldo-x) < limUtang){
                return limUtang;
            }
        }
        return -1;
    }

    this.select8Tax = function(amount){
        var tax = 0;
        var tmpAmount = amount;
        if(amount >= 1000){
            if(amount >= 2000){
                tax = (7.5/100)*tmpAmount;
                tmpAmount -= tax;
            }
            tax += (5/100)*tmpAmount;
        }else{
            if(amount > 500){
                tax = (2.5/100)*tmpAmount;
            }else{
                tax = (1/100)*tmpAmount;
            }
        }

        return tax;
    }

    this.select9Tax = function(amount){
        var tax = 0;
        var tmpAmount = amount;
        if(amount < 1000){
            if(amount > 500){
                tax = (2.5/100)*tmpAmount;
            }else{
                tax = (1/100)*tmpAmount;
            }
        }else{
            if(amount >= 2000){
                tax = (7.5/100)*tmpAmount;
                tmpAmount -= tax;
            }
            tax += (5/100)*tmpAmount;
        }

        return tax;
    }

    this.select10Opsi6 = function(opsi, amount, saldo){
        if(opsi != 6){
            if(saldo > 120){
                return saldo - 20;
            }else{
                return -2;
            }
        }else{
            if(amount%20 == 0){
                return saldo - amount;
            }else{
                return -1;
            }
        }
    }

    // this.select11 = function(opsi){
        
    // }

    // this.select12 = function(opsi){
    //     if(typeof(opsi) == "string"){
    //         switch(opsi){
    //         }
    //     }
    // }
}

module.exports = new selection();