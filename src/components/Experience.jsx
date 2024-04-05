import React from "react";
import userData from "../data/user";

function Experience() {
    return (
        <>
            <div className="background-light my-5 py-5">
                <h1 className="title fw-bold text-center text-md-start ms-md-5 dark mb-5">
                    Experience
                </h1>
                <div className="container mt-5 py-5 d-block d-md-flex mx-auto gap-1">
                    <div className="container">
                        <h2 className="fw-bold text-secondary">2024</h2>
                        <div className="rounded-3 shadow-sm p-3 bg-light">
                            <h3 className="sub-title fw-bold">Graduation</h3>
                            <h5 className="text-secondary">
                                University of Iloilo
                            </h5>
                            <p>Bachelor's degree in Information Technology.</p>
                        </div>
                    </div>

                    <div className="container mt-3 mt-md-0">
                        <h2 className="fw-bold text-secondary">2024</h2>
                        <div className="rounded-3 shadow-sm p-3 bg-light">
                            <h3 className="sub-title fw-bold">Internship</h3>
                            <h5 className="text-secondary">
                                Full Stack Web Developer
                            </h5>
                            <p>
                                Built a personal repository exclusively for
                                certain government in Iloilo. Designed the repo,
                                and communicated closely with senior web
                                developer.
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className="display-1 fw-bold text-md-start ms-md-5 dark">
                    Certificates
                </h2>
                <div className="container-fluid py-3 py-md-5 d-md-flex flex-wrap mx-auto gap-4 align-items-center justify-content-center">
                    {userData.certificates.map((certificate, index) => (
                        <div
                            key={index}
                            className="card shadow-sm p-3 rounded-3 border-0 col-12 col-md-5 col-lg-3 mt-3 mt-md-0"
                        >
                            <small className="fw-bold text-secondary">
                                {certificate.title}
                            </small>
                            <small className="text-secondary">
                                {certificate.issuedBy}
                            </small>
                            <a
                                href={certificate.link}
                                className="fw-medium text-dark text-decoration-none icon-link icon-link-hover"
                                target="_blank"
                            >
                                View Certificate{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-right-short"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                    />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Experience;
