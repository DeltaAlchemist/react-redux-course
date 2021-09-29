import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'

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


    return(
        <>
            <Search />
        </>
    )
}

export default App