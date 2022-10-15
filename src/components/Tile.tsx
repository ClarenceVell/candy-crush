import React from 'react'
import { dragDrop, dragEnd, dragStart } from '../store';
import { useAppDispatch } from '../store/hooks';

function Tile({candy, candyId} : {candy:string, candyId:number}) {
    const dispatch = useAppDispatch();
  return (
    <div 
        className=' flex justify-center items-center m-0.5 rounded-lg select-none'
        style={{
            boxShadow:'inset 5px 5px 15px #062525, inset -5px -5px 15px #aaaab7bb'
        }}
    >
        {
            candy && (
                <img 
                    src={candy} 
                    alt="candy"
                    candy-id={candyId}
                    className='p-2'
                    draggable={true}
                    onDragStart={(e) => dispatch(dragStart(e.target))}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={(e) => e.preventDefault()}
                    onDragLeave={(e) => e.preventDefault()}
                    onDrop={(e) => dispatch(dragDrop(e.target))}
                    onDragEnd={() => dispatch(dragEnd())}
                 />
            )
        }
    </div>
  )
}

export default Tile