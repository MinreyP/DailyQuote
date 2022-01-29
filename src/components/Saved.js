import React from 'react'
import { useGlobalContext } from '../utilities/context'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styled/Global-styled';
import Header from './elements/Header';
import Footer from './elements/Footer'
import { GridContainer, StatusMSGStyled} from './styled/SavedQuotesStyled'
import FavQuoteCard from './saved-elements/FavQuoteCard';

const Saved = () => {
    const { savedQuotes, theme } = useGlobalContext();

    if (savedQuotes.length === 0) {
        return (
            <>
                <GlobalStyle themeColor={theme.colorPalette.color} />
                <ThemeProvider theme={theme}>
                    <Header themeColor={theme.colorPalette.color} />
                    <GridContainer>
                        <StatusMSGStyled>You haven't save any quote yet.</StatusMSGStyled>
                    </GridContainer>
                    <Footer />
                </ThemeProvider>
            </>
        )
    }
    else {
        return(
            <>
                <GlobalStyle themeColor={theme.colorPalette.color} />
                <ThemeProvider theme={theme}>
                    <Header themeColor={theme.colorPalette.color} />
                    <GridContainer>
                        {
                            savedQuotes.map(quote => <FavQuoteCard key={quote._id} {...quote} />)
                        }
                    </GridContainer>
                    <Footer />
                </ThemeProvider>
            </>
        )
    }
}

export default Saved;
