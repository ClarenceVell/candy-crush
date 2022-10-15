import React from 'react'

function Tile({candy, candyId} : {candy:string, candyId:number}) {
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
                 />
            )
        }
    </div>
  )
}

export default Tile