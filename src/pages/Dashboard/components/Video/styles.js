import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: #090909;

  div {
    padding: 48px 40px 0;
  }
  iframe {
    margin: 20px 40px 0;
    width: 90%;
    height: 50%;
  }
`;
