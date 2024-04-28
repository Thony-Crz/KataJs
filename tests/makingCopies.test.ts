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

test('Tests making copies of array number', () => {
    let list: number[] = [1,2,3,4];
    let listCopy: number[] = makingCopies.copyList(list);

    expect(listCopy).toBe(list);
  });


test('Tests making copies of array string make an error', () => {
    let list: string[] = ["1","2","3","4"];
    let listCopy: string[] = makingCopies.copyList(list);

    expect(listCopy).toBe(list);
});

test('Tests making copies of array of any throw an error', () => {
    let list: any[] = [1,0,"b","c",-"c","'","test"];
    let listCopy: any[] = makingCopies.copyList(list);

    expect(listCopy).toThrow();
});