import "./modeIcon.css";
import app from "./firebaseConfig";
import { useState, useEffect } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2/dist/sweetalert2.js";

function Contact() {
    const [contact, setContact] = useState({ name: "", email: "", phone: "" });

    const addContact = (e) => {
        try {
            e.preventDefault();
            const db = getFirestore(app);

            // db
            //     ? alert("Connected to the database")
            //     : alert("Not connected to the database");

            if (
                contact.name === "" ||
                contact.email === "" ||
                contact.phone === ""
            ) {
                Swal.fire({
                    title: "Oops!",
                    text: "Please fill out all the fields",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            } else {
                addDoc(collection(db, "contact"), contact);
                setContact({
                    name: "",
                    email: "",
                    phone: "",
                });
                Swal.fire({
                    title: "Success!",
                    text: "Thank you for contacting us! We will get back to you soon",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="my-5 shadow-sm d-block d-md-flex gap-5 gap-md-3 gap-lg-5 dark">
                <form action="" className="my-5 px-3 form">
                    <h1 className="fw-bold title text-md-start dark">
                        Contact
                    </h1>
                    <div className="mt-5">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) =>
                                setContact({
                                    ...contact,
                                    name: e.target.value,
                                })
                            }
                            value={contact.name}
                            id="name"
                            minLength={6}
                        />
                        <label htmlFor="email" className="mt-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            onChange={(e) =>
                                setContact({
                                    ...contact,
                                    email: e.target.value,
                                })
                            }
                            id="email"
                            value={contact.email}
                            minLength={10}
                        />
                        <label htmlFor="phone" className="mt-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            onChange={(e) =>
                                setContact({
                                    ...contact,
                                    phone: e.target.value,
                                })
                            }
                            id="phone"
                            value={contact.phone}
                            minLength={11}
                            maxLength={13}
                        />
                        <button
                            className="text-center w-100 btn btn-dark mt-2"
                            onClick={addContact}
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className="my-5 p-3 align-self-center text-center text-md-start">
                    <h6>
                        Feel free to send me an {""}
                        <a
                            href="mailto:karlfredriechgetuya@gmail.com"
                            className="text-underline dark fw-bold"
                        >
                            Email
                        </a>
                        . You can also get in touch with me through my social
                        media accounts.
                    </h6>
                </div>
            </div>
        </>
    );
}

export default Contact;
