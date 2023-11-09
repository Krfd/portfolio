import React from "react";
import api1 from "../../assets/api1.png";
import api2 from "../../assets/api2.png";
import api3 from "../../assets/api3.png";
import game1 from "../../assets/game1.png";
import game2 from "../../assets/game2.png";
import wikipedia1 from "../../assets/wikipedia1.png";
import wikipedia2 from "../../assets/wikipedia2.png";
import userData from "../../data/user";

function RecentProjects() {
    return (
        <>
            <div className="mt-5">
                <h2 className="title fw-bold text-center text-lg-start dark">
                    Recent Projects
                </h2>
                <div className="d-block d-md-flex gap-5 my-5">
                    <div className="p-5 project-container">
                        <h4 className="dark fw-bold p-3 rounded-3 text-center">
                            {userData.projects.project1.title}
                        </h4>
                        <div className="container">
                            <a href={userData.projects.project1.link}>
                                <div className="d-flex project-img">
                                    <img
                                        src={wikipedia2}
                                        alt="Wkipedai Redesign"
                                        className="w-100 d-block mx-auto pt-5 ms-3"
                                        style={{ position: "absolute" }}
                                    />
                                    <img
                                        src={wikipedia1}
                                        alt="Wkipedai Redesign"
                                        className="w-25 d-block mx-auto pt-5 ms-5"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-5 align-items-center mt-5 mt-md-0">
                        <div className="p-5 project-container mt-5 mt-md-0">
                            <h4 className="dark fw-bold p-3 rounded-3">
                                {userData.projects.project3.title}
                            </h4>
                            <div className="container">
                                <a href={userData.projects.project3.link}>
                                    <div className="d-flex project-img">
                                        <img
                                            src={api1}
                                            alt="Wkipedai Redesign"
                                            className="w-25 d-block mx-auto pt-5 ms-5"
                                        />
                                        <img
                                            src={api3}
                                            alt="Wkipedai Redesign"
                                            className="w-100 d-block mx-auto pt-5 ms-5 mt-5 "
                                            style={{
                                                position: "absolute",
                                                zIndex: "1",
                                            }}
                                        />
                                        <img
                                            src={api2}
                                            alt="Wkipedai Redesign"
                                            className="w-100 d-block mx-auto pt-5 pe-4 ms-5 ms-lg-0 ps-md-3"
                                            style={{ position: "absolute" }}
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-5 project-container mt-5 mt-md-0">
                            <h4 className="dark fw-bold p-3 rounded-3">
                                {userData.projects.project2.title}
                            </h4>
                            <div className="container">
                                <a href={userData.projects.project2.link}>
                                    <div className="d-flex project-img">
                                        <img
                                            src={game1}
                                            alt="Wkipedai Redesign"
                                            className="w-25 d-block mx-auto pt-5 ms-5"
                                        />
                                        <img
                                            src={game2}
                                            alt="Wkipedai Redesign"
                                            className="w-75 d-block mx-auto pt-5 ms-5"
                                            style={{ position: "absolute" }}
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

export default RecentProjects;
