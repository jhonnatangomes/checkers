import React from 'react';
import { BoardType } from '../types';
import Cell from './Cell';
type Props = {
  board: BoardType;
};
export default function Board({ board }: Props) {
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
                  <Cell
                    key={`${i}-${j}`}
                    piece={{
                      position: cell.piece.position,
                      isKing: cell.piece.isKing,
                      color: cell.piece.color,
                    }}
                  ></Cell>
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
