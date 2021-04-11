import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Cell = styled.div`
  height: 161.33px;
  margin: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ccc;
  border: 2px solid #1D1E22;
  border-radius: 8px;

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-5%);
  }

  span {
    font-size: 52px;
    font-weight: 600;
    color: #00000066;
  }
`;