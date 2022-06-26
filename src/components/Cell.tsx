import React from 'react';
import styled from 'styled-components';
import { PieceColor, PositionArray } from '../types';
import Piece from './Piece';
type BaseProps = {
  noPieceAllowed?: boolean;
  piece?: {
    position: PositionArray;
    color: PieceColor;
    isKing?: boolean;
  };
  isMovable?: boolean;
};
type Props = BaseProps & {
  onClick?: () => unknown;
};
export default function Cell({ noPieceAllowed, piece, onClick }: Props) {
  return (
    <Td noPieceAllowed={noPieceAllowed} piece={piece} onClick={onClick}>
      {piece && <Piece color={piece.color} isKing={piece.isKing} />}
    </Td>
  );
}
const Td = styled.td<BaseProps>`
  background-color: ${({ noPieceAllowed }) =>
    noPieceAllowed ? '#F0D2B4' : '#BA7A3A'};
  width: 65px;
  height: 65px;
  opacity: ${({ isMovable }) => (isMovable ? 0.7 : 1)};
  cursor: ${({ piece }) => (piece ? 'pointer' : 'initial')};
`;
