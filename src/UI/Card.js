import React from 'react'

function Card({children}) {
  return (
        <div className='bg-Whitee rounded-lg shadow-lg p-5 m-5'>
            {children}
        </div>
    )
}

export default Card