import React from 'react';
import styled from 'styled-components';

type Props = {
  color: 'black' | 'red';
  isKing?: boolean;
};
export type PieceType = ReturnType<typeof Piece>;

export default function Piece({ color, isKing }: Props) {
  return <PieceStyled color={color} isKing={isKing} />;
}

const PieceStyled = styled.div<Props>`
  width: 35px;
  height: 35px;
  padding: 12px;
  background-color: ${({ color, isKing }) => {
    if (isKing) {
      if (color === 'black') return 'purple';
      return 'orange';
    }
    return color;
  }};
  border-radius: 50%;
  margin: auto;
`;
