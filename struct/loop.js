function loop() {
    this.loop1DeretFor = function(start, end,interval){
        var i;
        var total = 0;
        for(i=start;i<=end;i += interval){
            total += i;
        }

        return total;
    }
    this.loop2DeretWhile = function(start, end,interval){
        var i = start;
        var total = 0;
        while(i <= end){
            total += i;
            i += interval;
        }

        return total;
    }

    this.loop3DeretDoWhile = function(start, end,interval){
        var i = start;
        var total = 0;

        do{
            total += 1;
            i += interval;
        }while(i<=end);

        return total;
    }

    this.loop4CountA = function(text){
        var len = text.length;
        var i = 0;
        var count = 0;
        text = text.toLowerCase();
        for(i=0;i<len;i++){
            if(text[i] == 'a'){
                count += 1;
            }
        }

        return count;
    }

    this.loop5CountS = function(text){
        var len = text.length;
        var i = 0;
        var count = 0;
        text = text.toLowerCase();
        while(i < len){
            if(text[i] == 's'){
                count += 1;
            }
            i += 1;
        }

        return count;
    }

    this.loop6CountH = function(text){
        var len = text.length;
        var i = 0;
        var count = 0;
        text = text.toLowerCase();
        do{
            if(text[i] == 'h'){
                count += 1;
            }
            i += 1;
        }while(i < len);

        return count;
    }

    this.loop7CountKurung = function(text){
        var len = text.length;
        var i = 0;
        var stack = 0;
        
        for(i=0;i<len;i++){
            if(text[i] == '('){
                stack += 1;
            }else{
                stack -= 1;
            }
        }

        // Return 0 kalau '(' dan ')' jumlahnya sama
        return stack;
    }

    this.loop8CountKurung2 = function(text){
        var len = text.length;
        var i = 0;
        var stack = 0;
        
        while(i < len){
            if(text[i] == '('){
                stack += 1;
            }else{
                stack -= 1;
            }
        }

        // Return 0 kalau '(' dan ')' jumlahnya sama
        return stack;
    }

    this.loop9CountKurung3 = function(text){
        var len = text.length;
        var i = 0;
        var stack = 0;
        
        do{
            if(text[i] == '('){
                stack += 1;
            }else{
                stack -= 1;
            }
        }while(i < len);

        // Return 0 kalau '(' dan ')' jumlahnya sama
        return stack;
    }

    this.loop10CountHole = function(text){
        var len = text.length;
        var i = 0;
        var hole = 0;
        text = text.toUpperCase();

        for(i=0;i<len;i++){
            switch(text[i]){
                case 'A':
                case 'D':
                case 'O':
                case 'P':
                case 'Q':
                case 'R':
                    hole += 1;
                break;
                case 'B':
                    hole += 2;
                break;
            }
        }

        return hole;
    }

    this.loop11CountHole = function(text){
        var len = text.length;
        var i = 0;
        var hole = 0;
        text = text.toUpperCase();

        while(i<len){
            switch(text[i]){
                case 'A':
                case 'D':
                case 'O':
                case 'P':
                case 'Q':
                case 'R':
                    hole += 1;
                break;
                case 'B':
                    hole += 2;
                break;
            }
        }

        return hole;
    }

    this.loop12CountHole = function(text){
        var len = text.length;
        var i = 0;
        var hole = 0;
        text = text.toUpperCase();

        do{
            switch(text[i]){
                case 'A':
                case 'D':
                case 'O':
                case 'P':
                case 'Q':
                case 'R':
                    hole += 1;
                break;
                case 'B':
                    hole += 2;
                break;
            }
        }while(i<len);

        return hole;
    }

    this.loop13ForFor = function(len1, len2){
        var i = 0;
        var j = 0;
        var str = "";
        for(i=0;i<len1;i++){
            str = str.concat("(");
            for(j=0;j<len2;j++){
                str = str.concat("+");
            }
            str = str.concat(")");
        }
    }

    this.loop14WhileFor = function(len1, len2){
        var i = 0;
        var j = 0;
        var str = "";
        while(i<len1){
            str = str.concat("(");
            for(j=0;j<len2;j++){
                str = str.concat("+");
            }
            str = str.concat(")");
            i += 1;
        }
    }

    this.loop15DoWhileFor = function(len1, len2){
        var i = 0;
        var j = 0;
        var str = "";
        do{
            str = str.concat("(");
            for(j=0;j<len2;j++){
                str = str.concat("+");
            }
            str = str.concat(")");
            i += 1;
        }while(i<len1);
    }

    this.loop16ForWhile = function(len1, len2){
        var i = 0;
        var str = "";
        for(i=0;i<len1;i++){
            str = str.concat("(");
            j = 0;
            while(j<len2){
                str = str.concat("+");
                j += 1;
            }
            str = str.concat(")");
        }
    }

    this.loop17WhileWhile = function(len1, len2){
        var i = 0;
        var str = "";
        while(i<len1){
            str = str.concat("(");
            j = 0;
            while(j<len2){
                str = str.concat("+");
                j += 1;
            }
            str = str.concat(")");
            i += 1;
        }
    }

    this.loop18DoWhileWhile = function(len1, len2){
        var i = 0;
        var str = "";
        do{
            str = str.concat("(");
            j = 0;
            while(j<len2){
                str = str.concat("+");
                j += 1;
            }
            str = str.concat(")");
            i += 1;
        }while(i<len1);
    }

    this.loop19ForDoWhile = function(len1, len2){
        var i = 0;
        var str = "";
        for(i=0;i<len1;i++){
            str = str.concat("(");
            j = 0;
            do{
                str = str.concat("+");
                j += 1;
            }while(j<len2);
            str = str.concat(")");
        }
    }

    this.loop20WhileDoWhile = function(len1, len2){
        var i = 0;
        var str = "";
        while(i<len1){
            str = str.concat("(");
            j = 0;
            do{
                str = str.concat("+");
                j += 1;
            }while(j<len2);
            str = str.concat(")");
            i += 1;
        }
    }

    this.loop21DoWhileDoWhile = function(len1, len2){
        var i = 0;
        var str = "";
        do{
            str = str.concat("(");
            j = 0;
            do{
                str = str.concat("+");
                j += 1;
            }while(j<len2);
            str = str.concat(")");
            i += 1;
        }while(i<len1);
    }
}

module.exports = new sequence();