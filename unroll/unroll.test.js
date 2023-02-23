const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("even rolls correctly", function() {
    const result = unroll([
      ["a", "b", "c", "y"],
      ["d", "e", "f", "x"],
      ["g", "h", "i", "j"],
      ["k", "l", "m", "n"]
    ])

    expect(result).toEqual(["a", "b", "c", "y", "x","j","n","m","l","k","g","d","e","f", "i", "h"])
  })

  it("odd rolls correctly", function() {
    const result = unroll([
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ])

    expect(result).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"])
  })

  it("single entry works", function() {
    const result = unroll([
      ["a"]
    ])

    expect(result).toEqual(["a"])
  })


});
