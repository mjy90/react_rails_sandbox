import './App.css'
// Theme
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
// Redux
// import { Provider } from 'react-redux'
// import store from './store'
// React Query
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import BoardFootCalculator from './components/BoardFootCalculator'
import SpeciesList from './components/SpeciesList'
import SpeciesView from './components/SpeciesView'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Provider store={store}> */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path='boardFootCalculator' element={<BoardFootCalculator />} />
                <Route path='species' element={<SpeciesList />} />
                <Route path='species/:speciesId' element={<SpeciesView />} />
                <Route path='species/:speciesId/edit' element={<SpeciesView isEditing />} />
                <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      {/* </Provider> */}
    </QueryClientProvider>
  )
}

export default App
