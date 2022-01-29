import styled from "styled-components";

export const FavQuoteCardStyled = styled.div`
    width: 100%;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colorBase};
    background-color: ${({ theme }) => theme.colorPalette.color};
    padding: 1.8rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    margin: 0 auto;
`

export const FavQuoteText = styled.blockquote`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.6em;
    text-align: left;
    margin-top: 2rem;
    margin-inline-start: 0;
    margin-inline-end: 0;
    p {
        font-weight: 400;
        font-size: 1rem;
    }
    span {
        display: inline-block;
        width: 2rem;
        height: 1px;
        background-color: ${({ theme }) => theme.colorBase};
        margin: 0 .5em 5px 0;
    }
`