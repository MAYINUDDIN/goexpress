import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className="App">

      <Navbar ></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>

      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
