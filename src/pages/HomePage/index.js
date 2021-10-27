import React from 'react'
import { Link } from "react-router-dom";

function index() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/details">
                <button>details</button>
            </Link>
        </div>
    )
}

export default index
