export const isColumnOfFour = (
    newBoard: string[],
    boardSize: number,
    formulasForColumnOfFour: number
) => {
    for(let i:number = 0; i <= formulasForColumnOfFour; i++){
        const columnOfFour:number[] = [
            i,
            i + boardSize,
            i + boardSize * 2,
            i + boardSize * 3
        ];
        const decidedColor: string = newBoard[i];

        const isBlank: boolean = newBoard[i] === "";

        if (
        columnOfFour.every(
            (candy: number) => newBoard[candy] === decidedColor && !isBlank
        )
        ) {
            columnOfFour.forEach((candy: number) => (newBoard[candy] = ""));
            return true;
        }
    }
}

export const checkForRowOfFour = (
    newBoard: String[],
    boardSize: number,
    invalidMovesForColumnOfFour: number[]
) => {
    for (let i = 0; i < boardSize * boardSize; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3];
      const decidedColor = newBoard[i];
  
      const isBlank = newBoard[i] === "";
  
      if (invalidMovesForColumnOfFour.includes(i)) continue;
      if (
        rowOfFour.every((candy) => newBoard[candy] === decidedColor && !isBlank)
      ) {
        rowOfFour.forEach((candy) => (newBoard[candy] = ""));
        return true;
      }
    }
};