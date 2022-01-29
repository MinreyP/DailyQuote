import styled from 'styled-components';
import Tag from '../elements/Tag';

const TagStyled = styled(Tag)`
    background-color: ${({ theme }) => theme.colorPalette.color};
    color: ${({ theme }) => theme.colorBase};
    border: solid 2px ${({ theme }) => theme.colorBase};
    border-radius: 25px;
    padding: .6em .8em;
    margin: .5em;
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-family: inherit;
    font-weight: 400;
    transition: all .2s ease-in;
    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colorBase};
        color: ${({ theme }) => theme.colorPalette.color};
    }
`

export default TagStyled;