var selection= require('../../struct/selection');

describe("UNIT TEST NO 2 : Selection ", function() {
    // Variable Global bisa dipake fungsi manapun
    var _numberA;
    var _numberB;

    beforeEach(function() {
    });

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

    it("Selection 3 : Case 1 25+9 = 34", function() {
        // Test Case Masuk If
        _numberA = 25;
        _numberB = 9;
        var result = selection.select3Switch(_numberA, _numberB, 1);

        expect(result).toEqual(34);
    });
});