

export default function Contact() {
  return (
    <div
      className="h-[83.5vh] m-4 scroll-mt-[90px] flex flex-col items-center justify-evenly"
      id="contact"
    >
      <div className="text-4xl font-normal self-start mt-4 mx-4">
        Contact US
      </div>
      <div className="flex flex-row items-center justify-evenly h-3/4 w-full my-16">
        <form className="w-3/4 max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full h-10 border-2 border-blue-400 rounded-md p-2 text-white shadow-sm"
            />{' '}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder='Enter your email address'
              className="w-full h-10 border-2 border-blue-400 rounded-md p-2 shadow-sm"
            />{' '}
          </div>
          <div className="mb-4">
            <label
              htmlFor="feedback"
              className="block text-lg font-medium mb-1"
            >
              Feedback:
            </label>
            <textarea
              id="feedback"
              rows="4"
              placeholder='Enter your feedback here...'
              className="w-full border-2 border-blue-400 rounded-md p-2 shadow-sm"
            ></textarea>{' '}
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </form>
        <div className="w-1/3 h-full flex flex-col items-start justify-evenly">
          <img src="/images/map.png" alt="map" className=" object-cover" />
          <p className="text-xl font-bold">
            📍 Location: <span className='font-normal'>SKCET, Coimbatore, TamilNadu, India</span>
          </p>
          <p className="text-xl font-bold">
            📞 Phone: <span className='font-normal'>+91 8760000701</span>
          </p>
          <p className="text-xl font-bold">
            📧 Mail: <span className='font-normal'>contact@infinity.ac.in</span>
          </p>
          <p className="text-xl font-bold">
            🌐 Website: <span className='font-normal'>team-infinity.vercel.app</span>
          </p>
        </div>
      </div>
    </div>
  )
}
