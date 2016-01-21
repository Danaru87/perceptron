function Perceptron(threshold, outputCount) {
    function isActive(input) {
        return input >= threshold;
    }

    function processOutput(input, weight) {
        return isActive(input) ? input * weight : 0;
    }

    function process(inputs, weights) {
        var result = [];
        for(var i = 0; i < outputCount; i++) result[i] = 0;

        for (var j = 0; j < outputCount; j++)
        {
            for(var i = 0; i < inputs.length; i++) {
                var input =  inputs[i];
                var weight =  weights[i][j];
                result[j] += processOutput(input, weight);
            }
        }
        return result;
    }

    return {
        isActive: isActive,
        process: process
    };
}

module.exports = Perceptron;