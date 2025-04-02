// import sdjLogo from '../../assets/sdj.svg'
import './navigation.css'
import { Dispatch, SetStateAction } from 'react';

type NavProps = {
    select: string;
    setSelect: Dispatch<SetStateAction<string>>;
}

function Navigation({ select, setSelect }: NavProps) {
    return <>
        <div id="navbar">
            <span className={`nav-button ${select == 'one' ? 'nav-selected' : ''}`} onClick={() => setSelect('one')}>HI</span>
            <span className={`nav-button ${select == 'two' ? 'nav-selected' : ''}`} onClick={() => setSelect('two')}>THOUGHTS</span>
            <span className={`nav-button ${select == 'three' ? 'nav-selected' : ''}`} onClick={() => setSelect('three')}>EMPATHY</span>
        </div>
    </>
}

export default Navigation