export default function Contact() {
  return (
    <div className="w-full md:w-4/5 min-h-screen flex xl:items-center border-red-800 border">
      <div className="px-3 flex flex-col py-2 xl:justify-evenly xl:flex-row xl:w-full mx-auto border-green-800 border ">
        <div
          className="mb-2 sm:mb-12 xl:mb-0 xl:px-8 max-w-xl
          flex flex-col items-center p-5
          "
        >
          <div>
            <h2
              className="max-w-lg mb-2 md:mb-6 font-sans text-3xl font-bold tracking-tight dark:text-white sm:text-4xl;
            sm:leading-none xl:mt-64"
            >
              Get in Touch with
              <span className="text-teal-accent-400 text-pink-500"> me</span>
            </h2>
            <div className="max-w-lg text-base text-gray-400 md:text-lg ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </div>
          </div>
        </div>
        <div className="max-w-lg xl:w-8/12 xl:mt-16">
          <div className=" dark:bg-gray-800 dark:text-white bg-white rounded shadow-2xl p-5 md:p-10 mb-10">
            <h3 className="mb-4 text-3xl font-semibold sm:mb-6 sm:text-2xl">
              Contact
            </h3>
            <form>
              <div className="mb-1 sm:mb-2">
                <label htmlFor="name" className="inline-block mb-1 font-medium">
                  Name
                </label>
                <input
                  placeholder="Your Name..."
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="email"
                  className="inline-block mb-1 font-medium"
                >
                  E-mail
                </label>
                <input
                  placeholder="youremail@example.com"
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="message"
                  className="inline-block mb-1 font-medium"
                >
                  Message
                </label>
                <input
                  placeholder="Your Message..."
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                />
              </div>
              <div className="mt-4 mb-2 sm:mb-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                >
                  Send
                </button>
              </div>
              <p className="text-xs text-gray-600 sm:text-sm">LITTLE MESSAGE</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
