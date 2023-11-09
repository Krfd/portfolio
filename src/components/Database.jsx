import React from "react";
import app from "./firebaseConfig";
import {
    getFirestore,
    onSnapshot,
    collection,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import ContactRecords from "./ContactRecords";
import Swal from "sweetalert2/dist/sweetalert2.js";

function Database() {
    const [contactPerson, setContactPerson] = useState([]);

    useEffect(() => {
        const db = getFirestore(app);
        try {
            onSnapshot(collection(db, "contact"), (snapshot) => {
                const newContactList = [];
                snapshot.forEach((person) => {
                    const tempPerson = person.data();
                    tempPerson["person_id"] = person.id;
                    newContactList.push(tempPerson);
                });
                setContactPerson(newContactList);
            });
        } catch (err) {
            alert("Error in retrieving data from database.");
        }
    }, []);

    const deleteContact = (personID, name) => {
        const db = getFirestore(app);
        confirm(`Are you sure you want to delete ${name}?`);
        if (deleteDoc(doc(db, "contact", personID))) {
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Contact deleted successfully.",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Error in deleting contact.",
            });
        }
    };

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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactPerson.map((personData, key) => (
                            <ContactRecords
                                key={key}
                                name={personData.name}
                                email={personData.email}
                                phone={personData.phone}
                                deleteContact={deleteContact}
                                personID={personData.person_id}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Database;
