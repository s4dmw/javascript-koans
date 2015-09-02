var expect = require('chai').expect,
    FILL_ME_IN;

describe("About Functions", function() {

  it("should declare functions", function() {

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).to.equal(3);
    //the add function takes the 2 arguments and adds them together
  });

  it("should know internal variables override outer variables", function () {
    var message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = "Inner";
      return message;
    }

    expect(getMessage()).to.equal("Outer");
    //the getMessage function returns message which was set to "Outer" globally

    expect(overrideMessage()).to.equal("Inner");
    //the overrideMessage function assigns the message variable to be "Inner" which superscedes the global variable

    expect(message).to.equal("Outer");
    //The global (outside the function) message variable is still set to "Outer"
  });

  it("should have lexical scoping", function () {

    var variable = "top-level";

    function parentfunction() {
      var variable = "local";

      function childfunction() {
        return variable;
      }

      return childfunction();
    }

    expect(parentfunction()).to.equal(FILL_ME_IN);
  });

  it("should use lexical scoping to synthesise functions", function () {

    function makeMysteryFunction(makerValue)
    {
      var newFunction = function doMysteriousThing(param)
      {
        return makerValue + param;
      };
      return newFunction;
    }

    var mysteryFunction3 = makeMysteryFunction(3);

    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).to.equal(FILL_ME_IN);
  });

  it("should allow extra function arguments", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).to.equal(FILL_ME_IN);

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).to.equal(FILL_ME_IN);

    function returnAllArgs() {
      return [].slice.call(arguments);
    }

    expect(returnAllArgs("first", "second", "third")).to.deep.equal(FILL_ME_IN);
  });

  it("should pass functions as values", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };

    expect(praiseSinger.givePraise("John")).to.equal(FILL_ME_IN);

    praiseSinger.givePraise = appendDoubleRules;

    expect(praiseSinger.givePraise("Mary")).to.equal(FILL_ME_IN);

  });
});
