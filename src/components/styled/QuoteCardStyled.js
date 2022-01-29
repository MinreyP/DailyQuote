import styled from 'styled-components'

export const CardShadowStyled = styled.div`
    position: relative;
    z-index: 1;
    margin-bottom: 4rem;
`

export const QuoteCardStyled = styled.div`
    display: block;
    position: relative;
    width: 80%;
    max-width: 640px;
    min-height: 480px;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colorBase};
    background-color: ${({ theme }) => theme.colorPalette.color};
    padding: 2rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    margin: 0 auto;

    &::before, &::after {
        content: '';
        border-radius: 1rem;
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
    }
    &::before {
        background-color: ${({ theme }) => theme.colorPalette.darken20};
        top: 8px;
        left: 8px;
        z-index: -1;
    }
    &::after {
        background-color: ${({ theme }) => theme.colorPalette.darken40};
        top: 16px;
        left: 16px;
        z-index: -2;
    }

    @media(max-width: ${({ theme }) => theme.responsive.pad}){
        min-height: 520px;
    }
`