import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, .5);
  transition: background 0.3s;
`;

export const ContainerMessage = styled.div`
  width: 30%;
  height: 150px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: #e3e3e3;
  border-radius: 8px;

  span {
    color: #000;
    font-size: 26px;
    font-weight: 600;
  }

  button {
    padding: 8px 16px;
    font-weight: 600;

    background: #119923;
    color: #e3e3e3;
    border: none;
    border-radius: 4px;

    transition: background 0.1s;
  }

  button:hover {
    background: #0d751b;
  }
`;