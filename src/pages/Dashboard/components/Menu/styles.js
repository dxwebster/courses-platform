import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme.colors.title};
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  padding: 10px 20px;
  color: ${(props) => props.theme.colors.primary};

  ul {
    display: flex;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      font-size: 13px;
      font-weight: bold;

      & + li {
        margin-left: 30px;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme.colors.primary};

        svg{
          margin-right: 8px;
        }

      }
    }
  }
`;

export const MenuSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;

    p {
      margin-left: 20px;
    }
  }
`;

export const Avatar = styled.img`
  height: 34px;
  width: 34px;
  border-radius: 50%;
  margin: 0 15px;
`;
