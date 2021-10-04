import React, { useState} from 'react'



function Navbar() {

    const wolf_logo = <FontAwesomeIcon icon={fa-wolf-pack-battalion} />
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Data wolf <FontAwesomeIcon icon="fa-brands fa-wolf-pack-battalion"/>
                </Link>
                <div className="nav-menu">
                    <ul className="nav-menu-list">
                        <li className="nav-item">
                            <FontAwesomeIcon icon="fal fa-sliders-h"/>
                            <Link to="/config" className="nav-links">
                                Configurations
                            </Link>
                        </li>
                        <li className="nav-item">
                            <FontAwesomeIcon icon="fas fa-filter"/>
                            <Link to="/handlers" className="nav-links" >
                                Handlers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <FontAwesomeIcon icon="fas fa-file-export"/>
                            <Link to="/outputs" className="nav-links" >
                                Outputs
                            </Link>
                        </li>
                    </ul>

                </div>
                <div className="language">
                    <FontAwesomeIcon icon="fas fa-globe" />
                </div>
                <div className="user">
                    <FontAwesomeIcon icon="far fa-user-circle" />
                    Administrator
                </div>


            </div>

        </nav>
        </>
    )
}

export default Navbar
