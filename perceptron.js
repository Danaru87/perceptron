function Perceptron(treshold) {

    function IsOverTreshold(input) {
        return input >= treshold;
    }

    function Process(input, weight) {
        if (IsOverTreshold(input))
        {
            if(IsOverTreshold(input * weight))
            {
                return 1;
            }
        }
        return 0;
    }

    return {
        Process:Process
    };
}

module.exports = Perceptron;