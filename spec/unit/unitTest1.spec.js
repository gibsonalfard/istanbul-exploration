var sequence = require('../../struct/sequence');

describe("UNIT TEST NO 1 : Standard Sequence ", function() {
    // Variable Global bisa dipake fungsi manapun
    var _numberA;

    beforeEach(function() {
    });

    it("Harus menampilkan x + 7", function() {
        _numberA = 6;
        var result = sequence.seq1Tambah7(_numberA);

        expect(result).toEqual(13);
    });
});