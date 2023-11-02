import React from "react";
import Api from "/images/project3.png";
import Game from "/images/project2.png";
import Wikipedia from "/images/project1.png";
import userData from "../../data/user";

function RecentProjects() {
    return (
        <>
            <div className="mt-5">
                <h2 className="title fw-bold text-center text-lg-start">
                    Recent Projects
                </h2>
                <div className="d-block d-md-flex gap-5 my-5">
                    <div className="p-5 project-container h-100">
                        <h4 className="text-dark fw-bold p-3 rounded-3">
                            {userData.projects.project1.title}
                        </h4>
                        <div className="container">
                            <a href={userData.projects.project1.link}>
                                <img
                                    src={Wikipedia}
                                    alt="Wkipedai Redesign"
                                    className="w-100 d-block mx-auto pt-5 mt-5 project-img"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-5 align-items-center">
                        <div className="p-5 project-container">
                            <h4 className="text-dark fw-bold p-3 rounded-3">
                                {userData.projects.project3.title}
                            </h4>
                            <div className="container">
                                <a href={userData.projects.project3.link}>
                                    <img
                                        src={Api}
                                        alt="API-Driven Website"
                                        className="w-100 d-block mx-auto pt-5 project-img"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="p-5 project-container">
                            <h4 className="text-dark fw-bold p-3 rounded-3">
                                {userData.projects.project2.title}
                            </h4>
                            <div className="container">
                                <a href={userData.projects.project2.link}>
                                    <img
                                        src={Game}
                                        alt="Wkipedai Redesign"
                                        className="w-100 d-block mx-auto pt-5 project-img"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecentProjects;
