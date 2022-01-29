import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderStyled, LogoStyled, IoMdHeartStyled } from '../styled/HeaderStyled'

const Header = ({themeColor}) => {

    return (
        <HeaderStyled>
            <Link to="/saved-quotes"><IoMdHeartStyled /></Link>
            <Link to="/"><LogoStyled themeColor={themeColor} /></Link>
        </HeaderStyled>
    )
}

export default Header;
