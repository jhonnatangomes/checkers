export type BoardType = {
  piecesAllowed: boolean;
  piece: { color: 'red' | 'black'; position: [number, number] } | null;
  clickable: boolean;
}[][];
