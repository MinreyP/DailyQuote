import React from 'react'
import { QuoteTextStyled } from '../styled/QuoteTextStyled'
import { useGlobalContext } from '../../utilities/context';

const QuoteText = () => {
    const {randomQuote} = useGlobalContext();

    const defaultQuote = 'Never explain - your friends do not need it and your enemies will not believe you anyway.';
    const defaultAuthor = 'Elbert Hubbard';

    return (
        <QuoteTextStyled>
            “{randomQuote ? randomQuote.content : defaultQuote}”
            <p><span></span>{randomQuote ? randomQuote.author : defaultAuthor}</p>
        </QuoteTextStyled>
    )
}

export default QuoteText;
