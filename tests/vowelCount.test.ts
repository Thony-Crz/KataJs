import { vowelCount } from "../src/vowelCount";

test('Count vowels except y', () => {
    expect(vowelCount.getCount("abracadabra")).toBe(5);
  });