import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    setSubmitStatus("Loading...");

    setTimeout(() => {
      if (data.firstName && data.lastName && data.message) {
        setSubmitStatus("Form submitted successfull ✅");
        console.log("form submitted successfully ");
      } else {
        setSubmitStatus("All fields required");
        console.log("fields required");
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      <div className="h-auto">
        <div className=" w-full h-56 flex items-center  text-white text-4xl border-b-2 border-b-gray-800">
          <h1 className="mt-20 ml-15 sm:ml-32">Contact Us</h1>
        </div>

        {/* form */}

        <div className=" FORM text-white grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 my-20 mb-28 mx-5 sm:mx-20 gap-5">
          <div>
            <h1 className="text-4xl text-nowrap py-5">Contact Form</h1>
            <div className="sm:ml-40">{submitStatus}</div>
            <div className="sm:border-2 h-auto  p-5 border-gray-800 rounded-2xl sm:mr-5 xl:w-full md:max-w-auto sm:max-w-auto sm:w-xs">
              <form onSubmit={handleSubmit}>
                <div className=" p-5 flex flex-col sm:flex-col md:flex-col xl:flex-row  sm:items-center justify-evenly px-5 ">
                  <label htmlFor="firseName" className="font-medium">
                    First Name
                  </label>
                  <br />
                  <input
                    name="firstName"
                    value={data.firstName}
                    className="border-2 border-gray-800 rounded-lg px-2"
                    type="text"
                    placeholder="first name"
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="#" className="font-medium mt-2 sm:mt-0">
                    Last Name
                  </label>
                  <br />
                  <input
                    name="lastName"
                    value={data.lastName}
                    className="border-2 border-gray-800 rounded-lg px-2"
                    type="text"
                    placeholder="last name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="sm:mt-10 px-5">
                  <label htmlFor="#" className="font-medium ">
                    Subject <span>(Optional)</span>
                  </label>
                  <br />
                  <input
                    name="subject"
                    value={data.subject}
                    type="text"
                    onChange={handleChange}
                    className="xl:w-xl rounded-lg border-2 h-20 border-gray-800 ml-5 mt-2 w-auto"
                  />
                </div>
                <div className="sm:mt-10 px-5">
                  <label htmlFor="#" className="font-medium">
                    Message
                  </label>
                  <br />
                  <input
                    name="message"
                    value={data.message}
                    type="text"
                    placeholder="Type your message..."
                    onChange={handleChange}
                    className="xl:w-xl w-auto h-20 rounded-lg border-2 border-gray-800 ml-5 mt-2 px-2"
                    required
                  />
                </div>
                <button className="lg:w-full w-40 h-10  rounded-lg ml-11 mt-5 hover:border-b-2 hover:border-b-amber-300 hover:shadow-sm hover:shadow-amber-300  rounded-b-lg duration-100">
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>

          <div className="sm:w-96 flex flex-col gap-3 ">
            <h1 className="font-bold text-xl">Get in Touch</h1>
            <p className="text-wrap">
              We are always happy to help and provide more information about our
              services. You can contact us through email, phone, or by filling
              out the form on our website. Thank you for considering us!
            </p>
            <p className="font-medium">+91 896 589 2731</p>
            <p className="font-medium">arpitkushwah2101@gmail.com</p>
            <div className="grid grid-cols-4 p-2 w-40">
              <Link to="https://www.instagram.com/arpitkushwahx/">
                <button className="hover:translate-0.5 duration-200 cursor-pointer">
                  <i className="fa-brands fa-instagram fa-xl"></i>
                </button>
              </Link>
              <Link>
                {" "}
                <button className="hover:translate-0.5 duration-200 cursor-pointer">
                  <i className="fa-brands fa-facebook fa-xl"></i>
                </button>
              </Link>
              <Link to="https://github.com/arpitkushwahx">
                <button className="hover:translate-0.5 duration-200 cursor-pointer">
                  <i className="fa-brands fa-github fa-xl"></i>
                </button>
              </Link>
              <Link>
                {" "}
                <button className="hover:translate-0.5 duration-200 cursor-pointer">
                  <i className="fa-brands fa-linkedin fa-xl"></i>
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
