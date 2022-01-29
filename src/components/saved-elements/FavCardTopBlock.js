import React from 'react'
import { useGlobalContext } from '../../utilities/context'
import { FavCardShareBlockStyled } from '../styled/CardTopBlockStyled'
import { FaTwitter, FaFacebookSquare } from "react-icons/fa"
import { IoMdHeart } from 'react-icons/io'
import { FacebookShareButton, TwitterShareButton } from "react-share"

const FavCardTopBlock = ({ id, content, author }) => {

    const { removeFav } = useGlobalContext();
    const quoteAuthorTrim = author.replace(/\s+/g, '');
    
    return (
        <FavCardShareBlockStyled>
            <FacebookShareButton
                url="www.monkhaus.uk"
                quote={`"${content}" - ${author}`}
                hashtag={'#DailyQuoteApp'}>
                <FaFacebookSquare />
            </FacebookShareButton>
            <TwitterShareButton
                url="www.monkhaus.uk"
                title={`"${content}" - ${author}`}
                hashtags={['DailyQuoteApp', `${quoteAuthorTrim}`]}>
                <FaTwitter />
            </TwitterShareButton>
            <button type="button" onClick={() => removeFav(id)}>
                <IoMdHeart />
            </button>
        </FavCardShareBlockStyled>
    )
}

export default FavCardTopBlock;
