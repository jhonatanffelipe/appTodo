import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 70px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h1 {
        color: #43D9C7;
    }

    p {
        color: #260B9E;
    }
`
export const QrCodeArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ValidationCode = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin: 10px;

    span {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        color: #707070;
        margin-bottom: 3px;
    }

    input {
        font-size: 18px;
        padding: 10px;
        text-align: center;
    }

    button {
        font-weight: bold;
        background: #43D9C7;
        color: #FFF;
        font-size: 18px;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
        padding: 15px;

        &:hover {
            background: #260B9E;
        }
    }
`