
module.exports = function makeExchange(currency) {
    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    var H = 50;
    var Q = 25;
    var D = 10;
    var N = 5;
    var P = 1;
    var coins = {};

    if (currency / H >= 1) {                //or  (currency >= H)
    coins.H = Math.floor(currency / H);
    currency = currency % H;
    }
    if (currency / Q >= 1) {
    coins.Q = Math.floor(currency / Q);
    currency = currency % Q;
    }
    if (currency / D >= 1) {
    coins.D = Math.floor(currency / D);
    currency = currency % D;
    }
    if (currency / N >= 1) {
    coins.N = Math.floor(currency / N);
    currency = currency % N;
    }
    if (currency >= P) {
    coins.P = currency;  
    }

    return coins;
}