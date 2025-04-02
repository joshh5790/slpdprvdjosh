import Navigation from './components/Navigation'
import './App.css'
import './components/Navigation/pagehead'
import PageHead from './components/Navigation/pagehead'
import { useState } from 'react'
import About from './components/Pages/About'
import Thoughts from './components/Pages/Thoughts'
import Flowchart from './components/Pages/Flowchart'

function App() {
  const [select, setSelect] = useState<string>('one');
  // const [gradient, setGradient] = useState<number>(50);

  // add subscribe to about page
  
  return (
    <div id="home">
      <PageHead />
      <Navigation select={select} setSelect={setSelect} />
      <div id="content">
        <div id='page-switcher' className={`page-${select}`}>
          <About setSelect={setSelect}/>
          <Thoughts />
          <Flowchart />
        </div>
      </div>
      <div id='hide-left'/>
      <div id='hide-right'/>
    </div>
  )
}

export default App
