import React from 'react';

import Title from '../../components/Title';

import { Container, Cell } from './styles';

const DashBoard: React.FC = () => {
  return (
    <>
      <Title>Jogo da Velha</Title>

      <Container>
        <Cell>
          <span>O</span>
        </Cell>
      </Container>
    </>
  );
}

export default DashBoard;