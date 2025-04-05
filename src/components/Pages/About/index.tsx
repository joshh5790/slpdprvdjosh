import './about.css'
import AboutImg from '../../../assets/about-img.png'
import Markdown from 'react-markdown'
import { useAppContext } from '../../../appContext'

function About() {
    const { setNavSelect, enter, setEnter } = useAppContext()

    return <div id='about'>
        <div id='about-content'>
            <Markdown>
                {
                    '**I\'m Josh.**\n\n I grew up with a massive ego and life humbled me into depression during my teens, but faith helped me get out of it. Entered my churchy phase and started thinking about hella existential shit- loved it so I went to school for psychology and philosophy.\n\n This is mostly just a place for me to organize and share my thoughts over the years, but if you wanna talk about anything feel free to ask on instagram'
                }
            </Markdown>
        </div>
        <div id="socials">
            <a href='https://www.instagram.com/sleepdeprivedjosh/' target='_blank'>
                <i className="fa-brands fa-instagram" />
            </a>
        </div>
        <div id='about-img-container'>
            <img src={AboutImg} id='about-img'/>
            <div id='about-button' onClick={() => {
                setEnter(true)
                setTimeout(() => setNavSelect('two'), 1500)
            }} className={enter ? 'clicked' : ''}>LOSE SLEEP WITH ME</div>
        </div>
    </div>
}

export default About