import styled from 'styled-components';
import arrow from '../../assets/arrow-down-mint.svg';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.lightBlue};

  .module {
    background-color: ${(props) => props.theme.colors.darkBlue};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

    h3 {
      position: relative;
      font-size: 20px;
      padding: 30px 80px 30px 20px;
      color: ${(props) => props.theme.colors.title};
      display: flex;
      flex-direction: column;

      cursor: pointer;
      transition: all 0.4s ease;

      span {
        color: #fff;
        font-size: 16px;
      }

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;

        background-image: url(${arrow});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;

        transition: all 0.4s ease-out;
      }
    }

    h4 {
      padding: 0 80px 0px 20px;
    }

    ul {
      opacity: 0;
      max-height: 0;
      overflow-y: hidden;
      transition: all 0.4s ease-out;

      li {
        padding: 20px;
        background-color: ${(props) => props.theme.colors.lightBlue};
        color: ${(props) => props.theme.colors.text};

        &:hover {
          background-color: ${(props) => props.theme.colors.darkBlue};
          cursor: pointer;
          transition: all 0.4s ease-out;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          color: #fff;
        }
      }
    }

    &.open ul {
      max-height: 1000px;
      opacity: 1;
    }

    &.open h3 {
      &::after {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }
`;
