import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import ErrorPage from './errorPage';
import { DefaultLayout } from './layouts/defaultLayout';
import { Checkout } from './Pages/Checkout';
import { Home } from './Pages/Home';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'checkout',
        element: <Checkout/>
      }
    ]
  },
]);

function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <RouterProvider router={router} />
    <GlobalStyle/>
   </ThemeProvider>
  )
}

export default App
