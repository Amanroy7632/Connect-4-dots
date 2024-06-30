import React from 'react'

const GameCircle = ({style,id,onCircleClicked}) => {
  return (
    <div onClick={()=>onCircleClicked(id)}  className={` w-[60px] h-[60px] rounded-full  ${style} `}>
      
    </div>
  )
}

export default GameCircle
