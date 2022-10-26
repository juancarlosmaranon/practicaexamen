import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <h1>Menu Rutas</h1>
                {/* <!-- A grey horizontal navbar that becomes vertical on small screens --> */}
                <nav className="navbar navbar-expand-sm bg-light">

                    <div className="container-fluid">
                        {/* <!-- Links --> */}
                        <ul class="navbar-nav">
                            <li className="nav-item bg-danger">
                                <NavLink className="nav-link text-light" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item bg-danger">
                                <NavLink className="nav-link text-light" to="/customers">Clientes</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
