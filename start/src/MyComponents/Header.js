import React from 'react'
import { Link } from 'react-router-dom';



export const Header = () => {
    return (
        <div className="header">
            <>
                <h1>Portfolio Management</h1>
                <br />

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to='/'>Home</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Login
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="nav-link active" to={"/admin-login"}>Admin Login</Link></li>
                                        <li><Link className="nav-link active" to={"/userlogin"}>User Login</Link></li>

                                    </ul>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
                        <hr/>
            </>



        </div>
    )
}


