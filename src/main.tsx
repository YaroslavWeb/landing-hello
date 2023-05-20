import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { App } from './App.tsx'

import { GlobalStyles } from 'styles/global.ts'
import { theme } from 'styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>,
)
