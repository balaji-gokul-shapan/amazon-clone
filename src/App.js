import logo from './logo.svg';
import './App.css';
import { Homepage } from './libraries/pages/Homepage';
import { Container, ThemeProvider } from '@mui/material';
import theme from './libraries/styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container  maxWidth='xl'sx={{ background: '#fffff',}}>
        <Homepage />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
