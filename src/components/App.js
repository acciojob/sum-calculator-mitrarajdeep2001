
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
const [sum, setSum] = useState(0)
function calculateSum(e){
  
  setSum(sum + +e.target.value)
}
  return (
    <div>
        <h1>Sum Calculator</h1>
        <input type="number" onClick={calculateSum}/>
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App
