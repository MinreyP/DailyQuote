import React from 'react'
import {LoadingStyled} from '../styled/StatusStyled';
import { FaBolt } from "react-icons/fa";

const Loading = () => {
    return (
        <LoadingStyled>
            <div>
                <FaBolt />
            </div>
        </LoadingStyled>
    )
}

export default Loading;
