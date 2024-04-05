import "./modeIcon.css";
import app from "./firebaseConfig";
import { useState, useRef } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
    });

    // Toast
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

            // From emailJs account
            const serviceId = "service_ttida2p";
            const templateId = "template_g11rzcb";
            const publicKey = "v6Vh2u9ibpPZhbwl4";

            // Send email using EmailJs
            emailjs
                .sendForm(serviceId, templateId, form.current, publicKey)
                .then((response) => {
                    console.log("Email sent successfully", response.status);
                })
                .catch((err) => {
                    console.error("Failed to send email", err);
                });

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
                <form ref={form} className="my-5 px-3 form col-12 col-md-6">
                    <h1 className="fw-bold title text-md-start dark">
                        Contact
                    </h1>
                    <div className="mt-5">
                        <input type="hidden" name="recipient" />
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
                            name="name"
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
                            name="email"
                        />
                        <label htmlFor="phone" className="mt-2">
                            Phone
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
                            name="phone"
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
