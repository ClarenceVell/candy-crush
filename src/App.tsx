import React, {useEffect} from 'react';
import Board from './components/Board';
import { dragEnd, moveBelow, updateBoard } from './store';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { createBoard } from './utils/createBoard';
import { formulasForColumnOfFour, formulasForColumnOfThree, generateInvalidMoves } from './utils/formulas';
import { checkForRowOfFour, checkForRowOfThree, isColumnOfFour, isColumnOfThree } from './utils/moveCheckLogic';

function App() {
  const dispatch = useAppDispatch()
  
  const board = useAppSelector(({ candyCrush:{board} }) => board )
  const boardSize = useAppSelector(
    ({ candyCrush:{boardSize} }) => boardSize
  )

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)))
    // console.log(createBoard(boardSize))
  }, [boardSize, dispatch])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board]
      isColumnOfFour(newBoard, boardSize, formulasForColumnOfFour(boardSize));
      checkForRowOfFour(newBoard, boardSize, generateInvalidMoves(boardSize, true))

      isColumnOfThree(newBoard, boardSize, formulasForColumnOfThree(boardSize));
      checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize))

      dispatch(updateBoard(newBoard))
      // dispatch(dragEnd());
      dispatch(moveBelow());
    }, 150)

    return () => clearInterval(timeout)
  }, [board, boardSize, dispatch])
  

  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  );
}

export default App;
