import React from "react";
import userData from "../data/user";

function Footer() {
    return (
        <>
            <footer className="container d-flex justify-content-between align-items-center pb-5 pt-3 border-top">
                <div>
                    <h4 className="fw-bold dark">{userData.name}.</h4>
                </div>
                <div className="socials d-flex justify-content-center align-items-center gap-3">
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
                </div>
            </footer>
        </>
    );
}

export default Footer;
