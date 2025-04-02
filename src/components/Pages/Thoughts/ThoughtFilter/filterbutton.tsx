import './filterbutton.css'

interface FilterProps {
    name: string,
    filter?: string,
    setFilter?: (filter:string) => void;
}

function FilterButton({name, filter, setFilter}: FilterProps) {
    const selected = filter === name;
    return <div className={`filter-button ${selected ? 'selected' : ''}`} 
        onClick={() => {
            if (setFilter) {
                setFilter(name)
            }
    }}>
        {name}
    </div>
}

export default FilterButton