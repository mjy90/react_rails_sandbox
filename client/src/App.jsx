import './App.css';
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme';

import BoardFootCalculator from './components/BoardFootCalculator';
import Header from './components/Header';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <BoardFootCalculator />
    </ThemeProvider>
  );
}

export default App;
