import React from 'react'
import { ButtonStyled, IconButtonStyled, ButtonsBlockStyled} from '../styled/ButtonStyled'
import { CardShadowStyled, QuoteCardStyled } from '../styled/QuoteCardStyled'
import CardTopBlock from './CardTopBlock'
import TagsBox from './TagsBox'
import QuoteText from './QuoteText'
import { useGlobalContext } from '../../utilities/context'

const QuoteCard = () => {

    const { isCategoryOpen } = useGlobalContext();
    
    return (
        <CardShadowStyled>
            <QuoteCardStyled>
                <CardTopBlock />
                {
                    isCategoryOpen ? <TagsBox /> : <QuoteText />
                }
                <ButtonsBlockStyled>
                    <IconButtonStyled 
                    buttonType='category'
                    isCategoryOpen={isCategoryOpen}>
                        Category<span>&#8963;</span>
                    </IconButtonStyled>
                    <ButtonStyled buttonType='shuffle'>Shuffle</ButtonStyled>
                </ButtonsBlockStyled>
            </QuoteCardStyled>
        </ CardShadowStyled>
    )
}

export default QuoteCard;