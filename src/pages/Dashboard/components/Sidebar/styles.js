import styled from 'styled-components';
import arrow from '../../../../assets/arrowDown.png';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ModuleSection = styled.section`
  background-color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 3px;

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
      transform: ${props => (props.isOpen ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)')} ;
      width: 20px;
      height: 20px;

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
`


export const LessonList = styled.ul`
  opacity: ${props => (props.isOpen ? '1' : '0')};
  max-height: ${props => (props.isOpen ? '1000px' : '0')};
  overflow-y: hidden;
  transition: all 0.4s ease-out;

  background-color: ${props => (props.isActive ? props.theme.colors.primary : props.theme.colors.secondary)};
  color: white;

  
`

export const Lesson = styled.li`
  padding: 20px;
  color: ${props => props.theme.colors.text};
  transition: all 0.4s ease-out;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    cursor: pointer;
    color: white;
  }
`