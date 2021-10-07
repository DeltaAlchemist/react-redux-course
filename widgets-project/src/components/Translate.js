import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'nl'
    },
    {
        label: 'Portuguese',
        value: 'pt'
    },
    {
        label: 'Japanese',
        value: 'ja'
    },

]

const Translate = () => {

    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState("")

    return(
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input 
                        value={text} 
                        onChange={e => setText(e.target.value)} 
                        placeholder="Type your text here"
                    />
                </div>
                
            </div>
            <Dropdown
                label="Select a Language" 
                options={options} 
                selected={language} 
                onSelectedChange={setLanguage}
            />
            <div className="ui section divider" />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language}/>
        </div>
    )
}

export default Translate