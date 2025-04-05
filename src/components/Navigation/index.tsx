// import sdjLogo from '../../assets/sdj.svg'
import './navigation.css'
import { useAppContext } from '../../appContext';

function Navigation() {
    const { navSelect, setNavSelect } = useAppContext();

    return <>
        <div id="navbar">
            <div id='nav-selectbox' className={navSelect} />
            <span className={`nav-button ${navSelect == 'one' ? 'nav-selected' : ''}`} onClick={() => setNavSelect('one')}>HI</span>
            <span className={`nav-button ${navSelect == 'two' ? 'nav-selected' : ''}`} onClick={() => setNavSelect('two')}>THOUGHTS</span>
            <span className={`nav-button ${navSelect == 'three' ? 'nav-selected' : ''}`} onClick={() => setNavSelect('three')}>EMPATHY</span>
        </div>
    </>
}

export default Navigation