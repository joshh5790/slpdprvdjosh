import './category.css'
import { CategoryType } from '../../../types'
import Markdown from 'react-markdown'
import { useState, useRef } from 'react'


function Category({ name }: CategoryType) {
    const [expand, setExpand] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)

    return <div className='category' 
                style={{ 'maxHeight': `${expand ? `calc(${contentRef.current?.clientHeight}px + 3rem)` : '3rem'}`}} 
                onClick={() => setExpand(!expand)}>
        <p className='category-title'>
            { expand ? <i className="fa-solid fa-caret-down" /> : <i className="fa-solid fa-caret-right" />}
            &nbsp;&nbsp;<b>{name}</b>
        </p>
        <p className='category-content' ref={contentRef}>
            <Markdown></Markdown>
        </p>
    </div>
}

export default Category