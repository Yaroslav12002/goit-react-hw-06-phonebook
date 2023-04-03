import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  width: 600px;
  font-size: 22px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  :nth-child(2n) {
    background-color: #eee;
  }
`;

export const Button = styled.button`
  margin-left: 20px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 4px;
  background-color: inherit;
`;
