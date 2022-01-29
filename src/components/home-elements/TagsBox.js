import React from 'react'
import TagsBoxStyled from '../styled/TagsBoxStyled'
import TagStyled from '../styled/TagStyled'
import tags from '../../utilities/tags'

const TagsBox = () => {
    return (
        <TagsBoxStyled>
            {tags.map((tag, index) => <TagStyled key={index} tagName={tag} />)}
        </TagsBoxStyled>
    )
}

export default TagsBox;