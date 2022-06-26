import { PieceColor, PositionArray } from '../types';

export function calculateCloseCells(
  color: PieceColor,
  position: PositionArray,
  isKing: boolean
) {
  const [i, j] = position;
  if (!isKing) {
    if (color === 'black') {
      return [
        [i - 1, j - 1] as PositionArray,
        [i - 1, j + 1] as PositionArray,
      ].filter(isValidCell);
    }
    if (color === 'red') {
      return [
        [i + 1, j - 1] as PositionArray,
        [i + 1, j + 1] as PositionArray,
      ].filter(isValidCell);
    }
  }
  return [
    [i - 1, j - 1] as PositionArray,
    [i - 1, j + 1] as PositionArray,
    [i + 1, j + 1] as PositionArray,
    [i + 1, j + 1] as PositionArray,
  ].filter(isValidCell);
}

export function calculateCaptureCell(
  color: PieceColor,
  piecePosition: PositionArray,
  enemyPosition: PositionArray
) {
  const [_pieceI, pieceJ] = piecePosition;
  const [enemyI, enemyJ] = enemyPosition;
  if (color === 'black') {
    if (enemyJ - pieceJ > 0) {
      const cell = [enemyI - 1, enemyJ + 1] as PositionArray;
      return isValidCell(cell) ? cell : null;
    }
    if (enemyJ - pieceJ < 0) {
      const cell = [enemyI - 1, enemyJ - 1] as PositionArray;
      return isValidCell(cell) ? cell : null;
    }
    return null;
  }
  if (enemyJ - pieceJ > 0) {
    const cell = [enemyI + 1, enemyJ + 1] as PositionArray;
    return isValidCell(cell) ? cell : null;
  }
  if (enemyJ - pieceJ < 0) {
    const cell = [enemyI + 1, enemyJ - 1] as PositionArray;
    return isValidCell(cell) ? cell : null;
  }
  return null;
}

function isValidCell(cell: PositionArray) {
  return isInValidRange(cell[0]) && isInValidRange(cell[1]);
}
function isInValidRange(coordinate: number) {
  return coordinate >= 0 && coordinate <= 7;
}
