import DataProvider from './context/DataProvider';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import DetailView from './components/details/detailView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 34 }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<DetailView />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
