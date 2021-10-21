import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromTop} 1s;

  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    color: #00f8e2;
    font-size: 2rem;
  }

  h5 {
    color: white;
    padding: 0.5rem 0 2rem;
    font-size: 0.8rem;
    font-weight: normal;
    letter-spacing: 0.4rem;
  }

  img {
    width: 150px;
    margin-bottom: 20px;
  }

  form {
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: white;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }

  > a {
    color: ${(props) => props.theme.colors.title};
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }
    &:hover {
    }
  }
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.title};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
  }
`;
