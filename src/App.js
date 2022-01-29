import React from 'react'
import { useGlobalContext } from './utilities/context';
import GlobalStyle from './components/styled/Global-styled';
import { ThemeProvider } from 'styled-components';
import Loading from './components/elements/Loading';
import FeedbackMSG from './components/elements/FeedbackMSG';
import Home from './components/Home';

function App() {

  const { isLoading, theme, feedbackMSG} = useGlobalContext();

  return (
    <>
      <GlobalStyle themeColor={theme.colorPalette.color} />
      <ThemeProvider theme={theme}>
        {isLoading ? <Loading /> : ''}
        {feedbackMSG ? <FeedbackMSG feedbackText='Quote saved!' /> : ''}
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
