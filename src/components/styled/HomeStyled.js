import styled from 'styled-components'

const HomeStyled = styled.main`
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    h2 {
      font-size: 2.5rem;
      width: 80%;    
      font-style: italic;
      text-align: center;
      margin-top: 0;
      margin-bottom: 3rem;
    }

    h5 {
        font-size: 1.5rem;
    }

    @media(max-width: ${({ theme }) => theme.responsive.pad}){
        width: 80%;
        
        h2 {
            font-size: 1.5rem;
        }
    }
`

export default HomeStyled;