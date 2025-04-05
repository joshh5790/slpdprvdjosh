import Navigation from './components/Navigation'
import './App.css'
import PageHead from './components/Navigation/pagehead'
import About from './components/Pages/About'
import Thoughts from './components/Pages/Thoughts'
import Flowchart from './components/Pages/Flowchart'
import { useAppContext } from './appContext'

function App() {
  const { navSelect, enter } = useAppContext();

  // add subscribe to about page
  
  return (<>
      <div id='background' className={enter ? 'night' : ''} />
      <div id="home">
        <PageHead />
        <Navigation />
        <div id='content' className={`page-${navSelect}`}>
          <About />
          <Thoughts />
          <Flowchart />
        </div>
      </div>
  </>
  )
}

export default App
