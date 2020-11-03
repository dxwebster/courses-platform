import styled from 'styled-components';

import arrow from '../../assets/arrow-down-mint.svg';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 15px;
  background-color: #0f1124;

  .module {
    margin: 15px;
    padding: 15px 0;
    background-color: #878fb83d;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

    h3 {
      position: relative;
      font-size: 20px;
      padding: 10px 80px 10px 20px;
      color: #49f2d2;

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
    }

    ul {
      opacity: 0;
      max-height: 0;
      overflow-y: hidden;
      transition: all 0.4s ease-out;
    }

    &.open ul {
      max-height: 1000px;
      opacity: 1;

      li {
        padding: 5px 20px;

        &:hover {
          background-color: #414662;
          cursor: pointer;
          transition: all 0.4s ease-out;
        }
      }
    }

    &.open h3 {
      margin-bottom: 15px;

      &::after {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }
`;
