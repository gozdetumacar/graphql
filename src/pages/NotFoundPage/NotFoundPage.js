import React from 'react'
import './notfound.css'
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="notfound-container">
            <p className="error">404</p>
            <p className="errorpage">OOPS! PAGE NOT FOUND</p>
            <Link to={"/"} className="home-link">
                <p>GO HOME</p>
            </Link>
        </div>
    )
}

export default NotFoundPage
