import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme/theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
