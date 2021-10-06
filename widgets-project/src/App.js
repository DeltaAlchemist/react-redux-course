import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

const App = () => {

    const items = [
        {
            title: 'What is React?',
            content: 'React is a front end javascript framework'
        },
        {
            title: 'Why use React?',
            content: 'React is a favorite JS library amongst engineers'
        },
        {
            title: 'How do you use React?',
            content: 'You use React by creating components'
        }
    ]
    
    const options = [
        {
            label: 'The Color Red',
            value: 'red'
        },
        {
            label: 'The Color Green',
            value: 'green'
        },
        {
            label: 'A Shade of Blue',
            value: 'blue'
        }
    ]

    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)

    return(
        <>
            <button className="small ui button" onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            { showDropdown ?
                <Dropdown 
                    selected={selected} 
                    onSelectedChange={setSelected} 
                    options={options} 
                /> 
                : null
            }
            
        </>
    )
}

export default App