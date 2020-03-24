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
}

module.exports = new selection();