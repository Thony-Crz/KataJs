import { movingZeroToTheEnd } from "../src/movingZeroToTheEnd";

test('should throw error if there is no zero in the array',()=>{
    const arrayWithoutZero = [1, 2, 3];
    expect(() => movingZeroToTheEnd.moveZeros(arrayWithoutZero)).toThrow(Error("No zero in the list"));
});

test('should not throw an error if there is a zero in the array ',()=>{
    const arrayWithoutZero = [0,1, 2, 3];
    expect(() => movingZeroToTheEnd.moveZeros(arrayWithoutZero)).not.toThrow();
});

test('Move 1 zero to the end', () => {
    expect(movingZeroToTheEnd.moveZeros([0,1])).toEqual([1,0]);
});

test('Move zeros between other numbers',()=>{
    expect(movingZeroToTheEnd.moveZeros([0,1,0,1,0,1,0])).toEqual([1,1,1,0,0,0,0]);
});

test('Solve kata',()=>{
    expect(movingZeroToTheEnd.moveZeros([1,2,0,1,0,1,0,3,0,1])).toEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
});

test('Move Zero in any[]',()=>{
    const array = [false,1,0,1,2,0,1,3,"a"];

    expect(movingZeroToTheEnd.moveZeros(array)).toEqual([false,1,1,2,1,3,"a",0,0]);
})

test('Move +Zero...',()=>{
    const array = [ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ];
    const expectArray = [ 9, 9, 1, 2, 1, 1, 3, 1, 9, 9, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0 ];

    expect(movingZeroToTheEnd.moveZeros(array)).toEqual(expectArray);
})

test('Move -Zero...',()=>{
    const array = [ 9, -0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ];
    const expectArray = [ 9, 9, 1, 2, 1, 1, 3, 1, 9, 9, -0, +0, +0, +0, +0, +0, +0, +0, +0, +0 ];

    expect(movingZeroToTheEnd.moveZeros(array)).toEqual(expectArray);
})

test('Move -Zero zero and +zero...',()=>{
    const array = [ 9, -0, 9, 1, 2, 1, 1, 3, 1, 9, 0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ];
    const expectArray = [ 9, 9, 1, 2, 1, 1, 3, 1, 9, 9, -0, 0, +0, +0, +0, +0, +0, +0, +0, +0 ];

    expect(movingZeroToTheEnd.moveZeros(array)).toEqual(expectArray);
})