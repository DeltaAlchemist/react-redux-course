import React from 'react'
import ReactDOM from 'react-dom'

function getButtonText() {
    return 'Click on me!'
}

// Create a react component
const App = () => {
    // const buttonText = 'Click Me!'
    return(
        <div>
            <label className="label" for="name">
                Enter Name:
            </label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {getButtonText()}
            </button>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
