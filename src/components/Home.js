import React from 'react'
import {theme} from '../utilities/theming'
import HomeStyled from './styled/HomeStyled'
import Header from './elements/Header'
import Footer from './elements/Footer'
import QuoteCard from './home-elements/QuoteCard'

const Home = () => {
    
    return (
        <>
            <Header themeColor={theme.colorPalette.color} />
            <HomeStyled>
                <h2>Get a inspiring quote today for your daily dose of mental wellness.</h2>
                <QuoteCard />
            </HomeStyled>
            <Footer />
        </>
    )
}

export default Home;
