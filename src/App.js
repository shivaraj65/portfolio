import React,{useState} from 'react'
import './App.css'

// layouts imports
import Landing from './layouts/landing/landing'
import Background from './layouts/background/background'


function App() {
const [page, setpage] = useState(0)

  return (
    <div className="App">
        { page===0? <Landing/>:null }
        { page===1? <Background/>:null}
        { page===2? null:null }
        { page===3? null:null }
        { page===4? null:null }
        { page===5? null:null }
      
    </div>
  );
}

export default App;
