import styled from 'styled-components';

interface InputProps {
  icon?: any;
}

export const InputStyle = styled.input<InputProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #232129;
  color: #666360;
  display: flex;
  align-items: center;

  & + input {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }
`;
