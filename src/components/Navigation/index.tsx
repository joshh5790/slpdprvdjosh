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
            <div id='nav-selectbox' className={select} />
            <span className='nav-button' onClick={() => setSelect('one')}>HI</span>
            <span className='nav-button' onClick={() => setSelect('two')}>THOUGHTS</span>
            <span className='nav-button' onClick={() => setSelect('three')}>EMPATHY</span>
        </div>
    </>
}

export default Navigation