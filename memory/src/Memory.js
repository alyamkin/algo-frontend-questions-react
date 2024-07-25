import { useState, useEffect } from 'react';

const TILE_COLORS = ['red', 'green', 'blue', 'yellow'];
const initialBoard = [0, 0, 1, 1, 2, 2, 3, 3];

export default function Memory() {
  const [board, setBoard] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);

  const endGame = matched.length === board.length;

  useState(() => {
    setBoard(shuffle(initialBoard));
  }, []);

  useEffect(() => {
    if (selected.length === 2) {
      const [id1, id2] = selected;

      if (board[id1] === board[id2]) {
        setMatched([...matched, id1, id2]);
        setSelected([]);
      } else {
        setTimeout(() => setSelected([]), 1000);
      }
    }
  }, [selected]);

  function handleSelectTile(id) {
    if (selected.length === 2 || isTileSelectedMatched(id) || endGame) return;
    setSelected([...selected, id]);
  }

  function handleReset() {
    setMatched([]);
    setBoard(shuffle(initialBoard));
  }

  function isTileSelectedMatched(id) {
    return selected.includes(id) || matched.includes(id);
  }

  if (board == null) return null;

  return (
    <>
      <h1>{endGame ? 'You Win!' : 'Memory'}</h1>
      <div className="board">
        {board.map((tile, index) => {
          let tileClass = 'tile';

          if (isTileSelectedMatched(index)) {
            tileClass += ' ' + TILE_COLORS[tile];
          }
          return (
            <div
              key={index}
              className={tileClass}
              onClick={() => handleSelectTile(index)}
            />
          );
        })}
      </div>
      {endGame && <button onClick={handleReset}>Restart</button>}
    </>
  );
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
