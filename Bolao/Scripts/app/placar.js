define(function () {
    var placar = function (data) {
        if (data.length === 0) {
            return;
        }

        this.v1 = data[0];
        this.v2 = data[1];

        if (this.v1 === this.v2) {
            this.vencedor = 0;
        } else if (this.v1 > this.v2) {
            this.vencedor = 1;
        } else {
            this.vencedor = 2;
        }
    };

    placar.prototype.acertou = function (data) {
        var p = new placar(data);
        return this.v1 !== undefined && this.v1 === p.v1 && this.v2 === p.v2;
    };

    placar.prototype.acertouVencedor = function (data) {
        var p = new placar(data);
        return this.vencedor !== undefined && this.vencedor === p.vencedor;
    };

    return placar;
});