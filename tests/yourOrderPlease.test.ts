import { yourOrderPlease } from "../src/yourOrderPlease";

test('Tests making copies', () => {
    let words : string = "is2 Thi1s T4est 3a";

    expect(yourOrderPlease.order(words)).toBe("Thi1s is2 3a T4est");
});