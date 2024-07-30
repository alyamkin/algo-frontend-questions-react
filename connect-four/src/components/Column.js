import { useContext } from 'react';
import { GameContext, GameDispatchContext } from '../context/GameProvider';

export default function Column({ colEntity, colIndex }) {
  const { winner, isGameOver } = useContext(GameContext);
  const dispatch = useContext(GameDispatchContext);
  return (
    <div className="column">
      {colEntity.map((rowEntity, rowIndex) => (
        <div
          key={rowIndex}
          className="tile"
          onClick={() => {
            dispatch({
              type: 'move',
              colIndex,
              rowIndex,
            });
          }}
        >
          {rowEntity && <div className={`player player-${rowEntity}`}></div>}
        </div>
      ))}
    </div>
  );
}
