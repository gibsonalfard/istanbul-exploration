var loop = require('../../struct/loop');

describe("UNIT TEST NO 3 : Loop Program ", function(){
    var _varA;
    var result;

    beforeEach(function() {
    });

    it("Loop 1 : Hitung deret dengan For 1-4 beda 1", function() {
        result = loop.loop1DeretFor(1,4,1);
        expect(result).toEqual(10);
    });

    it("Loop 2 : Hitung deret dengan While 1-4 beda 1", function() {
        result = loop.loop2DeretWhile(1,4,1);
        expect(result).toEqual(10);
    });

    it("Loop 3 : Hitung deret dengan Do While 1-4 beda 1", function() {
        result = loop.loop3DeretDoWhile(1,4,1);
        expect(result).toEqual(10);
    });

    it("Loop 4 : Menghitung jumlah huruf a pada suatu kalimat", function() {
        _varA = "jurusan teknik komputer dan informatika"
        result = loop.loop4CountA(_varA);
        expect(result).toEqual(4);

        _varA = ""
        result = loop.loop4CountA(_varA);
        expect(result).toEqual(0);
    });

    it("Loop 5 : Menghitung jumlah huruf s pada suatu kalimat", function() {
        _varA = "software engineering"
        result = loop.loop5CountS(_varA);
        expect(result).toEqual(1);

        _varA = ""
        result = loop.loop5CountS(_varA);
        expect(result).toEqual(0);
    });

    it("Loop 6 : Menghitung jumlah huruf h pada suatu kalimat", function() {
        _varA = "himpunan mahasiswa komputer"
        result = loop.loop6CountH(_varA);
        expect(result).toEqual(2);

        _varA = ""
        result = loop.loop6CountH(_varA);
        expect(result).toEqual(0);
    });

    it("Loop 7 : Stack kurung tutup dan buka For", function() {
        _varA = "(()()()))"
        result = loop.loop7CountKurung(_varA);
        expect(result).toEqual(-1);

        _varA = ""
        result = loop.loop7CountKurung(_varA);
        expect(result).toEqual(0);
    });

    it("Loop 8 : Stack kurung tutup dan buka While", function() {
        _varA = "((((((()"
        result = loop.loop8CountKurung2(_varA);
        expect(result).toEqual(6);

        _varA = ""
        result = loop.loop8CountKurung2(_varA);
        expect(result).toEqual(0);
    });

    it("Loop 9 : Stack kurung tutup dan buka Do While", function() {
        _varA = "()()()"
        result = loop.loop9CountKurung3(_varA);
        expect(result).toEqual(0);

        _varA = ""
        result = loop.loop9CountKurung3(_varA);
        expect(result).toEqual(-1);
    });

    it("Loop 10 : Menghitung jumlah lubang pada huruf kapital For", function() {
        _varA = "PELANGI, PELANGI"
        result = loop.loop10CountHole(_varA);
        expect(result).toEqual(4);

        _varA = "B"
        result = loop.loop10CountHole(_varA);
        expect(result).toEqual(2);
    });

    it("Loop 11 : Menghitung jumlah lubang pada huruf kapital While", function() {
        _varA = "ALANGKAH INDAHMU"
        result = loop.loop11CountHole(_varA);
        expect(result).toEqual(5);

        _varA = "B"
        result = loop.loop11CountHole(_varA);
        expect(result).toEqual(2);
    });

    it("Loop 12 : Menghitung jumlah lubang pada huruf kapital Do While", function() {
        _varA = "MERAH KUNING HIJAU, DI LANGIT YANG BIRU"
        result = loop.loop12CountHole(_varA);
        expect(result).toEqual(9);

        _varA = ""
        result = loop.loop12CountHole(_varA);
        expect(result).toEqual(0);
    });

    it("Loop 13 : Nested Loop For-For", function() {
        result = loop.loop13ForFor(2,3);
        expect(result).toEqual("(+++)(+++)");

        result = loop.loop13ForFor(0,1);
        expect(result).toMatch("");
    });

    it("Loop 14 : Nested Loop While-For", function() {
        result = loop.loop14WhileFor(3,2);
        expect(result).toEqual("(++)(++)(++)");

        result = loop.loop14WhileFor(1,0);
        expect(result).toEqual("()");
    });

    it("Loop 15 : Nested Loop Do While-For", function() {
        result = loop.loop15DoWhileFor(2,5);
        expect(result).toEqual("(+++++)(+++++)");

        result = loop.loop15DoWhileFor(0,0);
        expect(result).toEqual("()");
    });

    it("Loop 16 : Nested Loop For-While", function() {
        result = loop.loop16ForWhile(3,4);
        expect(result).toEqual("(++++)(++++)(++++)");

        result = loop.loop16ForWhile(0,0);
        expect(result).toEqual("");
    });

    it("Loop 17 : Nested Loop While-While", function() {
        result = loop.loop17WhileWhile(1,2);
        expect(result).toEqual("(++)");

        result = loop.loop17WhileWhile(0,2);
        expect(result).toEqual("");
    });

    it("Loop 18 : Nested Loop Do While-While", function() {
        result = loop.loop18DoWhileWhile(5,3);
        expect(result).toEqual("(+++)(+++)(+++)(+++)(+++)");

        result = loop.loop18DoWhileWhile(0,2);
        expect(result).toEqual("(++)");
    });

    it("Loop 19 : Nested Loop For-Do While", function() {
        result = loop.loop19ForDoWhile(1,3);
        expect(result).toEqual("(+++)");

        result = loop.loop19ForDoWhile(-1,-2);
        expect(result).toEqual("");
    });

    it("Loop 20 : Nested Loop While-Do While", function() {
        result = loop.loop20WhileDoWhile(3,5);
        expect(result).toEqual("(+++++)(+++++)(+++++)");

        result = loop.loop19ForDoWhile(1,-2);
        expect(result).toEqual("(+)");
    });

    it("Loop 21 : Nested Loop Do While-Do While", function() {
        result = loop.loop21DoWhileDoWhile(4,1);
        expect(result).toEqual("(+)(+)(+)(+)");

        result = loop.loop21DoWhileDoWhile(0,-2);
        expect(result).toEqual("(+)");
    });
    
});