import React, { useEffect, useState } from "react";
import axios from 'axios'

const Search = () => {

    const [term, setTerm] = useState('apple')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])
    

    /* Debouncing useEffect to handle extra intial API call

       Anytime this useEffect changes, we're going to queue up a change to 'debounceTerm', 
       that's going to execute in 800ms 
    */
    useEffect(() => { // It will run anytime 'term' changes
        const timerID = setTimeout(() => { // Update deboncedTerm whenever this function is executed
            setDebouncedTerm(term)
        }, 800)

        return () => { // Clean-up function
            clearTimeout(timerID)
        }
    }, [term]) // 'term' is going to change anytime user types

    /* Whenever this useEffect runs, we're going to call search(), that'll make a request */
    useEffect(() => { // It will run whenever 'debouncedTerm' first renders
        const search = async() => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                }
            })
            setResults(data.query.search)
        }

        if (debouncedTerm) { search() }

    }, [debouncedTerm])


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