import GameProvider from '../context/GameProvider';
import GameBoard from './GameBoard';

export default function ConnectFour() {
  return (
    <GameProvider>
      <GameBoard />
    </GameProvider>
  );
}
