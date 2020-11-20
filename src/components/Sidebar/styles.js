import styled from 'styled-components';
import arrow from '../../assets/arrow-down-mint.svg';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.darkBlue};

  section {
    background-color: ${(props) => props.theme.colors.lightBlue};
    margin-bottom: 3px;

    &.open div::after {
      transform: translateY(-50%) rotate(180deg);
    }

    div {
      position: relative;
      font-size: 20px;
      padding: 30px 80px 30px 20px;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: all 0.4s ease;

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

      h3 {
        color: ${(props) => props.theme.colors.title};
      }

      span {
        color: #fff;
        font-size: 16px;
      }
    }

    ul {
      opacity: 0;
      max-height: 0;
      overflow-y: hidden;
      transition: all 0.4s ease-out;

      li {
        padding: 20px;
        color: ${(props) => props.theme.colors.text};
        transition: all 0.4s ease-out;

        &:hover {
          background-color: ${(props) => props.theme.colors.darkBlue};
          cursor: pointer;
          color: white;
        }

        &.active {
          background-color: ${(props) => props.theme.colors.darkBlue};
          color: white;
        }
      }
    }

    &.open ul {
      max-height: 1000px;
      opacity: 1;
    }
  }
`;
