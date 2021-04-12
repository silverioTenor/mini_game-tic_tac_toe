import React from 'react';

import { Container, ContainerMessage } from './styles';

interface IModalProps {
  reset: Function;
}

const Modal: React.FC<IModalProps> = ({reset, children}) => (
  <Container>
    <ContainerMessage>
      <span>{children}</span>

      <button onClick={() => reset()}>Recomeçar jogo</button>
    </ContainerMessage>
  </Container>
);

export default Modal;