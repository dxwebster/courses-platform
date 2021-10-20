import styled from 'styled-components';

import Tooltip from '../Tooltip';

interface InputProps {
  icon?: any;
}
export const Container = styled.div`
  position: relative;

  & + div {
    margin-top: 8px;
  }
`;

export const InputStyle = styled.input<InputProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #232129;
  color: #666360;
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 15px;
  right: 12px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
