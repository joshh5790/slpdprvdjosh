import './filter.css'
import { useState } from 'react'
import FilterButton from './filterbutton'

const filters: string[] = ['all', 'arguments', 'christianity', 'definitions', 'human nature', 'one liners', 'personal', 'edgy teen*']

interface ThoughtFilterProps {
    filter: string,
    setFilter: (filter: string) => void;
}

function ThoughtFilter({ filter, setFilter }: ThoughtFilterProps) {
    const [minimized, setMinimized] = useState(true)
    return <div id='filter-bar' className={minimized ? 'minimized' : ''}>
        <div className='filter-bar-toggle' onClick={() => setMinimized(!minimized)}>
            <b style={{'fontSize': '0.8rem'}}>Filters</b>    
            <i className={`fa-solid ${minimized ? 'fa-caret-down' : 'fa-caret-up'}`} />
        </div>
        {filters.map((name: string, index: number) => (
            <FilterButton key={index} name={name} filter={filter} setFilter={setFilter} />
        ))}
        <div style={{'fontSize': '0.7rem', 'textAlign': 'left'}}>* edgy teen thoughts are from way back when- I don't necessarily agree with them now but I still believe that they're worth thinking about</div>
    </div>
}

export default ThoughtFilter