const all = require("./main");

test("Addition test" , () =>  {
    expect(all.sum(2,2)).toBe(4);
})

test("Subtraction test" , () =>  {
    expect(all.diff(2,2)).toBe(0);
})

test("Multiplication test" , () =>  {
    expect(all.product(2,2)).toBe(4);
})