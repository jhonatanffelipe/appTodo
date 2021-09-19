import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    flex-wrap: wrap;

    button {
        border: none;
        background: none;

    }
`

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 100%;

    a {
        text-decoration: none;
        color: #000;
    }
`

export const Title = styled.div`
    width: 100;
    border-bottom: 1px solid #260B9E;
    display: flex;
    justify-content: center;

    h3 {
        color: #260B9E;
        position: relative;
        top: 30px;
        background: #FFF;
        padding: 0 10px;
    }
`