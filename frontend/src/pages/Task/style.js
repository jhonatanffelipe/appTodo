
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`

export const TypeIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .inative {
    opacity: 0.4;
  }

  button {
    border: none;
    background: none;
  }

  img {
    width: 50px;
    height: 50px;
    margin: 10px;
    cursor: pointer;

    &:hover {
      opacity: 0.4;
    }
  }
`

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  span {
    color: #707070;
    margin-bottom: 3px;
  }

  input {
    font-size: 16px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid  #43D9C7;
  }
`

export const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  span {
    color: #707070;
    margin-bottom: 3px;
  }

  textarea {
    font-size: 16px;
    padding: 15px;
    border: 1px solid  #43D9C7;
  }
`

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;

  div {
    display: flex;
    align-items: center;
    color: #43D9C7;
    font-weight: bold;
    font-size: 18px;
  }

  button {
    color: #260B9E;
    border: none;
    background: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;

    &:hover{
      opacity: 0.7;
    }
  }

  input {
    cursor: pointer;
  }

`

export const Save = styled.div`
  width: 100%;
  margin-top: 50px;

  button {
    width: 100%;
    border-radius: 40px;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    border: none;
    background: #43D9C7;
    padding: 15px;
    cursor: pointer;

    &:hover{
      opacity: 0.5;
    }
  }
`