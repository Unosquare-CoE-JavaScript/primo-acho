import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [buttonColor, setButtonColor] = useState('red');
  const newButtoncolor = buttonColor === 'red' ? 'blue': 'red';
  const [isAvailable, setIsAvaibale] = useState(false);
  return (
    <div>
      <button style={{backgroundColor: buttonColor}}
      onClick={()=>setButtonColor(newButtoncolor)}
      disabled={isAvailable}
      >Change to {newButtoncolor}</button>
      <input type='checkbox' value={isAvailable} onChange={()=>setIsAvaibale(!isAvailable)}/>
    </div>
  );
}

export default App;
