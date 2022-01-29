import styled from 'styled-components';

export const FooterStyled = styled.footer`
    width: 100%;
    max-width: 960px;
    margin: auto;
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;

    p {
        width: 45%;
        text-align: left;
    }

    @media(max-width: ${({ theme }) => theme.responsive.pad}){
        flex-direction: column;
        align-items: center;
        justify-content: start;

        p {
            text-align: center;
        }
    }
`

export const FooterIconsStyled = styled.div`
    width: 45%;
    padding: .4em 0;
    display: flex;
    justify-content: end;
    align-items: center;
    a {
        display: block;
        text-align: right;
        width: 24px;
        height: 24px;
        text-decoration: none;
        color: ${({ theme }) => theme.colorPalette.color};
        margin-left: 1rem;
        transition: all .3s ease-in-out;

        svg {
            width: 100%;
            height: 100%;
        }

        &:hover {
            transform: scale(.8);
        }
    }
    @media(max-width: ${({ theme }) => theme.responsive.pad}) {
        justify-content: center;
    }
`