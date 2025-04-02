import './about.css'
import AboutImg from '../../../assets/about-img.png'
import Markdown from 'react-markdown'
import { useState } from 'react'

interface AboutProps {
    setSelect: (select:string) => void
}

function About({ setSelect }: AboutProps) {
    const [clicked, setClicked] = useState(false)
    return <div id='about'>
        <div id='about-content'>
            <Markdown>
                {
                    '**Hi, I\'m Josh.**\n\n Grew up with a massive ego and life humbled me into depression during my teens, but faith helped me get out of it. Entered my churchy phase and started thinking about hella existential shit- loved it so I went to school for psychology and philosophy.\n\n This is mostly just a place for me to organize and share my thoughts over the years, but if you wanna talk about anything feel free to hmu on ig @sleepdeprivedjosh'
                }
            </Markdown>
        </div>
        <div id='about-img-container'>
            <img src={AboutImg} id='about-img'/>
            <div id='about-button' onClick={() => {
                setClicked(true)
                setTimeout(() => setSelect('two'), 3000)
            }} className={clicked ? 'clicked' : ''}>LOSE SLEEP WITH ME</div>
        </div>
    </div>
}

export default About