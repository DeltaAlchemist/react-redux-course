import React, { useEffect, useState } from "react";
import axios from 'axios'

const Search = () => {

    const [term, setTerm] = useState('apple')
    const [results, setResults] = useState([])
    
    useEffect(() => {
        const search = async() => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            })
            setResults(data.query.search)
        }

        // Search on inital render the base value of term ('apple') without the 800ms timeout
        if (term && !results.length) { 
            search();
        } else { // if it's not the initial render, uses the 800ms timeout normally
            const timeoutID = setTimeout(() => {
                if (term) { 
                    search() 
                }
            }, 800)
        
            // Clean-up function to cancel the previous timer
            return () => {
                clearTimeout(timeoutID)
            }
        }

    }, [term, results.length])

    const renderedResults = results.map((result) => {
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        ) 
    })
    return(
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label>Search</label>
                    <input
                        value={term}
                        placeholder='Enter Search Term here'
                        onChange={e => setTerm(e.target.value)} 
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search