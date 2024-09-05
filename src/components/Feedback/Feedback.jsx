import { useRef } from "react";

function Feedback() {
  const name = useRef("");
  const email = useRef("");
  const college = useRef("");
  const message = useRef("");

  const clear = (e) => {
    name.current.value = "";
    email.current.value = "";
    college.current.value = "";
    message.current.value = "";
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-tl from-blue-900 via-black to-blue-900 flex justify-center items-center py-12">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-2xl shadow-white/40">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">FEEDBACK</h1>
          <form action="https://formspree.io/f/maygoyza" method="post">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                NAME
              </label>
              <input
                ref={name}
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                name="Name"
                id="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                EMAIL
              </label>
              <input
                ref={email}
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                name="Email"
                id="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="collage" className="block text-sm font-medium text-gray-700">
                COLLEGE / ORGANISATION
              </label>
              <input
                ref={college}
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                name="Collage"
                id="collage"
                placeholder="Enter Your College / Organisation"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                MESSAGE
              </label>
              <textarea
                ref={message}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                name="Review"
                id="review"
                rows="3"
                placeholder="Your Message is Valuable for me"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                SUBMIT
              </button>
              <button
                type="button"
                className="w-full ml-2 bg-red-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                onClick={clear}
              >
                CLEAR
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Feedback;
