import React, { useState } from "react";
import GameCircle from "./GameCircle";
import isWinner from "../helper.js"
const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(0));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [isWin,setWinner]=useState({
    playerId:null,
    isWin:false
  })
  const onCircleClicked = (id) => {
    console.log(`Circle clicked ${id}`);
    if (isWinner(gameBoard,id,currentPlayer)) {
        console.log(`Winner Player - ${currentPlayer}`);
        setWinner({playerId:currentPlayer,isWin:true})
    }
    
     if (gameBoard[id] === 0 && !isWin.isWin) {
            const board = [...gameBoard];
            board[id] = currentPlayer;
            setGameBoard(board);
            setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    }
    
    
    // console.log(gameBoard);
    // console.log(currentPlayer);
  };
  const renderCircle = (id) => {
    return (
      <GameCircle
        style={
          gameBoard[id] === 0
            ? "bg-gray-200 cursor-pointer"
            : gameBoard[id] === 1
            ? "bg-red-600"
            : "bg-blue-600"
        }
        key={id}
        onCircleClicked={onCircleClicked}
        id={id}
      />
    );
  };
  const handleRestartGame = () => {
    console.log(`Restart the game`);
    setGameBoard(Array(16).fill(0));
    setCurrentPlayer(PLAYER_1);
    setWinner({playerId:null,isWin:false})
  };
  return (
    
        <div className=" w-full flex justify-center flex-col items-center h-screen bg-gray-800 p-4">
      <div className="p-2 relative">
        <h1 className=" text-3xl text-white">
          Connect - <span className=" text-yellow-400">4</span> Dots
        </h1>
        <div className=" shadow-md shadow-yellow-100 flex justify-center items-center border-[5px] border-yellow-600 py-1 rounded-sm bg-yellow-50">
          <h2 className={` text-2xl font-semibold`}>
            Player-{" "}
            {isWin.isWin?isWin.playerId:<span
              className={`${
                currentPlayer === PLAYER_1 ? " text-red-400" : " text-blue-400"
              }`}
            >
              {currentPlayer}
            </span>}
            {isWin.isWin?" Wins":" Turn"}
          </h2>
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-4 shadow-sm  p-5 rounded-xl shadow-gray-400 bg-black">
        {gameBoard.map((item, index) => {
          return renderCircle(index);
        })}
      </div>
      <div className=" p-4 mt-2 px-6 border-[4px] rounded-sm border-yellow-700 shadow-lg bg-yellow-50">
        <button
          onClick={handleRestartGame}
          className={` border-[3px] border-yellow-700 px-2 py-1 bg-blue-300 rounded-sm hover:bg-blue-500 duration-300 text-xl shadow-md shadow-gray-600`}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
