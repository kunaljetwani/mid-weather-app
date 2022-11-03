import './App.css';
import { Route, Routes } from 'react-router-dom'
import Getweather from './components/Getweather'
import Converter from './components/Converter';
import Navigation from './components/Navigation';
import Home from './components/Home';



function App() {
  return (
    <div>
      

        <Navigation/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Getweather' element={<Getweather />}></Route>
        <Route path='/Converter' element={<Converter />}></Route>
      </Routes>

    </div>

  );
}

export default App;
