import React from 'react'
import ReactDOM from 'react-dom'
import { FaWolfPackBattalion, FaSlidersH, FaRegListAlt, FaFileExport, FaGlobe, FaUserCircle } from 'react-icons/fa'

ReactDOM.render(<Navbar />, document.getElementById('root'));

function Navbar() {

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                Data wolf <FaWolfPackBattalion />
                <div className="nav-menu">
                    <ul className="nav-menu-list">
                        <li className="nav-item">
                            <FaSlidersH />
                                Configurations
                        </li>
                        <li className="nav-item">
                            <FaRegListAlt />
                                Handlers
                        </li>
                        <li className="nav-item">
                            <FaFileExport />
                                Outputs
                        </li>
                    </ul>

                </div>
                <div className="language">
                    <FaGlobe />
                </div>
                <div className="user">
                    <FaUserCircle />
                    Administrator
                </div>

            </div>

        </nav>
        </>
    )
}

export default Navbar
