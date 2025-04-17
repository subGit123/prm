import Home from './pages/Home';
import Layout from './components/layout/Layout';
import {GlobalStyle} from './style/global.ts';
import {ThemeProvider} from 'styled-components';
import {getTheme} from './style/theme.ts';
import ThemeSwitcher from './components/header/ThemeSwitcher.tsx';
import {useContext} from 'react';
import {
  PageTurnerThemeProvider,
  ThemeContext,
} from './context/ThemeContext.tsx';

function App() {
  return (
    <PageTurnerThemeProvider>
      <ThemeSwitcher />
      <Layout>
        <Home />
      </Layout>
    </PageTurnerThemeProvider>
  );
}

export default App;
