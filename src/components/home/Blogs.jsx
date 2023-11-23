import React from "react";
import userData from "../../data/user";
import BlogImg1 from "/images/blog1.jpg";
import BlogImg2 from "/images/blog2.jpg";
import BlogImg3 from "/images/blog3.jpg";

function Blogs() {
    return (
        <>
            <h2 className="fw-bold title text-center text-lg-start dark">
                Blog Posts
            </h2>
            <div className="container d-flex flex-column flex-md-row flex-md-wrap flex-lg-nowrap gap-5 gap-lg-3 mx-auto justify-content-center align-items-center">
                <div className="card shadow col-12 col-md-5 col-lg-4 p-3 border-0 rounded-0">
                    <img
                        src={BlogImg1}
                        alt={userData.title}
                        className="blog-img object-fit-cover rounded-3"
                    />
                    <h6 className="fw-bold mt-3">
                        {userData.blogs.blog1.title}
                    </h6>
                    <small className="text-sm secondary">
                        Published in {userData.blogs.blog1.date}
                    </small>
                    <a
                        href={userData.blogs.blog1.link}
                        className="text-dark text-decoration-none fw-bold icon-link icon-link-hover mt-2"
                    >
                        Read Blog{" "}
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
                <div className="card shadow col-12 col-md-5 col-lg-4 p-3 border-0 rounded-0">
                    <img
                        src={BlogImg2}
                        alt={userData.blogs.blog2.title}
                        className="blog-img object-fit-cover rounded-3"
                    />
                    <h6 className="fw-bold mt-3">
                        {userData.blogs.blog2.title}
                    </h6>
                    <small className="text-sm secondary">
                        Published in {userData.blogs.blog2.date}
                    </small>
                    <a
                        href={userData.blogs.blog2.link}
                        className="text-dark text-decoration-none fw-bold icon-link icon-link-hover mt-2"
                    >
                        Read Blog{" "}
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
                <div className="card shadow col-12 col-md-5 col-lg-4 p-3 border-0 rounded-0">
                    <img
                        src={BlogImg3}
                        alt={userData.blogs.blog3.title}
                        className="blog-img object-fit-cover rounded-3"
                    />
                    <h6 className="fw-bold mt-3">
                        {userData.blogs.blog3.title}
                    </h6>
                    <small className="text-sm secondary">
                        Published in {userData.blogs.blog3.date}
                    </small>
                    <a
                        href={userData.blogs.blog3.link}
                        className="text-dark text-decoration-none fw-bold icon-link icon-link-hover mt-2"
                    >
                        Read Blog{" "}
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
            </div>
        </>
    );
}

export default Blogs;
