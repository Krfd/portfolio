import "./modeIcon.css";

function Contact() {
    return (
        <>
            <div className="py-3 my-5 shadow-sm d-block d-md-flex gap-5 gap-md-3 gap-lg-5 dark">
                <form
                    action=""
                    method="post"
                    className="my-5 px-3 px-md-5 form"
                >
                    <h1 className="fw-bold title text-md-start dark">
                        Contact
                    </h1>
                    <div className="mt-5">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="email" className="mt-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="phone" className="mt-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <button className="text-center w-100 btn btn-dark mt-2">
                            Submit
                        </button>
                    </div>
                </form>
                <div className="my-5 p-5 p-md-4 align-self-center text-center text-md-start">
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
