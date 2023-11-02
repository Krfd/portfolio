import React from "react";
import Avatar from "/avatar.jpg";
import Blogs from "./home/Blogs";
import RecentProjects from "./home/RecentProjects";

function Home() {
    return (
        <>
            <div className="container py-5 my-5">
                <div className="d-block d-md-flex flex-md-row-reverse justify-content-center align-items-center gap-5 my-5 py-5">
                    <div>
                        <img
                            src={Avatar}
                            alt="Avatar"
                            className="rounded-circle object-fit-cover avatar shadow-lg d-block mx-auto"
                        />
                    </div>
                    <div className="mt-5 mt-md-0 text-center text-md-start">
                        <h1 className="fw-light text-md-start fw-bold">
                            Karl{" "}
                            <span className="fw-bold text-secondary">
                                Fredriech
                            </span>{" "}
                            Getuya
                        </h1>
                        <h5>
                            A 23-year-old Aspiring
                            <span className="fw-bold"> Web Developer</span>
                        </h5>
                    </div>
                </div>
                <div className="my-5 py-5 d-flex flex-column gap-5">
                    <RecentProjects />
                    <Blogs />
                </div>
            </div>
        </>
    );
}

export default Home;
