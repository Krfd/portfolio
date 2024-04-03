import React from "react";
import Avatar from "/avatar-bordered.svg";
import Blogs from "./home/Blogs";
import RecentProjects from "./home/RecentProjects";

function Home() {
    return (
        <>
            <div className="container py-md-5 my-5">
                <div className="d-block d-md-flex flex-md-row-reverse justify-content-center align-items-center gap-5 my-5 py-5">
                    <div>
                        <img
                            src={Avatar}
                            alt="Avatar"
                            className="rounded-circle d-block mx-auto object-fit-cover avatar"
                        />
                    </div>
                    <div className="mt-5 mt-md-0 text-center text-md-start">
                        <h1 className="fw-light text-md-start fw-bold dark">
                            Karl{" "}
                            <span className="fw-bold secondary">Fredriech</span>{" "}
                            Getuya
                        </h1>
                        <h5 className="dark">
                            A 24-year-old Aspiring
                            <span className="fw-bold"> Web Developer</span>
                        </h5>
                    </div>
                </div>
                <div className="my-5 py-md-5 d-flex flex-column gap-5">
                    <RecentProjects />
                    <Blogs />
                </div>
            </div>
        </>
    );
}

export default Home;
