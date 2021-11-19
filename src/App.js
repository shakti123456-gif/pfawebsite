import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages
import Landing from './Pages/Landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Landing />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;