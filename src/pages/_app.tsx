import { AppProps } from 'next/app';

//import theme from '../styles/theme';

import GlobalStyles from '../styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { combineTheme, dark, light } from '../styles/themes'
import { ThemeContextApp } from '../context/ThemeContextApp';

import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import { Toaster } from 'react-hot-toast'
import NextNProgress from "nextjs-progressbar";
import { parseCookies, setCookie } from 'nookies';
import { useEffect, useState } from 'react';

function App({ Component, pageProps }: AppProps) {

  const cookies = parseCookies();
  const { USER_THEME } = cookies;

  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light))

  const toggleTheme = () => {

    if (theme.title === 'light') {
      setTheme(combineTheme(dark))
      setCookie(null, 'USER_THEME', 'dark', {
        maxAge: 86400,
        path: '/'
      });
    } else {
      setTheme(combineTheme(light))
      setCookie(null, 'USER_THEME', 'light', {
        maxAge: 86400,
        path: '/'
      });
    }
  };


  useEffect(() => {
    USER_THEME === 'light' ? setTheme(light) : setTheme(dark);
  }, [theme, USER_THEME]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ThemeContextApp.Provider value={{ toggleTheme }}>
            <NextNProgress
              color="#dd9b0b"
              startPosition={0.4}
              stopDelayMs={200}
              height={5}
              showOnShallow={true}
            />
            <Toaster position="bottom-right" />
            <Component {...pageProps} />
            <GlobalStyles />
          </ThemeContextApp.Provider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;