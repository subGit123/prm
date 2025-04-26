import Home from './pages/Home';
import Layout from './components/layout/Layout';
import ThemeSwitcher from './components/header/ThemeSwitcher.tsx';
import {PageTurnerThemeProvider} from './context/ThemeContext.tsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Error from './components/common/Error.tsx';
import Signup from './pages/Signup.tsx';
import ResetPassword from './pages/ResetPassword.tsx';
import Login from './pages/Login.tsx';
import Books from './pages/Books.tsx';
import BookDetail from './pages/BookDetail.tsx';
import Cart from './pages/Cart.tsx';
import Order from './pages/Order.tsx';
import OrderList from './pages/OrderList.tsx';

const routerList = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/books',
    element: <Books />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/reset',
    element: <ResetPassword />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/book/:bookId',
    element: <BookDetail />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/orderList',
    element: <OrderList />,
  },
];

const router = createBrowserRouter(
  routerList.map(item => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
      errorElement: <Error />,
    };
  }),
);

function App() {
  return (
    <PageTurnerThemeProvider>
      <ThemeSwitcher />
      <RouterProvider router={router} />
    </PageTurnerThemeProvider>
  );
}

export default App;
