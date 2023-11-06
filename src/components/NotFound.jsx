import React from "react";

function NotFound() {
    function notFound() {
        document
            .querySelector("body")
            .setAttribute(
                "style",
                "background-color: #000000; color: #ffffff;"
            );
    }
    notFound();

    return (
        <>
            <div className="container d-flex justify-content-center min-vh-100 align-items-center">
                <h1 className="fw-bold text-center text-light">NOT FOUND</h1>
            </div>
        </>
    );
}

export default NotFound;
