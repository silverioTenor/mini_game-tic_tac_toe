/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';

import Title from '../../components/Title';
import Modal from '../../components/Modal';

import { Container, Cell } from './styles';

const DashBoard: React.FC = () => {
  const emptyBoard = Array(9).fill("");

  const [board, setBoard] = useState<string[]>(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState<string>('X');
  const [winner, setWinner] = useState<string>('');
  const [wrong, setWrong] = useState<string>('');

  const handleCell = useCallback((pos) => {
    if (board[pos] !== '' || winner) return;

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

    setBoard(board.map((cell, cellPos) => cell = cellPos === pos ? currentPlayer : cell));
  }, [currentPlayer, board, winner]);

  const checkWinner = () => {
    const possiblesWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
      
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
      [board[0], board[3], board[6]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    possiblesWaysToWin.forEach(cells => {
      if (cells.every(cell => cell === 'X')) {
        setWinner('X')
      } 
      else if (cells.every(cell => cell === 'O')) {
        setWinner('O')
      }
    });

    if (board.every(cell => cell !== '' && !winner)) setWrong('D');
  }

  useEffect(checkWinner, [board]);

  const resetGame = () => {
    setCurrentPlayer(winner !== '' ? winner : currentPlayer);
    setBoard(emptyBoard);
    setWinner('');
    setWrong('');
  }

  return (
    <>
      <Title>Jogo da Velha</Title>

      <Container>
        {board.map((cell, index) => (
          <Cell 
            key={index} 
            onClick={() => handleCell(index)}
            colorPlayer={cell}
            winner={!!winner}
          >
            <span>{cell}</span>
          </Cell>
        ))}

        {winner && <Modal reset={resetGame}>{winner} ganhou!</Modal>}
        {wrong && <Modal reset={resetGame}>Deu velha!</Modal>}
      </Container>
    </>
  );
}

export default DashBoard;