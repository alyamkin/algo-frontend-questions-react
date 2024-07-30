import { useContext } from 'react';
import Column from './Column';
import { GameContext, GameDispatchContext } from '../context/GameProvider';

export default function GameBoard() {
  const { board, winner, isGameOver } = useContext(GameContext);
  const dispatch = useContext(GameDispatchContext);
  return (
    <>
      {winner && <h1>Player {winner} Wins</h1>}
      <div className="board">
        {board.map((colEntity, colIndex) => (
          <Column key={colIndex} colEntity={colEntity} colIndex={colIndex} />
        ))}
      </div>
      {isGameOver && (
        <button
          onClick={() =>
            dispatch({
              type: 'restart',
            })
          }
        >
          Restart
        </button>
      )}
    </>
  );
}
