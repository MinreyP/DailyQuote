import React from 'react'
import { FavQuoteCardStyled, FavQuoteText } from '../styled/FavQuoteCardStyled'
import FavCardTopBlock from './FavCardTopBlock'

const FavQuoteCard = ({content, _id, author }) => {
    return (
        <FavQuoteCardStyled>
            <FavCardTopBlock id={_id} content={content} author={author} />
            <FavQuoteText>
                “{content}”
                <p><span></span>{author}</p>
            </FavQuoteText>
        </FavQuoteCardStyled>
    )
}

export default FavQuoteCard;
