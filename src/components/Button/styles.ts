import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 16px;
  border: 0;
  padding: 0 16px;

  height: 56px;
  width: 100%;

  border-radius: 10px;
  background: #ff9000;

  color: #312e38;
  font-weight: 500;

  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
