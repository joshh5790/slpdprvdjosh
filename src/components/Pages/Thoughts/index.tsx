import './thoughts.css'
import Thought from './thought'
import posts from '../../../assets/posts'
import { Post } from '../../../types'
import { useState } from 'react'
import ThoughtFilter from './ThoughtFilter'

function Thoughts() {
    // Set filter in react context later so that it saves when clicking to About page
    const [filter, setFilter] = useState('all')
    return<div id="thoughts">
        <ThoughtFilter filter={filter} setFilter={setFilter} />
        <div id='thoughts-list'>
            {posts.filter((post: Post) => {
                if (post['tags'].includes(filter) || filter === 'all') return true
                return false
            }).map((post: Post) => (
                <Thought key={post.id} id={post.id} title={post.title} content={post.content} tags={post.tags} />
            ))}
        </div>
    </div> 
}

export default Thoughts