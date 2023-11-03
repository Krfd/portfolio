import React from "react";
import userData from "./../data/user";
import html from "./../icons/html.png";
import css from "./../icons/css-3.png";
import bootstrap from "./../icons/bootstrap.png";
import tailwind from "./../icons/tailwindcss3.png";
import js from "./../icons/js.png";
import react from "./../icons/react2.png";
import php from "./../icons/php.png";
import sql from "./../icons/sql.png";
import vscode from "./../icons/vscode.png";
import git from "./../icons/git.png";
import github from "./../icons/github.png";
import firebase from "./../icons/firebase.png";
import xampp from "./../icons/xampp.png";
import postman from "./../icons/postman.png";

function About() {
    return (
        <>
            <div className="bg-light my-5 py-5">
                <h1 className="title fw-bold text-center text-md-start ms-md-5">
                    About
                </h1>
                <div className="p-3 p-md-5">
                    <p className="fs-3 dark">
                        <span className="fw-bold">Hi there! </span> I'm{" "}
                        <span className="fw-bold">Karl Fredriech Getuya</span>{" "}
                        and I'm an aspiring Full stack Web Developer. Currently
                        my capabilities covers front end development utilizing{" "}
                        <span className="fw-bold">HTML</span>,{" "}
                        <span className="fw-bold">CSS</span>,{" "}
                        <span className="fw-bold">Bootstrap</span>,{" "}
                        <span className="fw-bold">Tailwind</span>,{" "}
                        <span className="fw-bold">JavaScript</span>, and{" "}
                        <span className="fw-bold">React</span>. I am also fond
                        of building designs and prototyping using{" "}
                        <span className="fw-bold">Figma</span>.
                    </p>
                </div>
                <div className="d-flex flex-column-reverse flex-md-row my-0 my-md-3 gap-3 ">
                    <div className="p-3 p-md-5 pe-md-0 pe-lg-5 col-12 col-md-4 ">
                        <h2>Contact</h2>
                        <p className="dark fs-5">
                            For more information, you can contact me through{" "}
                            {""}
                            <a
                                href="mailto:karlfredriechgetuya@gmail.com"
                                className="text-dark fw-bold"
                                style={{ textDecoration: "underline" }}
                            >
                                Email
                            </a>
                            . I'll try to get back to you as soon as I'm
                            available.
                        </p>
                        <div className="mt-5">
                            <h2>I'm also accepting freelance job!</h2>
                            <p className="dark fs-5">
                                You can check my projects and activities for
                                more references.
                            </p>
                        </div>
                        <div className="mt-5">
                            <h2>Social Links</h2>
                            <ul className="list-unstyled">
                                <li className="nav-item d-flex align-items-center mt-3">
                                    <a
                                        href={userData.socials.facebook}
                                        className="nav-link text-decoration-none fw-bold secondary ms-3 icon-link icon-link-hover fs-5"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-arrow-right me-2"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                            />
                                        </svg>
                                        Facebook
                                    </a>
                                </li>
                                <li className="nav-item d-flex align-items-center mt-3">
                                    <a
                                        href={userData.socials.instagram}
                                        className="nav-link text-decoration-none fw-bold secondary ms-3 icon-link icon-link-hover fs-5"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-arrow-right me-2"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                            />
                                        </svg>
                                        Instagram
                                    </a>
                                </li>
                                <li className="nav-item d-flex align-items-center mt-3">
                                    <a
                                        href={userData.socials.linkedin}
                                        className="nav-link text-decoration-none fw-bold secondary ms-3 icon-link icon-link-hover fs-5"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-arrow-right me-2"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                            />
                                        </svg>
                                        Linkedin
                                    </a>
                                </li>
                                <li className="nav-item d-flex align-items-center mt-3">
                                    <a
                                        href={userData.socials.github}
                                        className="nav-link text-decoration-none fw-bold secondary ms-3 icon-link icon-link-hover fs-5"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-arrow-right me-2"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                            />
                                        </svg>
                                        Github
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-3 p-md-5 col-12 col-md-8">
                        <p className="fs-5">
                            As a beginner, I'm still learning and exploring new
                            things. I'm also open to any suggestions and
                            feedbacks that can help me improve my skills. I'm a
                            self-taught student and I keep on learning new
                            things everyday. I'm also a fast learner and I can
                            easily adapt to new environment and popular
                            technologies.
                        </p>
                        <button
                            className="bg-dark light text-center py-2 px-3 rounded-3 border-0 fw-bold mt-5"
                            style={{ cursor: "default" }}
                        >
                            My Stack and Tools
                        </button>
                        <div className="d-flex flex-wrap text-center gap-3 mt-5">
                            <div className="shadow-sm p-3 rounded-3">
                                <img
                                    src={html}
                                    alt="HTML"
                                    className="technology"
                                />
                            </div>
                            <div className="shadow-sm p-3 rounded-3">
                                <img
                                    src={css}
                                    alt="CSS"
                                    className="technology"
                                />
                            </div>
                            <div className="shadow-sm p-3 rounded-3">
                                <img
                                    src={bootstrap}
                                    alt="Bootstrap"
                                    className="technology"
                                />
                            </div>
                            <div className="shadow-sm p-3 rounded-3">
                                <img
                                    src={tailwind}
                                    alt="Tailwind"
                                    className="technology"
                                />
                            </div>
                            <div className="shadow-sm p-3 rounded-3">
                                <img
                                    src={js}
                                    alt="Javascript"
                                    className="technology"
                                />
                            </div>
                            <div className="shadow-sm p-3 rounded-3">
                                <img
                                    src={react}
                                    alt="React"
                                    className="technology"
                                />
                            </div>
                            <div className="shadow-sm p-3 rounded-3">
                                <img
                                    src={php}
                                    alt="PHP"
                                    className="technology"
                                />
                            </div>
                            <div className="shadow-sm p-3 rounded-3">
                                <img
                                    src={sql}
                                    alt="SQL"
                                    className="technology"
                                />
                            </div>
                            <div className="shadow-sm p-3 rounded-3">
                                <img
                                    src={vscode}
                                    alt="VS Code"
                                    className="technology"
                                />
                            </div>
                            <div className="shadow-sm p-3 rounded-3">
                                <img
                                    src={git}
                                    alt="Git"
                                    className="technology"
                                />
                            </div>
                            <div className="shadow-sm p-3 rounded-3">
                                <img
                                    src={firebase}
                                    alt="Firebase"
                                    className="technology"
                                />
                            </div>
                            <div className="shadow-sm p-3 rounded-3">
                                <img
                                    src={postman}
                                    alt="Postman"
                                    className="technology"
                                />
                            </div>
                            <div className="shadow-sm p-3 rounded-3">
                                <img
                                    src={xampp}
                                    alt="XAMPP"
                                    className="technology"
                                />
                            </div>
                            <div className="shadow-sm p-3 rounded-3">
                                <img
                                    src={github}
                                    alt="Github"
                                    className="technology"
                                />
                            </div>
                        </div>

                        <button
                            className="bg-dark light text-center py-2 px-3 rounded-3 border-0 fw-bold mt-5"
                            hidden
                            style={{ cursor: "default" }}
                        >
                            Reviews
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
