import React from 'react'
import { useGlobalContext } from '../../utilities/context'


const Button = ({ className, children, buttonType}) => {
    const { shuffleQuote, isCategoryOpen, setIsCategoryOpen } = useGlobalContext();

    const handleClicked = () => {
        if (buttonType === 'category') {
            setIsCategoryOpen(!isCategoryOpen);
        }  
        if(buttonType === 'shuffle') {
            shuffleQuote();
        }
    }

    return (
        <button type="button" className={className} onClick={handleClicked}>
            {children}
        </button>
    )
}

export default Button;
