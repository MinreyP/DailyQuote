import styled from 'styled-components'

export const GridContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    max-width: 960px;
    margin: 0 auto;
    padding: 2rem 1rem;
    @media(min-width: ${({ theme }) => theme.responsive.lg }) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        grid-gap: 2rem;
    }
`

export const StatusMSGStyled = styled.p`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-bottom: solid 1px;
`