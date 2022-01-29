import React from 'react'
import { useGlobalContext } from '../../utilities/context';

const Tag = ({className, tagName}) => {
    const { setCurrentTag, shuffleColor, setIsLoading } = useGlobalContext();

    const handleClick = (tagName) => {
        setCurrentTag(tagName);
        setIsLoading(true);
        shuffleColor();
    }

    return (
        <button type="button" className={className} onClick={() => { handleClick(tagName) }}>
            {tagName}
        </button>
    )
}

export default Tag;
