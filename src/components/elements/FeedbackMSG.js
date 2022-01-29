import React from 'react'
import { FaGlassMartiniAlt } from "react-icons/fa";
import { FeedbackMSGStyled } from "../styled/StatusStyled"

const FeedbackMSG = ({feedbackText}) => {
    return (
        <FeedbackMSGStyled>
            <p>{feedbackText}</p>
            <div>
                <FaGlassMartiniAlt />
            </div>
        </FeedbackMSGStyled>
    )
}

export default FeedbackMSG;
