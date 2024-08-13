import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import ContactList from './components/ContactList.jsx';
import AddContact from './pages/AddContact.jsx';
import EditContact from './pages/EditContact.jsx';

const cache = createCache({
  key: 'css',
  prepend: true
});

function App() {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<ContactList />} />
              <Route path="/add" element={<AddContact />} />
              <Route path="/edit/:id" element={<EditContact />} />
            </Routes>
          </Router>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
