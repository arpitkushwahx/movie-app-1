import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(data).length !== 0) {
      console.log("form submitted successfully");
    } else {
      console.log("fields required");
    }
  };
  return (
    <div>
      <div className="h-auto">
        <div className=" w-full h-56 flex items-center  text-white text-4xl border-b-2 border-b-gray-800">
          <h1 className="mt-20 ml-32">Contact Us</h1>
        </div>

        {/* form */}

        <div className=" FORM text-white grid grid-cols-2 my-20 mb-28 mx-20">
          <div>
            <h1>Contact Form</h1>
            <div className="border-2 h-auto p-5 border-gray-800 rounded-2xl mr-5">
              <form onSubmit={handleSubmit}>
                <div className=" p-5 flex items-center justify-evenly px-5">
                  <label htmlFor="firseName">Name</label>
                  <br />
                  <input
                    name="firstName"
                    value={data.firstName}
                    className="border-2 border-gray-800 rounded-lg "
                    type="text"
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="#">Last Name</label>
                  <br />
                  <input
                    name="lastName"
                    value={data.lastName}
                    className="border-2 border-gray-800 rounded-lg"
                    type="text"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-10">
                  <label htmlFor="#">
                    Subject <span>(Optional)</span>
                  </label>
                  <br />
                  <input
                    name="subject"
                    value={data.subject}
                    type="text"
                    onChange={handleChange}
                    className="w-xl rounded-lg border-2 h-20 border-gray-800 ml-5 mt-2"
                  />
                </div>
                <div className="mt-10">
                  <label htmlFor="#">Message</label>
                  <br />
                  <input
                    name="message"
                    value={data.message}
                    type="text"
                    onChange={handleChange}
                    className="w-xl rounded-lg border-2 h-20 border-gray-800 ml-5 mt-2"
                    required
                  />
                </div>
                <button className="w-lg h-10 rounded-lg ml-11 mt-5 hover:border-b-2 hover:border-b-amber-300 hover:shadow-sm hover:shadow-amber-300  rounded-b-lg duration-100">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="w-96">
            <h1>Get in Touch</h1>
            <p className="text-wrap">
              We are always happy to help and provide more information about our
              services. You can contact us through email, phone, or by filling
              out the form on our website. Thank you for considering us!
            </p>
            <p>+91 896 689 2731</p>
            <p>arpitkushwah2101@gmail.com</p>
            <div className="grid grid-cols-4 p-2 w-40">
              <Link to="https://www.instagram.com/arpitkushwahx/">
                <button className="hover:translate-0.5 duration-200 cursor-pointer">
                  <i class="fa-brands fa-instagram fa-xl"></i>
                </button>
              </Link>
              <Link>
                {" "}
                <button className="hover:translate-0.5 duration-200 cursor-pointer">
                  <i class="fa-brands fa-facebook fa-xl"></i>
                </button>
              </Link>
              <Link to="https://github.com/arpitkushwahx">
                <button className="hover:translate-0.5 duration-200 cursor-pointer">
                  <i class="fa-brands fa-github fa-xl"></i>
                </button>
              </Link>
              <Link>
                {" "}
                <button className="hover:translate-0.5 duration-200 cursor-pointer">
                  <i class="fa-brands fa-linkedin fa-xl"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
