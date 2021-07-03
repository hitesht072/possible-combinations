var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var alphabetMapping = {};
for (var i = 0; i < alphabet.length; i++) {
    alphabetMapping[i + 1] = alphabet[i];
}

var resultsCombination = [];

function combination(encodeMsg) {
    if (encodeMsg.length == 1) {
        return 1;
    } else {
        var res = [];
        res[0] = 1;

        for (var n = 1; n < encodeMsg.length; n++) {
            findCombination(encodeMsg, "");
            var condition = (parseInt(encodeMsg.slice(-2)) <= 26) ? 1 : 0;
            res[n] = res[n - 1] + condition;
        }
        return res[encodeMsg.length - 1];
    }
}

function findCombination(s, current) {
    if (s.length == 0) {
        resultsCombination.push(current);
        return;
    }

    Object.entries(alphabetMapping).forEach(([key, val]) => {
        if (s.startsWith(key)) {
            findCombination(s.substring(key.length), current + val, resultsCombination);
        }
    });
}


console.log('Total Combinations: ' + combination('12'));
console.log('Combinations is/are: ');
console.log(resultsCombination);
