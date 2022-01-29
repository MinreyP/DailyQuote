import React, {useEffect} from 'react'
import { TopBlockStyled, ShareBlockStyled } from '../styled/CardTopBlockStyled'
import { FaTwitter, FaFacebookSquare } from "react-icons/fa"
import { IoMdHeart } from 'react-icons/io'
import { useGlobalContext } from '../../utilities/context'
import { FacebookShareButton, TwitterShareButton } from "react-share"

const MainCardTopBlock = () => {

    const { currentTag, addToFav, feedbackMSG, setFeedbackMSG, randomQuote} = useGlobalContext();
    const shareContent = randomQuote ? randomQuote.content : 'Get your quote today for your daily dose of wellness';
    const quoteAuthor = randomQuote ? randomQuote.author : 'Daily Dose App';
    const quoteAuthorTrim = quoteAuthor.replace(/\s+/g, '');

    const handleClick = () => {
        setFeedbackMSG(true);
        addToFav();
    }

    useEffect(() => {
        setTimeout(() => {
            setFeedbackMSG(false);
        }, 1200)
    }, [feedbackMSG])

    return (
        <TopBlockStyled>
            <p>#{currentTag}</p>
            <ShareBlockStyled>
                <FacebookShareButton 
                    url="www.monkhaus.uk"
                    quote={`"${shareContent}" - ${quoteAuthor}`}
                    hashtag={`#DailyQuoteApp`}>
                    <FaFacebookSquare />
                </FacebookShareButton>
                <TwitterShareButton
                    url="www.monkhaus.uk"
                    title={`"${shareContent}" - ${quoteAuthor}`}
                    hashtags={['DailyQuoteApp', `${currentTag}`, `${quoteAuthorTrim}`]}>
                    <FaTwitter />
                </TwitterShareButton>
                <button onClick={() => handleClick()}>
                    <IoMdHeart />
                </button>
            </ShareBlockStyled>
        </TopBlockStyled>
    )
}

export default MainCardTopBlock;