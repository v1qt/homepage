
import React from "react"
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';



function NavBar() {

    return (

        <div className="navbar">
            <div className="toggleButton">
                <button>Button</button>
            </div>

         <div>
            <Button variant="contained">Hello World</Button>
         </div>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>

        </ul>
        </div>
    );

}

export default NavBar;