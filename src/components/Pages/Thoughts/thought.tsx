import './thought.css'
import { Post } from '../../../types'
import Markdown from 'react-markdown'
import { useState, useRef } from 'react'
import FilterButton from './ThoughtFilter/filterbutton'


function Thought({ title, content, tags }: Post) {
    const [expand, setExpand] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)

    return <div className='thought' 
                style={{ 'maxHeight': `${expand && contentRef.current?.clientHeight ? '10rem' : `calc(${contentRef.current?.clientHeight}px + 6rem)`}`}} 
                onClick={() => setExpand(!expand)}>
        <div className='fade-out' />
        <p className='thought-title'><b>{title}</b></p>
        <div className='post-tags'>
            {tags.map((name:string, index: number) => (
                <FilterButton key={index} name={name}/> 
            ))}
        </div>
        <p className='thought-content' ref={contentRef}>
            <Markdown>{content}</Markdown>
        </p>
    </div>
}

export default Thought