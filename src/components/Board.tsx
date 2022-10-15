import React from 'react'
import { useAppSelector } from '../store/hooks'
import Tile from './Tile'

function Board() {

    const board = useAppSelector(({ candyCrush:{board} }) => board )
    const boardSize = useAppSelector(
        ({ candyCrush:{boardSize} }) => boardSize
    )
  return (
    <div 
        className=' rounded-lg'
        style={{
            width: `${6.25 * boardSize}rem`,
            display: 'grid',
            gridTemplateColumns : `repeat(${boardSize}, auto)`
        }}
    >
        {
            board.map((candy:string, index:number) => (
                <Tile 
                    candy={candy} 
                    key={index}
                    candyId={index}
                />
            ))
        }
    </div>
  )
}

export default Board