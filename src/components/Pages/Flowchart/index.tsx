import './flowchart.css'
import flowchart from '../../../assets/flowchart.png'

function Flowchart() {
    return <div id='flowchart'>
        <p id='flowchart-title'>{'Lifecycle of the Human Experience (simplified)'}</p>
        <img src={flowchart} id='flowchart-img'/>
        <p>All worldviews and beliefs are justified</p>
        <p>I'll explain later</p>
    </div>
}

export default Flowchart