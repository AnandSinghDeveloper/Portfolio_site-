import React, { useState, useEffect } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [savedInfo, setSavedInfo] = useState(null);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("footerContactInfo");
    if (savedData) {
      setSavedInfo(JSON.parse(savedData));
    }
  }, []);

  // Update form values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save data to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("footerContactInfo", JSON.stringify(formData));
    setSavedInfo(formData);
    setFormData({ name: "", email: "", message: "" }); // Reset form
    alert("Information saved successfully!");
  };

  return (
    <div className="w-full bg-gray-400 text-white py-15 px-5 relative flex justify-between">
      <div className="  w-[60%] bg-center ">
        <img  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" src="src/components/img/Completed-pana.png" alt="" />
      </div>
      <div className="container mx-auto flex flex-col items-center space-y-8">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-center max-w-md text-gray-300">
          Save your contact details so I can connect with you!
        </p>

        {/* Display saved info if available */}
        {savedInfo && (
          <div className="bg-gray-500 p-4 rounded-lg shadow-lg w-full max-w-lg text-center hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-green-400">Saved Info:</h3>
            <p className="text-gray-300">
              Name:{savedInfo.name || "N/A"}
            </p>
            <p className="text-gray-300">
              Email: {savedInfo.email || "N/A"}
            </p>
            <p className="text-gray-300">
            Message: {savedInfo.message || "N/A"}
            </p>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-gray-500 p-6 rounded-lg shadow-lg space-y-5"
        >
          <div>
            <label className="block text-gray-300 mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-gray-300 text-zinc-700 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-gray-300 text-zinc-700 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 bg-gray-300 text-zinc-700 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Save Info
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
