
export class movingZeroToTheEnd {
    static moveZeros(arrayElements :any[]) : any[] {
        const zeros = arrayElements.filter(element => element === 0 );
        const nonZeros = arrayElements.filter(element => element !== 0);
        
        if (zeros.length === 0)
            throw new Error("No zero in the list");
      
        return [...nonZeros, ...zeros];
    }
}

