var loop = require('../../struct/loop');

describe("UNIT TEST NO 3 : Loop Program ", function(){
    var _varA, _varB, _varC;
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
        _varA = "jurusan teknik komputer"
        result = loop.loop4CountA(_varA);
        expect(result).toEqual(1);
    });
});