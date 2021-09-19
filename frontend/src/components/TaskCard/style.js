import styled from 'styled-components'

export const Container = styled.div`
  width:  300px;
  height: 180px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.75);

  margin: 20px;

  opacity: ${props => props.done ? 0.3 : 1};

  &:hover{
    cursor: pointer;
    opacity: 0.4;
    transition: all 0.3s ease;
  }
`

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  img {
    width: 50px;
    height: 50px;
  }
`

export const BottomCard = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;

  strong {
    color: #43D9C7;
  }

  span {
    color: #707070;
  }
`

