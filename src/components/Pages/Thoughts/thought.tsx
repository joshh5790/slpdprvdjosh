import './thought.css'
import { Post } from '../../../types'
import Markdown from 'react-markdown'
import { useState } from 'react'
import FilterButton from './ThoughtFilter/filterbutton'


function Thought({ title, content, tags }: Post) {
    const [expand, setExpand] = useState(false)

    // remove delay from animation, useref for thought-content height and set it + 10rem as the max-height

    return <div className={`thought ${expand ? 'expanded' : ''}`} onClick={() => setExpand(!expand)}>
        <div className='fade-out' />
        <p className='thought-title'><b>{title}</b></p>
        <div className='post-tags'>
            {tags.map((name:string, index: number) => (
                <FilterButton key={index} name={name}/> 
            ))}
        </div>
        <p className='thought-content'>
            <Markdown>{content}</Markdown>
        </p>
    </div>
}

export default Thought