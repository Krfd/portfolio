import React from "react";
import "../index.css";

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
                <h1 className="title fw-bold text-center text-md-start ms-md-5 dark mb-5">
                    Certificates
                </h1>
            </div>
        </>
    );
}

export default Experience;
