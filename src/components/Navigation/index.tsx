// import sdjLogo from '../../assets/sdj.svg'
import './navigation.css'
import { useAppContext } from '../../appContext';

function Navigation() {
    const { navSelect, setNavSelect, enter } = useAppContext();

    return <>
        <div id="home-text" className={enter ? 'hidden' : ''}>
          <div id="home-title">
            <i style={{"color":"rgb(10,10,10,80%)"}}>sup, im </i> <span style={{"color":"rgb(244,244,244,80%)"}}> thoughts</span>
          </div>
            <p className='subheader'>welcome to the library of <b>sleep deprived <i style={{"color":"rgb(10,10,10,80%)"}}>josh</i></b></p>
        </div>
        <div id="navbar" className={enter ? '' : 'hidden' }>
            <div id='nav-selectbox' className={navSelect} />
            <span className={`nav-button ${navSelect == 'one' ? 'nav-selected' : ''}`} onClick={() => setNavSelect('one')}>WELCOME</span>
            <span className={`nav-button ${navSelect == 'two' ? 'nav-selected' : ''}`} onClick={() => setNavSelect('two')}>THOUGHTS</span>
            <span className={`nav-button ${navSelect == 'three' ? 'nav-selected' : ''}`} onClick={() => setNavSelect('three')}>WORLDVIEWS</span>
        </div>
    </>
}

export default Navigation