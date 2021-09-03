import styled from 'styled-components'

export const Container = styled.div`
  width: 260px;
  height: 60px;
  background: ${props => props.actived ? '#43d9c7' : '#260B9E'};
  border-radius: 5px;
  padding: 10px;
  margin-top: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-around;


  img{
    width: 25px;
    height: 25px;
  }

  span {
    color: #FFF;
    font-weight: bold;
    align-self: flex-end;
    font-size: 1.1em;
  }

  &:hover{
    background: #43d9c7;
    cursor: pointer;
  }
`