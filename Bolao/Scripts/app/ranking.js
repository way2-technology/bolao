define(['underscore', 'app/aposta', 'app/placar'], function (_, Aposta, Placar) {
    var ranking = function (apostas, results) {
        _.each(apostas, function (a) {
            a.totalize(results);
        });
        var sorted = _(apostas).chain().sortBy(function (a) {
            return a.nome;
        }).reverse().sortBy(function (a) {
            return a.total;
        }).value().reverse();

        this.values = _.map(sorted, function (a) {
            return [a.nome, a.total];
        });
    };

    return ranking;
});