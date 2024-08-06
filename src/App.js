import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import SignIn from './Pages/SignIn/SignIn';
// import SignUp from './Pages/SignIn/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: '#14161a',
          color: 'white',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element = {<SignIn />}/>
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
