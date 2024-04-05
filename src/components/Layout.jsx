import Footer from "./Footer";
import { Outlet, Link } from "react-router-dom";
import userData from "../data/user";
import "./modeIcon.css";

function Layout() {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    };
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    };

    const theme = localStorage.getItem("theme");

    if (theme === "dark") setDarkMode();
    else setLightMode();

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    return (
        <>
            <main className="container mt-3 mt-md-5 pt-3 pt-md-5">
                <div className="container d-flex justify-content-between align-items-end">
                    <Link className="navbar-brand fw-bold" to="/">
                        <h4 className="fw-bold dark">{userData.name}</h4>
                        <p className="secondary fw-light">{userData.title}</p>
                    </Link>
                    {window.innerWidth > 430 ? (
                        <nav className="navbar navbar-expand d-flex align-items-end">
                            <div
                                className="collapse navbar-collapse d-block d-md-flex"
                                id="navbarNav"
                            >
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link">
                                            About
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/projects"
                                            className="nav-link"
                                        >
                                            Projects
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/experience"
                                            className="nav-link"
                                        >
                                            Experience
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/contact"
                                            className="nav-link"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    <Link to="/db" />
                                </ul>
                            </div>
                        </nav>
                    ) : null}
                    <div className="d-flex gap-3 mb-2">
                        <a
                            href={userData.socials.facebook}
                            className="secondary social-icon"
                        >
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a
                            href={userData.socials.instagram}
                            className="secondary social-icon"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a
                            href={userData.socials.linkedin}
                            className="secondary social-icon"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a
                            href={userData.socials.github}
                            className="secondary social-icon"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <div className="dark_mode">
                            <input
                                type="checkbox"
                                className="dark_mode_input"
                                id="darkmode-toggle"
                                onChange={toggleTheme}
                                defaultChecked={theme === "dark" ? true : false}
                            />
                            <label
                                htmlFor="darkmode-toggle"
                                className="dark_mode_label"
                            ></label>
                        </div>
                    </div>
                </div>
                {window.innerWidth <= 430 ? (
                    <nav className="navbar navbar-expand d-flex">
                        <div
                            className="collapse navbar-collapse d-block d-md-flex"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/projects" className="nav-link">
                                        Projects
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/experience" className="nav-link">
                                        Experience
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">
                                        Contact
                                    </Link>
                                </li>
                                <Link to="/db" />
                            </ul>
                        </div>
                    </nav>
                ) : null}
                <div className="container">
                    <Outlet />
                </div>
                <Footer />
            </main>
        </>
    );
}

export default Layout;
