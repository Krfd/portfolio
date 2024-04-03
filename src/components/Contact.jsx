import "./modeIcon.css";
import app from "./firebaseConfig";
import { useState, useEffect } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

function Contact() {
    const [contact, setContact] = useState({ name: "", email: "", phone: "" });

    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        // iconColor: "white",
        customClass: {
            popup: "colored-toast",
        },
        // showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    });

    const addContact = (e) => {
        try {
            e.preventDefault();
            const db = getFirestore(app);

            if (
                contact.name === "" ||
                contact.email === "" ||
                contact.phone === ""
            ) {
                Toast.fire({
                    icon: "error",
                    iconColor: "#EB5546",
                    width: "15rem",
                    title: "Missing Fields",
                    confirmButtonText: "Try Again",
                    confirmButtonColor: "#EB5546",
                });
            } else {
                addDoc(collection(db, "contact"), contact);

                setContact({
                    name: "",
                    email: "",
                    phone: "",
                });
                Toast.fire({
                    icon: "success",
                    iconColor: "#67CC65",
                    width: "20rem",
                    title: "Thank you for contacting us! We will get back to you soon",
                    // color: "#297EA6",
                    confirmButtonText: "Okay",
                    confirmButtonColor: "#67CC65",
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="container my-5 px-3 shadow-sm d-block d-md-flex gap-5 gap-md-3 gap-lg-5 dark">
                <form className="my-5 px-3 form col-12 col-md-6">
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
                <div className="my-5 py-5 p-3 align-self-center text-center col-12 col-md-6 text-md-start">
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
