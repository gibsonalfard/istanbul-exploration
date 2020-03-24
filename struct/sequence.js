function sequence() {
    // Author : Ilham Gibran Achmad Mudzakir - 23 Maret 2020
    this.seq1Tambah7 = function (x) {
        return x+7;
    }

    this.seq2SPL = function (x, y) {
        var result = (2*Math.pow(x,2));
        result += (3*y);
        result += 7;

        return result;
    }

    this.seq3Relational = function (x, y){
        return x > y;
    }

    this.seq4Boolean = function (x, y){
        return !(x < 5 && y > 2);
    }
}

module.exports = new sequence();