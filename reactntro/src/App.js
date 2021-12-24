
import './App.css';
import {useState} from 'react'

function App() {
  const [count,setCount] = useState(0);

  const addOne = (value) => {
    setCount(count+value);
  }

  const doubleOne = (value) => {
    setCount(count*value)
  }

  return (
    <div className="App">
      <h2>Counter:{count}</h2>
      <button onClick={()=>addOne(-1)}>Minus -</button>
      <button onClick={()=>addOne(1)}>Plus +</button>
      <button onClick={()=>doubleOne(2)}>Double X</button>
    </div>
  );
}

export default App;
