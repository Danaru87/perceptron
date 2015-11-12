var Perceptron = require("./perceptron.js")
describe("Perceptron", function() {

    var perceptron;

    beforeEach(function(){
        perceptron = new Perceptron(0.4);
    });

    function ExpectOutput(input, weight, output)
    {
        var result = perceptron.Process(input, weight);
        expect(result).toEqual(output);
    }

    it("should output 0 if input 0", function()
    {
        ExpectOutput(0,0,0);
    })

    it("should output 1 if input 1 and weight is 1", function()
    {
        ExpectOutput(1,1,1);
    })

    it("should output 1 if input 0.6 and weight is 0.6", function()
    {
        ExpectOutput(0.6,0.6, 0);
    })


});