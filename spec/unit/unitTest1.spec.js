var sequence = require('../../struct/sequence');

describe("UNIT TEST NO 1 : Standard Sequence ", function() {
    // Variable Global bisa dipake fungsi manapun
    var _numberA, _numberB;

    beforeEach(function() {
    });

    it("Harus menampilkan 6 + 7 = 13", function() {
        _numberA = 6;
        var result = sequence.seq1Tambah7(_numberA);

        expect(result).toEqual(13);
    });

    it("Harus menampilkan (2*16) + 9 + 7 = 48", function(){
        _numberA = 4;
        _numberB = 3;
        var result = sequence.seq2SPL(_numberA, _numberB);

        expect(result).toEqual(48);
    });

    it("Menampilkan nilai 2 > 5 = False", function(){
        _numberA = 2;
        _numberB = 5;
        var result = sequence.seq3Relational(_numberA, _numberB);

        expect(result).toBeFalse();
    });

    it("Menampilkan nilai !(3 < 5 && 4 > 2) = False", function(){
        _numberA = 3;
        _numberB = 4;
        var result = sequence.seq4Boolean(_numberA, _numberB);

        expect(result).toBeFalse();
    });
});