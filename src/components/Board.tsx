import React, { useState } from 'react';
import { createArray } from '../helpers';
import Cell from './Cell';
import Piece from './Piece';
const INITIAL_BOARD = createArray(8).map((_, i) =>
  createArray(8).map((_, j) => {
    if (!piecesAllowed(i, j)) return { piecesAllowed: false, piece: null };
    if ([0, 1, 2].includes(i))
      return { piecesAllowed: true, piece: <Piece color="red" /> };
    if ([5, 6, 7].includes(i))
      return { piecesAllowed: true, piece: <Piece color="black" /> };
    return { piecesAllowed: true, piece: null };
  })
);
export default function Board() {
  const [board, setBoard] = useState(INITIAL_BOARD);
  return (
    <table>
      <tbody>
        {board &&
          board.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) =>
                !cell.piecesAllowed ? (
                  <Cell noPieceAllowed key={`${i}-${j}`} />
                ) : cell.piece ? (
                  <Cell key={`${i}-${j}`}>{cell.piece}</Cell>
                ) : (
                  <Cell key={`${i}-${j}`} />
                )
              )}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
function piecesAllowed(i: number, j: number) {
  return (i % 2 === 0 && j % 2 !== 0) || (i % 2 !== 0 && j % 2 === 0);
}
