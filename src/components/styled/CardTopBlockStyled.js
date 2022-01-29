import styled from 'styled-components'

export const TopBlockStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 1.125rem;
        width: 12em;
        text-align: left;
        text-decoration: underline;
    }
`

export const ShareBlockStyled = styled.div`
    width: 50%;
    display: flex;
    justify-content: end;
    align-items: center;

    button {
        display: block;
        width: 24px;
        height: 24px;
        background-color: transparent;
        color: ${({ theme }) => theme.colorBase};
        border: none;
        padding: 0px;
        font: inherit;
        margin: 0 1rem;
        cursor: pointer;
        transition: all .3s ease-in-out;
        &:hover {
            transform: scale(.9);
        }
    }
    svg {
        width: 100%;
        height: 100%;
    }
`

export const FavCardShareBlockStyled = styled(ShareBlockStyled)`
    width: 100%;
`