import React from "react";
import Footer from "./Footer";
import { Outlet, Link } from "react-router-dom";
import userData from "../data/user";

function Layout() {
    return (
        <>
            <main className="container mt-3 mt-md-5 pt-3 pt-md-5">
                <div className="container-fluid d-block d-md-flex justify-content-md-between align-items-center">
                    <div className="container d-flex justify-content-between align-items-end align-items-md-center">
                        <Link className="navbar-brand fw-bold" to="/">
                            <h4 className="fw-bold">{userData.name}</h4>
                            <p className="text-secondary fw-light">
                                {userData.title}
                            </p>
                        </Link>
                        <nav className="navbar navbar-expand d-flex align-items-center">
                            <div
                                className="collapse navbar-collapse d-block d-md-flex"
                                id="navbarNav"
                            >
                                <ul className="navbar-nav">
                                    <li className="nav-item ">
                                        <Link to="about" className="nav-link ">
                                            About
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link
                                            to="projects"
                                            className="nav-link"
                                        >
                                            Projects
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link
                                            to="contact"
                                            className="nav-link "
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="ms-2 d-flex gap-3 justify-content-start justify-content-md-end align-items-center">
                        <a
                            href={userData.socials.facebook}
                            className="text-secondary social-icon"
                        >
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a
                            href={userData.socials.instagram}
                            className="text-secondary social-icon"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a
                            href={userData.socials.linkedin}
                            className="text-secondary social-icon"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a
                            href={userData.socials.github}
                            className="text-secondary social-icon"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="" className="social-icon ">
                            <i
                                className="fa-solid fa-moon text-warning"
                                id="mode"
                            ></i>
                        </a>
                    </div>
                </div>

                <div className="container">
                    <Outlet />
                </div>
                <Footer />
            </main>
        </>
    );
}

export default Layout;
