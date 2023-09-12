import React ,{useState} from 'react';
import Accordion from './Accordion'
import './App.css';

function App() {

  const[active, setActive] = useState();

  return (
    <div className="App">
      <h2>FAQ Application</h2>
      <Accordion title="Question 1" active={active} setActive={setActive}/>
      <Accordion title="Question 2" active={active} setActive={setActive}/>
      <Accordion title="Question 3" active={active} setActive={setActive}/>
      <Accordion title="Question 4" active={active} setActive={setActive}/>
      <Accordion title="Question 5" active={active} setActive={setActive}/>
    </div>
  );
}

export default App;
