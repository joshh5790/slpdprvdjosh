import Category from './category'
import './recs.css'
import { CategoryType } from '../../../types'
import categories from '../../../assets/rec-categories'

function Recs() {
    return <div id='recs'>
        <p id='recs-title'><b>Recs</b></p>
        <p id='recs-subtitle'>So I don't draw a blank every time someone asks me to recommend something</p>
        <div id='recs-list'>
            {categories.map((category: CategoryType) => (
                <Category key={category.id} id={category.id} name={category.name} />
            ))}
        </div>
    </div>
}

export default Recs