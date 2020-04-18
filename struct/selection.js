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

    this.selection5isLeapYear = function(year){
        if(year%4 == 0){
            if(year%100 == 0){
                if(year%400 == 0){
                    return true;
                }
            }else{
                return true;
            }
        }

        return false;
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

    this.select11Calculator = function(x,y,opsi){
        var result = 0;
        if(opsi > 0){
            switch(opsi){
                case 1: result = x+y; break;
                case 2: result = x-y; break;
                case 3: result = x*y; break;
                case 4: result = x/y; break;
                default: result = -1; break;
            }
        }
        return result;
    }

    this.select12ATMMenu = function(auth, menu){
        if(auth == 1){
            switch(menu){
                case 1: return "This is Your Balance : $1000"; break;
                case 2: return "Withdrawal menu"; break; 
                case 3: return "Transfer Menu"; break;
                default: return "Menu not found"; break;
            }
        }else{
            switch(menu){
                case 1: return "Admin menu : Change User Password"; break;
                case 2: return "Admin menu : Show monthly report"; break;
                default : return "Admin menu : Menu not found"; break;
            }
        }
    }

    this.select13isDateValid = function(month, day){
        var valid = true;

        switch(month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if(day > 31){
                    console.log("Date is Invalid");
                    valid = false;
                }
            break;
            case 2:
                if(day > 28){
                    console.log("Month detected is February");
                    valid = false;
                }
            break;
            case 4:
            case 6:
            case 9:
            case 11:
                if(day > 30){
                    console.log("Data is Invalid 2");
                    valid = false;
                }
            break;
            default:
                console.log("Input invalid");
                valid = false;
            break;
        }

        return valid;
    }

    this.select14DaysInMonth = function(month, year, day){
        var leap = this.selection5isLeapYear(year)
        var valid;

        switch(month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if(day >= 31){
                    console.log("Date is Invalid");
                    valid = false;
                }else{
                    valid = true;
                }
            break;
            case 2:
                if(leap){
                    valid = day <= 29;
                }else{
                    valid = day <= 28;
                }
            break;
            case 4:
            case 6:
            case 9:
            case 11:
                if(day >= 30){
                    console.log("Data is Invalid 2");
                    valid = false;
                }else{
                    valid = true;
                }
            break;
            default:
                console.log("Input invalid");
                valid = false;
            break; 
        }

        return valid;
    }

    this.selection15isDayValid = function(number){
        var mod = number%2;
        var text = "";
        switch(mod){
            case 0:
                if(number > 0){
                    text = text.concat("Bilangan Genap Positif, ");
                }
                if(number > 7){
                    text = text.concat("Bilangan lebih besar dari 7");
                }else{
                    text = text.concat("Bilangan kecil dari 7");
                }
            case 1:
                if(number > 0){
                    text = text.concat("Bilangan Ganjil Positif, ");
                }
                if(number > 7){
                    text = text.concat("Bilangan lebih besar dari 7");
                }else{
                    text = text.concat("Bilangan kecil dari 7");
                }
            break;
        }

        return text;
    }

    this.selection16ATM = function(ops1, ops2){
        var text = "";

        switch(ops1){
            case 1:
                switch(ops2){
                    case 1:
                        text = "Melihat saldo";
                    break;
                    default:
                        text = "Menu Saldo : Masukan Invalid";
                    break;
                }
            break;
            case 2:
                switch(ops2){
                    case 1:
                        text = "Menu Withdraw $20";
                    break;
                    case 2:
                        text = "Menu Withdraw $40";
                    break;
                    case 3:
                        text = "Nominal Withdraw lainnya";
                    break;
                    default:
                        text = "Menu Withdraw : Masukan Invalid";
                    break;
                }
            break;
            default:
                text = "Keluar";
        }
    }
}

module.exports = new selection();