import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ProductContextProvider } from './contexts/ProductContext'
import { router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductContextProvider>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ProductContextProvider>
    </ThemeProvider>
  )
}

export default App
