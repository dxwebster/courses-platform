import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Main = styled.main`
  width: 70%;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Top = styled.div`
  display: flex;
  gap: 2rem;

  p {
    color: rgb(168, 168, 179);
  }

  h2 {
    color: white;
    margin-bottom: 2rem;
    font-size: 1.6rem;
  }
`;
