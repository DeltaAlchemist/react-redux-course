import { Link } from "react-router-dom"
import GoogleAuth from '../GoogleAuth'

export const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Stream-me</Link>
            <div className="right menu">
                <Link to="/" className="item">All Streams</Link>
            </div>
            <GoogleAuth />
        </div>
    )
}