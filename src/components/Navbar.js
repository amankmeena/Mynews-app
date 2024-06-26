import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" style={{borderBottom: '3px solid black'}}>
                    <div className="container-fluid">

                        <Link className="navbar-brand" to="/"> NewsBee </Link>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About">About</Link>
                                </li>
                                
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li> */}


                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Change Category
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/">General</Link></li>
                                        <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                        <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                        <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                        <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                        <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                        <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                    </ul>
                                </li>

                                {/* <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Country</label>
                                    <select className="form-select" id="inputGroupSelect01">
                                        <option defaultValue="in">India</option>
                                        <option value="ar"> Argentina </option>
                                        <option value="au"> Australia </option>
                                        <option value="at"> Austria </option>
                                        <option value="be"> Belgium </option>
                                        <option value="br"> Brazil </option>
                                        <option value="bg"> Bulgaria </option>
                                        <option value="ca"> Canada </option>
                                        <option value="cn"> China </option>
                                        <option value="co"> Colombia </option>
                                        <option value="cu"> Cuba </option>
                                        <option value="cz"> Czech Republic </option>
                                        <option value="eg"> Egypt </option>
                                        <option value="fr"> France </option>
                                        <option value="de"> Germany </option>
                                        <option value="gr"> Greece </option>
                                        <option value="hk"> Hong Kong </option>
                                        <option value="hu"> Hungary </option>
                                        <option value="id"> Indonesia </option>
                                        <option value="ie"> Ireland </option>
                                        <option value="il"> Israel </option>
                                        <option value="it"> Italy </option>
                                        <option value="jp"> Japan </option>
                                        <option value="lv"> Latvia </option>
                                        <option value="lt"> Lithuania </option>
                                        <option value="my"> Malaysia </option>
                                        <option value="mx"> Mexico </option>
                                        <option value="ma"> Morocco </option>
                                        <option value="nl"> Netherlands </option>
                                        <option value="nz"> New Zealand </option>
                                        <option value="ng"> Nigeria </option>
                                        <option value="no"> Norway </option>
                                        <option value="ph"> Philippines </option>
                                        <option value="pl"> Poland </option>
                                        <option value="pt"> Portugal </option>
                                        <option value="ro"> Romania </option>
                                        <option value="ru"> Russia </option>
                                        <option value="sa"> Saudi Arabia </option>
                                        <option value="rs"> Serbia </option>
                                        <option value="sg"> Singapore </option>
                                        <option value="sk"> Slovakia </option>
                                        <option value="si"> Slovenia </option>
                                        <option value="za"> South Africa </option>
                                        <option value="kr"> South Korea </option>
                                        <option value="se"> Sweden </option>
                                        <option value="ch"> Switzerland </option>
                                        <option value="tw"> Taiwan </option>
                                        <option value="th"> Thailand </option>
                                        <option value="tr"> Turkey </option>
                                        <option value="ae"> UAE </option>
                                        <option value="ua"> Ukraine </option>
                                        <option value="gb"> United Kingdom </option>
                                        <option value="us"> United States </option>
                                        <option value="ve"> Venuzuela </option>
                                    </select>
                                </div> */}
                            </ul>

                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar