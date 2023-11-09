import React from "react";

function Databse() {
    return (
        <div className="container my-5">
            <div className="card p-5">
                <h1 className="fw-bold">Inquiries</h1>
                <table className="table table-hover table-sm table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>09123456789</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Databse;
