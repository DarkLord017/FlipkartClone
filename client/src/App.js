import DataProvider from './context/DataProvider';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

import { Box } from '@mui/material';

function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <Box style={{ marginTop: 34 }}>
          <Home />
        </Box>
      </DataProvider>
    </>
  );
}

export default App;
