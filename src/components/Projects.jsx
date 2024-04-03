import React from "react";
import api1 from "./../assets/api1.png";
import game1 from "./../assets/game1.png";
import game2 from "./../assets/game2.png";
import wikipedia1 from "./../assets/wikipedia1.png";
import wikipedia2 from "./../assets/wikipedia2.png";
import capstone from "./../assets/capstone.png";
import userData from ".././data/user";

function Projects() {
    return (
        <>
            <div className="background-light my-5 py-5">
                <h1 className="title fw-bold text-center text-md-start ms-md-5 dark">
                    Projects
                </h1>
                <div className="my-5">
                    <div className="d-block d-md-flex gap-5 mt-5 mt-md-0">
                        <div className="p-5 col project-container">
                            <h4 className="dark fw-bold p-3 rounded-3 text-center">
                                {userData.projects.project1.title}
                            </h4>
                            <div className="container">
                                <a href={userData.projects.project1.link}>
                                    <div className="d-flex gap-5 flex-row-reverse project-img">
                                        <img
                                            src={wikipedia1}
                                            alt="Wikipedia Redesign"
                                            className="w-25 d-block mx-auto pt-5"
                                        />
                                        <img
                                            src={wikipedia2}
                                            alt="Wikipedia Redesign"
                                            className="w-75 d-block mx-auto pt-5"
                                            style={{ position: "absolute" }}
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-5 col project-container mt-5 mt-md-0">
                            <h4 className="dark fw-bold p-3 rounded-3 text-center">
                                {userData.projects.project2.title}
                            </h4>
                            <div className="container">
                                <a href={userData.projects.project2.link}>
                                    <div className="d-flex gap-5 flex-row-reverse project-img">
                                        <img
                                            src={game1}
                                            alt="Number Guessing Game"
                                            className="w-25 d-block mx-auto pt-5"
                                        />
                                        <img
                                            src={game2}
                                            alt="Number Guessing Game"
                                            className="w-75 d-block mx-auto pt-5"
                                            style={{ position: "absolute" }}
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="d-block d-md-flex gap-5 mt-5">
                        <div className="p-5 col  project-container mt-5 mt-md-0">
                            <h4 className="dark fw-bold p-3 rounded-3 text-center">
                                {userData.projects.project3.title}
                            </h4>
                            <div className="container">
                                <a href={userData.projects.project3.link}>
                                    <div className="d-flex gap-5 project-img">
                                        <img
                                            src={api1}
                                            alt="API-Driven Website"
                                            className="w-25 d-block mx-auto pt-5"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-5 col project-container mt-5 mt-md-0">
                            <h4 className="dark fw-bold p-3 rounded-3 text-center">
                                {userData.projects.project4.title}
                            </h4>
                            <div className="container">
                                <a href={userData.projects.project4.link}>
                                    <div className="project-img">
                                        <img
                                            src={capstone}
                                            alt="Automated Car Pass"
                                            className="w-75 carpass d-block mx-auto pt-5"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
