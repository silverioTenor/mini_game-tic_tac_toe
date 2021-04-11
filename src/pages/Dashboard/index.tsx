import React, { useCallback, useState } from 'react';

import Title from '../../components/Title';

import { Container, Cell } from './styles';

const DashBoard: React.FC = () => {
  const emptyBoard = Array(9).fill("");

  const [board, setBoard] = useState<string[]>(emptyBoard);

  const [currentPlayer, setCurrentPlayer] = useState<string>('X');

  const handleCell = useCallback((pos) => {
    if (board[pos] !== '') return;

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

    setBoard(board.map((cell, cellPos) => cell = cellPos === pos ? currentPlayer : cell));
  }, [currentPlayer, board]);

  return (
    <>
      <Title>Jogo da Velha</Title>

      <Container>
        {board.map((cell, index) => (
          <Cell 
            key={index} 
            onClick={() => handleCell(index)}
            colorPlayer={cell}
          >
            <span>{cell}</span>
          </Cell>
        ))}
      </Container>
    </>
  );
}

export default DashBoard;