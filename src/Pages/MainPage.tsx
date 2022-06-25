import React, { useState } from 'react';
import { Board, Container } from '../components';
import { createArray } from '../helpers';
import { BoardType } from '../types';
const INITIAL_BOARD: BoardType = createArray(8).map((_, i) =>
  createArray(8).map((_, j) => {
    if (!piecesAllowed(i, j))
      return { piecesAllowed: false, piece: null, clickable: false };
    if ([0, 1, 2].includes(i))
      return {
        piecesAllowed: true,
        piece: {
          color: 'red',
          position: [i, j],
        },
        clickable: false,
      };
    if ([5, 6, 7].includes(i))
      return {
        piecesAllowed: true,
        piece: {
          color: 'black',
          position: [i, j],
        },
        clickable: false,
      };
    return { piecesAllowed: true, piece: null, clickable: false };
  })
);

export default function MainPage() {
  const [board, setBoard] = useState(INITIAL_BOARD);
  return (
    <Container>
      <Board board={board} />
    </Container>
  );
}
function piecesAllowed(i: number, j: number) {
  return (isEven(i) && !isEven(j)) || (!isEven(i) && isEven(j));
}
function isEven(x: number) {
  return x % 2 === 0;
}
