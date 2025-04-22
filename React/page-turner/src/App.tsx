import Home from './pages/Home';
import Layout from './components/layout/Layout';
import ThemeSwitcher from './components/header/ThemeSwitcher.tsx';
import {PageTurnerThemeProvider} from './context/ThemeContext.tsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Error from './components/common/Error.tsx';
import Signup from './pages/Signup.tsx';
import ResetPassword from './pages/ResetPassword.tsx';
import Login from './pages/Login.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: '/books',
    element: (
      <Layout>
        <div>도서 목록</div>
      </Layout>
    ),
  },
  {
    path: '/signup',
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
  {
    path: '/reset',
    element: (
      <Layout>
        <ResetPassword />
      </Layout>
    ),
  },
  {
    path: '/login',
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <PageTurnerThemeProvider>
      <ThemeSwitcher />
      <RouterProvider router={router} />
    </PageTurnerThemeProvider>
  );
}

export default App;
