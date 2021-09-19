import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #260B9E;
  border-bottom: 4px solid #43D9C7;

  display: flex;
`

export const LeftSide = styled.div`
  width: 50%;
  height: 70px;

  display: flex;
  align-items: center;
  margin-left: 10px;

  img {
    width: 160px;
  }
`

export const RightSidde = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  a {
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;


    &:hover{
      color: #43D9C7;
    }
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
  }

  #notification{
    img{
      width: 25px;
      height: 100%;
    }
    span{
      color: #43D9C7;
      background: #FFF;
      border: none;
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      right: 10px;
      top: -5px;
    }

    &:hover{
      opacity: 40%;
    }
  }

  .divider::after{
    content: "|";
    margin: 0 10px;
    color: #FFF;
    font-weight: bold;
  }
`