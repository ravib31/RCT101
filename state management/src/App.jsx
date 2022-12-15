// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

// default import-
// import Chutiye from './Components/Counter'; 

// import  by name-
import {Counter} from './Components/Counter';
import Todo from './Components/Todo';

function App() {
 

  return (
    <div className="App">
      <Counter/>
      <Todo/>
       
    </div>
  )
}

export default App;
