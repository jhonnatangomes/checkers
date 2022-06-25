import React from 'react';
import styled from 'styled-components';
import { PieceType } from './Piece';
type StyledProps = {
  noPieceAllowed?: boolean;
  piece?: PieceType;
};
type Props = {
  noPieceAllowed?: boolean;
  children?: PieceType;
  onClick?: () => unknown;
};
export default function Cell({ noPieceAllowed, children, onClick }: Props) {
  return (
    <Td noPieceAllowed={noPieceAllowed} piece={children} onClick={onClick}>
      {children}
    </Td>
  );
}
const Td = styled.td<StyledProps>`
  background-color: ${({ noPieceAllowed }) =>
    noPieceAllowed ? '#F0D2B4' : '#BA7A3A'};
  width: 65px;
  height: 65px;
  cursor: ${({ piece }) => (piece ? 'pointer' : 'initial')};
`;
