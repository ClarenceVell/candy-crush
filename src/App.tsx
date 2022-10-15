import React, {useEffect} from 'react';
import Board from './components/Board';
import { updateBoard } from './store';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { createBoard } from './utils/createBoard';
import { formulasForColumnOfFour } from './utils/formulas';
import { isColumnOfFour } from './utils/moveCheckLogic';

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
      dispatch(updateBoard(newBoard))
    }, 150)

    return () => clearInterval(timeout)
  })
  

  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  );
}

export default App;
