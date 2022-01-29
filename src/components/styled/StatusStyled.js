import styled, { keyframes } from 'styled-components'

const iconAnimation = keyframes`
    from {
        transform: translateY(-30%);
    }
    to {
        transform: translateY(0);
    }
`

const iconAnimation2 = keyframes`
    0% {
        transform: rotate(0);
    }
    50% {
        transform: rotate(-15deg);
    }
    100% {
        transform: rotate(0);
    }
`

export const LoadingStyled = styled.div`
    background-color: rgba(28,28,28,1);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;

    div {
        color: #FFD370;
        width: 32px;
        height: 32px;
        margin: 30% auto;
        animation: ${iconAnimation} 1s linear infinite alternate-reverse;

        svg {
            width: 100%;
            height: 100%;
        }
    }
`

export const FeedbackMSGStyled = styled(LoadingStyled)`
    color: #FFD370;
    p{
        margin: 0 auto;
        margin-top: 15%;
        font-size: 1.125rem;
        width: 50%;
    }
    div {
        margin-top: 1rem;
        animation: ${iconAnimation2} 1.2s linear infinite alternate-reverse;
    }
`