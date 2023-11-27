const Contact = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Contact Food Cart !</h1>
      <p className="text-gray-700 mb-4">
        Have a question, feedback, or just want to say hello? We'd love to hear from you!
      </p>
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2zm0-10h2v6h-2zm0-2h2v2h-2z"
          />
        </svg>
        <span className="text-gray-700">Call us at : </span>
        <a href="tel:+1234567890" className="text-blue-500">
          +1 (234) 567-890
        </a>
      </div>
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2zm0-10h2v6h-2zm0-2h2v2h-2z"
          />
        </svg>
        <span className="text-gray-700">Email us at :  </span>
        <a href="mailto: info@foodcart.com" className="text-green-500">
          info@foodcart.com
        </a>
      </div>
      <p className="text-gray-700">
        We're here to assist you and make your experience with Food Cart exceptional. Feel free
        to reach out anytime!
      </p>
    </div>
  );
};

export default Contact;
