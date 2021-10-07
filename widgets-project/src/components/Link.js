import React from "react";

const Link = ({ className, href, children }) => { 
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) { // open in a new tab
            return
        }
        event.preventDefault()
        window.history.pushState({}, '', href)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }
    return(
        <a onClick={onClick} className={className} href={href}>{children}</a>
    )
}

export default Link