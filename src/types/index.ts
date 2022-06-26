export type PieceColor = 'red' | 'black';
export type PositionArray = [number, number];

export type BoardType = {
  piecesAllowed: boolean;
  piece: {
    color: PieceColor;
    position: PositionArray;
    isKing?: boolean;
  } | null;
  onClick?: () => unknown;
  isMovable?: boolean;
}[][];
