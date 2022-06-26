import React, { useMemo, useState } from 'react';
import { Board, Container } from '../components';
import { calculateCloseCells } from '../gameLogic/piece';
import { createArray } from '../helpers';
import { BoardType, PieceColor, PositionArray } from '../types';

export default function MainPage() {
  const INITIAL_BOARD: BoardType = useMemo(
    () =>
      createArray(8).map((_, i) =>
        createArray(8).map((_, j) => {
          if (!piecesAllowed(i, j))
            return { piecesAllowed: false, piece: null };
          if ([0, 1, 2].includes(i))
            return {
              piecesAllowed: true,
              piece: {
                color: 'red',
                position: [i, j],
              },
            };
          if ([5, 6, 7].includes(i))
            return {
              piecesAllowed: true,
              piece: {
                color: 'black',
                position: [i, j],
              },
            };
          return { piecesAllowed: true, piece: null };
        })
      ),
    []
  );
  const [board, setBoard] = useState(INITIAL_BOARD);
  function handleClickOnPiece(
    color: PieceColor,
    position: PositionArray,
    isKing: boolean
  ) {
    const closeCells = calculateCloseCells(color, position, isKing);
  }
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
