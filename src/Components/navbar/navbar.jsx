import React from "react";
import "./navbar.css";
import CartWidget from '../cart/CartWidget.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import logo from "../img/logo.png"


function NavBar(){

    return (
        <div className="nav-container">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <div className="logo">
                        <img className=" imagen-logo " src={logo} alt="Logo" />
                        <p>Moxi Store</p>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <button className="nav-link" aria-current="page" >Inicio</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" >Armá tu PC</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" >Notebooks</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" >Periféricos</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" >Monitores</button>
                            </li>
                        </ul>
                    </div>
                    <div className="cart d-flex flex-row-reverse">
                        <div className="menu-burger ">
                            <button className="navbar-toggler d-flex justify-content bg-light icon-burger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon text-light bg-light"></span>
                            </button>
                        </div>
                        <CartWidget />
                    </div>
                    <div className="buscador">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar productos" aria-label="Search" />
                            <button className="btn " type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#621414", fontSize: "20px" }} /></button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>

    )
}

export default NavBar;
