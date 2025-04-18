import Home from './pages/Home';
import Layout from './components/layout/Layout';
import ThemeSwitcher from './components/header/ThemeSwitcher.tsx';
import {PageTurnerThemeProvider} from './context/ThemeContext.tsx';

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
