import styled from 'styled-components'
import Button from '../elements/Button'

export const ButtonStyled = styled(Button)`
    background-color: ${({ theme }) => theme.colorPalette.color};
    color: ${({ theme }) => theme.colorBase};
    border: solid 2px ${({ theme }) => theme.colorBase};
    border-radius: 12px;
    padding: .6em .8em;
    margin-left: 1em;
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-family: inherit;
    font-weight: 600;
    transition: all .2s ease-in;
    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colorBase};
        color: ${({ theme }) => theme.colorPalette.color};
    }
`

export const IconButtonStyled = styled(ButtonStyled)`
    span {
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        margin-left: 6px;
        vertical-align: center;
        transform: ${({ isCategoryOpen }) => isCategoryOpen ? 'rotate(0deg)' : 'rotate(180deg)'} translate(0px,2px);
    }
`

export const ButtonsBlockStyled = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 1.5rem 0;
`