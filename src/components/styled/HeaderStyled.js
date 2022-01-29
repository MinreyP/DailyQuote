import styled from 'styled-components'
import Logo from '../elements/logo'
import { IoMdHeart } from 'react-icons/io'

export const HeaderStyled = styled.header`
    width: 100%;
    padding: 1rem 2rem;
    margin-bottom: 1.5rem;
    background: #1C1C1C;
    position: relative;
`

export const LogoStyled = styled(Logo)`
    width: 120px;
    height: 120px;
    margin: 0 auto;
`

export const IoMdHeartStyled = styled(IoMdHeart)`
    width: 32px;
    height: 32px;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    transition: all .3s ease-in-out;
    &:hover {
        transform: scale(.8);
        cursor: pointer;
    }
`