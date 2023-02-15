import React from "react";
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <div>
                <Link className="btn btn-outline-primary" to='/user'>Register</Link>
                <Link className="btn btn-outline-primary" to='/instruction'>Guidelines</Link>
        </div>
    )
}