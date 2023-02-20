import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h1>Page</h1>
      </div>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
