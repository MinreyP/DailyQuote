import React, {useState, useContext, createContext, useEffect} from 'react'
import { colorPalette, theme } from './theming';

export const AppContext = createContext();

export const Context = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [feedbackMSG, setFeedbackMSG] = useState(false);
    const [currentTag, setCurrentTag] = useState('friendship');
    const [colorIndex, setColorIndex] = useState(0);
    const [quotes, setQuotes] = useState([]);
    const [randomQuote, setRandomQuote] = useState('');
    const quotesAPI = `https://api.quotable.io/search/quotes?query=${currentTag}&limit=60`;
    const localData = localStorage.getItem('favQuotes');
    const [savedQuotes, setSavedQuotes] = useState(localData ? JSON.parse(localData) : []);

    const getData = async () => {
        const data = await fetch(quotesAPI).then(res => res.json()).then(res => res.results);
        return data;
    }

    const shuffleColor = () => {
        if (colorIndex === colorPalette.length - 1) {
            theme.colorPalette = colorPalette[0];
            setColorIndex(0)
       } else {
            theme.colorPalette = colorPalette[colorIndex + 1];
            setColorIndex(colorIndex + 1);
       }
    }

    const shuffleQuote = () => {
        let randomNum = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randomNum]);
    }

    const addToFav = () => {
        let temp = [...savedQuotes, randomQuote];
        setSavedQuotes(temp);
        localStorage.setItem('favQuotes', JSON.stringify(temp));
    }

    const removeFav = (id) => {
        let temp = [...savedQuotes].filter(quote => quote._id !== id);
        setSavedQuotes(temp);
        localStorage.setItem('favQuotes', JSON.stringify(temp));
    }

    useEffect(() => {
        setIsLoading(true);
        getData().then(data => {
            setQuotes(data);
            setIsCategoryOpen(false);
        });
        setTimeout(()=>{
            setIsLoading(false);
        }, 1000);

    }, [currentTag]);

    useEffect(() => {
        shuffleQuote();
    }, [quotes])

    return (
        <AppContext.Provider 
        value={
                { isLoading, setIsLoading, currentTag, setCurrentTag, theme, shuffleQuote, quotes, randomQuote, isCategoryOpen, setIsCategoryOpen, shuffleColor, savedQuotes, addToFav, removeFav, feedbackMSG, setFeedbackMSG }
        }>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return(
        useContext(AppContext)
    )
}
