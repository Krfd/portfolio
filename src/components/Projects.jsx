import React from "react";
import api1 from "../assets/api1.png";
import api3 from "../assets/api3.png";
import game1 from "../assets/game1.png";
import game2 from "../assets/game2.png";
import wikipedia1 from "../assets/wikipedia1.png";
import wikipedia2 from "../assets/wikipedia2.png";
import userData from "./../data/user";

function Projects() {
    return (
        <>
            <div className="bg-light my-5 py-5">
                <h1 className="title fw-bold text-center text-md-start ms-md-5">
                    Projects
                </h1>
                <div className="d-block d-md-flex justify-content-center flex-wrap my-5 py-3 ">
                    <div className="col-12 col-md-6 p-5 project-container">
                        <h2 className="dark text-center">
                            {userData.projects.project3.title}
                        </h2>
                        <a href={userData.projects.project3.link}>
                            <div className="d-flex justify-content-between project-img ms-0 ps-3 ms-md-3 ps-md-3 ms-lg-5 ps-lg-5 mt-5">
                                <img
                                    src={api3}
                                    alt=""
                                    className="w-100"
                                    style={{ position: "absolute" }}
                                />
                                <img src={api1} alt="" className="w-25" />
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-md-6 p-5 project-container">
                        <h2 className="dark text-center">
                            {userData.projects.project2.title}
                        </h2>
                        <a href={userData.projects.project2.link}>
                            <div className="d-flex justify-content-between project-img ms-3 ps-5 ms-lg-5 pt-5">
                                <img
                                    src={game2}
                                    alt=""
                                    className="w-75"
                                    style={{ position: "absolute" }}
                                />
                                <img src={game1} alt="" className="w-25" />
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-md-6 p-5 project-container">
                        <h2 className="dark text-center">
                            {userData.projects.project1.title}
                        </h2>
                        <a href={userData.projects.project1.link}>
                            <div className="d-flex justify-content-between project-img ms-3 ps-5 ms-lg-5 pt-5">
                                <img
                                    src={wikipedia1}
                                    alt=""
                                    className="w-25"
                                    style={{ position: "absolute" }}
                                />
                                <img
                                    src={wikipedia2}
                                    alt=""
                                    className="w-100"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
