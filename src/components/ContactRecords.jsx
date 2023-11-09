import React from "react";

function ContactRecords({ name, email, phone, deleteContact, personID }) {
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                    <button
                        onClick={() =>
                            deleteContact(personID, name, email, phone)
                        }
                        className="btn btn-sm btn-danger"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
}

export default ContactRecords;
