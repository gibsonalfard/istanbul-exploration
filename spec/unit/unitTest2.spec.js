var selection= require('../../struct/selection');

/*===================================================================================================================*/
describe("UNIT TEST NO 2 : Selection ", function() {
    // Variable Global bisa dipake fungsi manapun
    var _numberA;
    var _numberB;
    var _numberC;
    var x;

    beforeEach(function() {
    });
/*===================================================================================================================*/

/*===================================================================================================================*/
    it("Selection 1 : Gak masuk If Harusnya 9-25 + 625 = 609", function() {
        // Test Case Gak Masuk If
        _numberA = 9;
        _numberB = 25;
        var result = selection.select1BasicIf(_numberA, _numberB);

        expect(result).toEqual(609);
    });

    it("Selection 1 : Masuk If Harus 12-8 + 64 = 68", function() {
        // Test Case Masuk If
        _numberA = 10;
        _numberB = 8;
        var result = selection.select1BasicIf(_numberA, _numberB);

        expect(result).toEqual(68);
    });
/*===================================================================================================================*/

/*===================================================================================================================*/
    it("Selection 2 : Masuk If Harusnya 10%8 = 2", function() {
        // Test Case Masuk If
        _numberA = 10;
        _numberB = 8;
        var result = selection.select2BasicIfElse(_numberA, _numberB);

        expect(result).toEqual(2);
    });

    it("Selection 2 : Masuk Else Harusnya 2^2 = 4", function() {
        // Test Case Masuk If
        _numberA = 2;
        _numberB = 5;
        var result = selection.select2BasicIfElse(_numberA, _numberB);

        expect(result).toEqual(4);
    });
/*===================================================================================================================*/

/*===================================================================================================================*/
    it("Selection 3", function() {
        // Test Case - Case 1 (x+y)
        _numberA = 25; //x
        _numberB = 9; //y
        _numberC = 1; //opr
        var result = selection.select3Switch(_numberA, _numberB, _numberC);

        expect(result).toEqual(34);

        // Test Case - Case 2 (x-y)
        _numberA = 1; //x
        _numberB = 2; //y
        _numberC = 2; //opr
        var result = selection.select3Switch(_numberA,_numberB, _numberC);

        expect(result).toEqual(-1);

        // Test Case - Case 3 (x*y)
        _numberA = 1; //x
        _numberB = 0; //y
        _numberC = 3; //opr
        var result = selection.select3Switch(_numberA,_numberB, _numberC);

        expect(result).toEqual(0);

        // Test Case - Case 4 (x/y)
        _numberA = 4; //x
        _numberB = 2; //y
        _numberC = 4; //opr
        var result = selection.select3Switch(_numberA,_numberB, _numberC);

        expect(result).toEqual(2);

        // Test Case - Case Default
        _numberA = 4; //x
        _numberB = 2; //y
        _numberC = 5; //opr
        var result = selection.select3Switch(_numberA,_numberB, _numberC);

        expect(result).toEqual(4);
    });
/*===================================================================================================================*/

/*===================================================================================================================*/
    it("Selection 4 : Masuk If Saldo = 5, Limit = 5, x = 4, Return = 1", function() {
        // Test Case Masuk If Saldo dan If Limit
        _numberA = 5; //Saldo
        _numberB = 5; //Limit
        x = 4; //x
        var result = selection.select4Ambil(x, _numberA, _numberB);

        expect(result).toEqual(1);
    });
/*===================================================================================================================*/

/*===================================================================================================================*/
    it("Selection 5 : Year = 400, Return = True",function(){
        // Test Case masuk If Year habis Mod 4 dan If Year habis Mod 100 dan If Year habis Mod 400, return True
        _numberA = 400; //Year

        var result = selection.selection5isLeapYear(_numberA);

        expect(result).toEqual(True);
    });
/*===================================================================================================================*/

/*===================================================================================================================*/
    it("Selection 6 : Saldo = 2, Limit = 3, x = 3, Return -1",function(){
        //Test Case masuk If Saldo karena Saldo lebih kecil dari x, return -1 
        _numberA = 2; //Saldo
        _numberB = 3; //Limit
        x = 3; //x

        var result = selection.select6Ambil(x, _numberA, _numberB);

        expect(result).toEqual(-1);
    });

    it("Selection 6 : Saldo = 5, Limit = 6, x = 4, Return 1",function(){
        //Test Case masuk If Limit karena Saldo lebih besar dari X dan Limit lebih besar dari x, return 1 (Saldo - x)
        _numberA = 5; //Saldo
        _numberB = 6; //Limit
        x = 4; //x

        var result = selection.select6Ambil(x, _numberA, _numberB);

        expect(result).toEqual(1);
    });
/*===================================================================================================================*/

/*===================================================================================================================*/
    it("Selection 7 : x = 1, Saldo = 5, Limit = 5, Return 4",function(){
        //Test Case masuk If Saldo karena Saldo lebih besar dari x, return 4 (Saldo - x)
        x = 1; //x
        _numberA = 5; //Saldo
        _numberB = 5; //Limit

        var result = selection.select7Ambil(x, _numberA, _numberB);

        expect(result).toEqual(4);
    });

    it("Selection 7 : x = 3, Saldo = 2, Limit = 5, Return 25",function(){
        //Test Case masuk If Math.abs karena Saldo lebih kecil dari x, return 25 (limUtang)
        x = 3; //x
        _numberA = 2; //Saldo
        _numberB = 5; //Limit

        var result = selection.select7Ambil(x, _numberA, _numberB);

        expect(result).toEqual(25);
    });
/*===================================================================================================================*/

/*===================================================================================================================*/
    it("Selection 8 : amount = 1000, Return 1050",function(){
        //Test Case masuk If amount >= 1000, return 1050
        _numberA = 1000; //amount

        var result = selection.select8Tax(_numberA);

        expect(result).toEqual(1050);
    });

    it("Selection 8 : amount = 2000, Return 1942.5",function(){
        //Test Case masuk If amount >= 1000 dan If amount >= 2000, return 1942.5
        _numberA = 2000; //amount

        var result = selection.select8Tax(_numberA);

        expect(result).toEqual(1942.5);
    });

    it("Selection 8 : amount = 501, Return 12525",function(){
        //Test Case masuk If amount > 500, result 12525
        _numberA = 501; //amount

        var result = selection.select8Tax(_numberA);

        expect(result).toEqual(12525);
    });

    it("Selection 8 : amount = 500, Return 5",function(){
        //Test Case masuk else karena amount lebih kecil dari 501, result 5
        _numberA = 500; //amount

        var result = selection.select8Tax(_numberA);

        expect(result).toEqual(5);
    });
/*===================================================================================================================*/

/*===================================================================================================================*/
    it("Selection 9 : amount = 999, Return 24975",function(){
        //Test Case masuk If amount<1000 dan If amount>500, result 24975
        _numberA = 999; //amount

        var result = selection.select9Tax(_numberA);

        expect(result).toEqual(24975);
    });

    it("Selection 9 : amount = 500, Return 5", function(){
        //Test Case masuk If amount<1000 dan else karena amount lebih kecil dari 501, result 5
        _numberA = 500; //amount

        var result = selection.select9Tax(_numberA);

        expect(result).toEqual(5);
    });

    it("Selection 9 : amount = 2000, Return 5",function(){
        //Test Case masuk If amount >= 2000 result 1942.5
        _numberA = 2000; //amount

        var result = selection.select9Tax(_numberA);

        expect(result).toEqual(5);
    });
/*===================================================================================================================*/

/*===================================================================================================================*/
    it("Selection 10 : opsi = 7 , amount = 1 , saldo = 121 , Return 101", function(){
        //Test Case masuk If opsi dan If saldo, return 101
        _numberA = 7; //opsi
        _numberB = 1; //amount
        _numberC = 121; //saldo

        var result = selection.select10Opsi6(_numberA, _numberB, _numberC);

        expect(result).toEqual(101);
    });

    it("Selection 10 : opsi = 7 , amount = 10 , saldo = 120 , Return -2", function(){
        //Test Case masuk If opsi karena opsi != 6 dan masuk else karena saldo lebih kecil dari 121, return -2
        _numberA = 7; //opsi
        _numberB = 10; //amount
        _numberC = 120; //saldo

        var result = selection.select10Opsi6(_numberA, _numberB, _numberC);

        expect(result).toEqual(-2);
    });

    it("Selection 10 : opsi = 6 , amount = 20 , saldo = 20 , Return 0", function(){
        //Test Case masuk else karena opsi = 6 dan masuk If amount karena amount habis dibagi 20, return 0
        _numberA = 6; //opsi
        _numberB = 20; //amount
        _numberC = 20; //saldo

        var result = selection.select10Opsi6(_numberA, _numberB, _numberC);

        expect(result).toEqual(0);
    });

    it("Selection 10 : opsi = 6 , amount = 21 , saldo = 10 , Retrun -1", function(){
        //Test Case masuk else karena opsi = 6 dan masuk else karena amount tidak habis dibagi 20, return -1
        _numberA = 6; //opsi
        _numberB = 21; //amount
        _numberC = 10; //saldo

        var result = selection.select10Opsi6(_numberA, _numberB, _numberC);

        expect(result).toEqual(-1);
    });
/*===================================================================================================================*/  

/*===================================================================================================================*/
    it("Selection 11", function(){
        //Test Case - Case 1 (x+y)
        _numberA = 1; //x
        _numberB = 1; //y
        _numberC = 1; //opsi

        var result = selection.select11Calculator(_numberA, _numberB, _numberC);

        expect(result).toEqual(2);

        //Test Case - Case 2 (x-y)
        _numberA = 1; //x
        _numberB = 1; //y
        _numberC = 2; //opsi

        var result = selection.select11Calculator(_numberA, _numberB, _numberC);

        expect(result).toEqual(0);

        //Test Case - Case 3 (x*y)
        _numberA = 1; //x
        _numberB = 1; //y
        _numberC = 3; //opsi

        var result = selection.select11Calculator(_numberA, _numberB, _numberC);

        expect(result).toEqual(1);

        //Test Case - Case 4 (x/y)
        _numberA = 1; //x
        _numberB = 1; //y
        _numberC = 4; //opsi

        var result = selection.select11Calculator(_numberA, _numberB, _numberC);

        expect(result).toEqual(1);

        //Test Case - default
        _numberA = 1; //x
        _numberB = 1; //y
        _numberC = 5; //opsi

        var result = selection.select11Calculator(_numberA, _numberB, _numberC);

        expect(result).toEqual(-1);

        //Test Case tidak masuk ke Case karena opsi lebih kecil dari 1
        _numberA = 1; //x
        _numberB = 1; //y
        _numberC = 0; //opsi

        var result = selection.select11Calculator(_numberA, _numberB, _numberC);

        expect(result).toEqual(0);
    });
/*===================================================================================================================*/ 

/*===================================================================================================================*/
    it("Selection 12", function(){
        //Test Case masuk If auth karena auth = 1 dan masuk Case 1, return "This is Your Balance" : $1000"
        _numberA = 1; //auth
        _numberB = 1; //menu

        var result = selection.select12ATMMenu(_numberA, _numberB);

        expect(result).toEqual("This is Your Balance : $1000");

        //Test Case masuk If auth karena auth = 1 dan masuk Case 2, return "Withdrawal menu" : $1000"
        _numberA = 1; //auth
        _numberB = 2; //menu

        var result = selection.select12ATMMenu(_numberA, _numberB);

        expect(result).toEqual("Withdrawal menu");

        //Test Case masuk If auth karena auth = 1 dan masuk Case 3, return "Transfer Menu" : $1000"
        _numberA = 1; //auth
        _numberB = 3; //menu

        var result = selection.select12ATMMenu(_numberA, _numberB);

        expect(result).toEqual("Transfer Menu");

        //Test Case masuk If auth karena auth = 1 dan masuk Case Default, return "Menu not found"
        _numberA = 1; //auth
        _numberB = 4; //menu

        var result = selection.select12ATMMenu(_numberA, _numberB);

        expect(result).toEqual("Menu not found");
    });

    it("Selection 12", function(){
        //Test Case masuk else karena auth != 1 dan masuk Case 1, return "Admin menu : Change User Password"
        _numberA = 0; //auth
        _numberB = 1; //menu

        var result = selection.select12ATMMenu(_numberA, _numberB);

        expect(result).toEqual("Admin menu : Change User Password");

        //Test Case masuk else karena auth != 1 dan masuk Case 2, return "Admin menu : Show monthly report"
        _numberA = 0; //auth
        _numberB = 2; //menu

        var result = selection.select12ATMMenu(_numberA, _numberB);

        expect(result).toEqual("Admin menu : Show monthly report");

        //Test Case masuk else karena auth != 1 dan masuk Case Default, return "Admin menu : Menu not found"
        _numberA = 0; //auth
        _numberB = 3; //menu

        var result = selection.select12ATMMenu(_numberA, _numberB);

        expect(result).toEqual("Admin menu : Menu not found");

    });
/*===================================================================================================================*/

/*===================================================================================================================*/
    it("Selection 13: ", function(){
    //Test Case Date is Invalid
    _numberA = 1; //month
    _numberB = 32; //day

    var result = selection.select13isDateValid(_numberA,_numberB);

    expect(result).toEqual(false);

    //Test Case Month Detected is February
    _numberA = 2; //month
    _numberB = 28; //day

    var result = selection.select13isDateValid(_numberA, _numberB);

    expect(result).toEqual(true);

    _numberA = 2; //month
    _numberB = 29; //day

    var result = selection.select13isDateValid(_numberA, _numberB);

    expect(result).toEqual(false);

    //Test Case Data is Invalid 2
    _numberA = 4; //month
    _numberB = 31; //day

    var result = selection.select13isDateValid(_numberA,_numberB);

    expect(result).toEqual(false);

    //Test Case Default
    _numberA = 0; //month
    _numberB = 0; //day

    var result = selection.select13isDateValid(_numberA,_numberB);

    expect(result).toEqual(false);
    });
/*===================================================================================================================*/

/*===================================================================================================================*/
    it("Selection 14", function(){
    //Test Case Date is Invalid
    _numberA = 1; //month
    _numberB = 400; //year
    _numberC = 31; //day

    var result = selection.select14DaysInMonth(_numberA, _numberB, _numberC);
    expect(result).toEqual(false);

    _numberA = 1; //month
    _numberB = 400; //year
    _numberC = 30; //day

    var result = selection.select14DaysInMonth(_numberA, _numberB, _numberC);
    expect(result).toEqual(true);

    //Test Case Leap Check
    _numberA = 2; //month
    _numberB = 400; //year
    _numberC = 29; //day

    var result = selection.select14DaysInMonth(_numberA,_numberB,_numberC);
    expect(result).toEqual(true);

    _numberA = 2; //month
    _numberB = 401; //year
    _numberC = 28; //day

    var result = selection.select14DaysInMonth(_numberA,_numberB,_numberC);
    expect(result).toEqual(true);

    //Test Case Data is Invalid 2
    _numberA = 4; //month
    _numberB = 400; //year
    _numberC = 30; //day

    var result = selection.select14DaysInMonth(_numberA,_numberB,_numberC);
    expect(result).toEqual(false);

    _numberA = 4; //month
    _numberB = 400; //year
    _numberC = 29; //day

    var result = selection.select14DaysInMonth(_numberA,_numberB,_numberC);
    expect(result).toEqual(true);

    //Test Case Default (Input Invalid)
    _numberA = 13; //month
    _numberB = 400; //year
    _numberC = 29; //day

    var result = selection.select14DaysInMonth(_numberA,_numberB,_numberC);
    expect(result).toEqual(false);
    });
/*===================================================================================================================*/

/*===================================================================================================================*/
    it("Selection 15:",function(){
        //Test Case Bilangan Genap Positif
        _numberA = 4; //number

        var result = selection.selection15isDayValid(_numberA);
        expect(result).toEqual("Bilangan Genap Positif, ");

        //Test Case Bilangan lebih besar dari 7
        _numberA = 8; //number

        var result = selection.selection15isDayValid(_numberA);
        expect(result).toEqual("Bilangan Genap Positif, Bilangan lebih besar dari 7");

        //Test Bilangan lebih kecil dari 7
        _numberA = -4; //number

        var result = selection.selection15isDayValid(_numberA);
        expect(result).toEqual("Bilangan kecil dari 7");

        //Test Case Bilangan Ganjil Positif
        _numberA = 3; //number

        var result = selection.selection15isDayValid(_numberA);
        expect(result).toEqual("Bilangan Ganjil Positif, ");

        //Test Case Bilangan lebih besar dari 7
        _numberA = 9; //number

        var result = selection.selection15isDayValid(_numberA);
        expect(result).toEqual("Bilangan Ganjil Positif, Bilangan lebih besar dari 7");

        //Test Case Bilangan lebih kecil dari 7
        _numberA = -3; //number

        var result = selection.selection15isDayValid(_numberA);
        expect(result).toEqual("Bilangan kecil dari 7");
    });
/*===================================================================================================================*/

/*===================================================================================================================*/
    it("Selection 16:", function(){
        //Test Case melihat Saldo
        _numberA = 1; //ops1
        _numberB = 1; //ops2

        var result = selection.selection16ATM(_numberA,_numberB);
        expect(result).toEqual("Melihat saldo");

        _numberA = 1; //ops1
        _numberB = 2; //ops2

        var result = selection.selection16ATM(_numberA,_numberB);
        expect(result).toEqual("Menu Saldo : Masukan Invalid");

        //Test Case menu withdraw 20
        _numberA = 2; //ops1
        _numberB = 1; //ops2

        var result = selection.selection16ATM(_numberA,_numberB);
        expect(result).toEqual("Menu Withdraw $20");

        //Test Case menu withdraw 40
        _numberA = 2; //ops1
        _numberB = 2; //ops2

        var result = selection.selection16ATM(_numberA,_numberB);
        expect(result).toEqual("Menu Withdraw $40");

        //Test Case Nominal Withdraw lainnya
        _numberA = 2; //ops1
        _numberB = 3; //ops2

        var result = selection.selection16ATM(_numberA,_numberB);
        expect(result).toEqual("Nominal Withdraw lainnya");

        //Test Case Default Menu Withdraw : Masukan Invalid
        _numberA = 2; //ops1
        _numberB = 4; //ops2

        var result = selection.selection16ATM(_numberA,_numberB);
        expect(result).toEqual("Menu Withdraw : Masukan Invalid");

        //Test Case Keluar
        _numberA = 3; //ops1
        _numberB = 0; //ops2

        var result = selection.selection16ATM(_numberA,_numberB);
        expect(result).toEqual("Keluar");
    });
/*===================================================================================================================*/
});