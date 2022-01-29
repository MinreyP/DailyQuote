import React from 'react'
import { FooterStyled, FooterIconsStyled } from '../styled/FooterStyled'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterStyled>
            <p>
                A React Project Made By Minrey Peng
            </p>
            <FooterIconsStyled>
                <a href="https://www.linkedin.com/in/minrey-peng/" target="_blank">
                    <FaLinkedin />
                </a>   
                <a href="https://github.com/MinreyP?tab=repositories" target="_blank">
                    <FaGithub />
                </a>
                <a href="mailto:minreypeng@gmail.com" target="_blank">
                    <FaEnvelope />
                </a>
            </FooterIconsStyled>
        </FooterStyled>
    )
}

export default Footer;
