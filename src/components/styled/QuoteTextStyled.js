import styled from 'styled-components';

export const QuoteTextStyled = styled.blockquote`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.6em;
    text-align: left;
    margin-inline-start: 0;
    margin-inline-end: 0;
    p {
        font-weight: 400;
        font-size: 1.25rem;
    }
    span {
        display: inline-block;
        width: 2rem;
        height: 1px;
        background-color: ${({ theme }) => theme.colorBase};
        margin: 0 .5em 8px 0;
    }
`