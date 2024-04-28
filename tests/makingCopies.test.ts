// describe("Tests", () => {
//     it("test", () => {
//   t = [1,2,3,4];
//   tCopy = copyList(t);
  
//   Test.assertSimilar(t, tCopy, "Copy unsuccessful");
//   t[1] += 5;
//   Test.assertNotSimilar(t, tCopy, "The array was not properly copied");
//     });
//   });
  
import { makingCopies } from "../src/makingCopies";

test('Tests making copies', () => {
    let list = ["1", 2, "3", 4];
    let copiedList = makingCopies.copyList(list);

    expect(copiedList).toEqual(list);
});


test('Tests making copies of any throw an error', () => {
    let notlist: any = "not a list"

    expect(() => makingCopies.copyList(notlist)).toThrow();
});