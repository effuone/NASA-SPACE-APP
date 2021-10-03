import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Button, Container} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { NavLink, useHistory } from 'react-router-dom'
import { routes } from '../routes'

function NavBar({style}) {
    return (
        <nav className="navbar navbar-expand-sm fixed-top  navbar-dark" style={style}>
            <div className="container-sm">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Logo here </a>
                <div className="collapse navbar-collapse" id="navbar1">
                    <ul className="navbar-nav">
                        {routes.map(({title, path}) => 
                            <li className="nav-item active">
                                <a className="nav-link" href={path}>{title}</a>
                            </li>  
                        )}
                    </ul>
                </div>
            </div>
        </nav> 
    )
}

export default NavBar
