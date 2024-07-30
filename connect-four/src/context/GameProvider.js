import { createContext, useReducer } from 'react';

const MAX_COLS = 7;
const MAX_ROWS = 6;
const WIN_NUMBER = 4;

export const GameContext = createContext(null);
export const GameDispatchContext = createContext(null);

const initialGame = {
  board: initiateBoard(),
  currentPlayer: 1,
  winner: null,
  isGameOver: false,
};

function initiateBoard() {
  return new Array(MAX_COLS)
    .fill(null)
    .map((_) => new Array(MAX_ROWS).fill(null));
}

function hasPlayerWon(board, currentPlayer, colIndex, rowIndex) {
  function countConsecutivePieces(startCol, startRow, deltaCol, deltaRow) {
    let countInLine = 0;

    let currCol = startCol;
    let currRow = startRow;
    while (
      currCol < MAX_COLS &&
      currRow < MAX_ROWS &&
      board[currCol][currRow] === currentPlayer
    ) {
      countInLine++;
      currCol += deltaCol;
      currRow += deltaRow;
    }

    currCol = startCol - deltaCol;
    currRow = startRow - deltaRow;

    while (
      currCol >= 0 &&
      currRow >= 0 &&
      board[currCol][currRow] === currentPlayer
    ) {
      countInLine++;
      currCol -= deltaCol;
      currRow -= deltaRow;
    }

    return countInLine >= WIN_NUMBER;
  }

  function wonVertical() {
    return countConsecutivePieces(colIndex, rowIndex, 0, 1);
  }

  function wonHorizontal() {
    return countConsecutivePieces(colIndex, rowIndex, 1, 0);
  }

  function wonDiagTopLeftToBottomRight() {
    return countConsecutivePieces(colIndex, rowIndex, 1, 1);
  }

  function wonDiagLeftBottomRightTop() {
    return countConsecutivePieces(colIndex, rowIndex, 1, -1);
  }

  return (
    wonVertical() ||
    wonHorizontal() ||
    wonDiagTopLeftToBottomRight() ||
    wonDiagLeftBottomRightTop()
  );
}

function gameReducer(game, action) {
  const { board, currentPlayer, isGameOver } = game;

  switch (action.type) {
    case 'move': {
      const { colIndex } = action;
      const nextCol = [...board[colIndex]];
      const isCollFull = nextCol[0] != null;

      if (isCollFull || isGameOver) {
        return game;
      } else {
        const nextPlayer = currentPlayer === 1 ? 2 : 1;
        const nextBoard = [...board];
        const nextRowIndex = nextCol.lastIndexOf(null);
        nextCol[nextRowIndex] = currentPlayer;
        nextBoard[colIndex] = nextCol;
        const winner = hasPlayerWon(
          nextBoard,
          currentPlayer,
          colIndex,
          nextRowIndex
        )
          ? currentPlayer
          : null;
        const nextIsGameOver =
          winner || nextBoard.flat().every((tile) => tile != null);

        return {
          board: nextBoard,
          currentPlayer: nextPlayer,
          winner,
          isGameOver: nextIsGameOver,
        };
      }
    }
    case 'restart': {
      return { ...initialGame };
    }
    default: {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }
}

export default function GameProvider({ children }) {
  const [game, dispatch] = useReducer(gameReducer, initialGame);

  return (
    <GameContext.Provider value={game}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}
