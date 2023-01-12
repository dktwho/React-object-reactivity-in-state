import { useState } from 'react';
import './App.css';

function App() {
  const [obj, setObj] = useState({
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
  })

  function changeProp1() {
    setObj({...obj, ...{prop1: 'value1NEW'}})
  }


  return (
    <div className="App">
      <span>{obj.prop1}</span> <button onClick={changeProp1}>change 1 </button> <br />
      <span>{obj.prop2}</span> <button onClick={() => setObj({...obj, ...{prop2: 'value2NEW'}})}>change 2</button><br />
      <span>{obj.prop3}</span> <button onClick={() => setObj({...obj, ...{prop3: 'value3NEW'}})}>change 3</button><br />

    </div>
  );
}

export default App;
