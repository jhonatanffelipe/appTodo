import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
    background: red;
    width: 400px;
    height: 400px;
`