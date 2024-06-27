import React from 'react'

const GameCircle = ({style,id,onCircleClicked}) => {
  return (
    <div onClick={()=>onCircleClicked(id)}  className={` w-[50px] h-[50px] rounded-full  ${style} `}>
      
    </div>
  )
}

export default GameCircle
