import logo from './logo.svg';
import './App.css';
import { ClassNames } from '@emotion/react';
import Navigation from './user/components/Navigation/Navigation';
import Home from './user/Pages/Home/Home';

function App() {
  return (
    <div className='App'>
      <Navigation/>
      <div>
        <Home/>
      </div>
    
    </div>
  );
}

export default App;
