import { Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

import HomePage from './pages/HomePage'

function App() {
  return (
    <div>
      <CssBaseline />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
