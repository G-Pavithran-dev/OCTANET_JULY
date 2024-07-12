export default function Navbar() {
  return (
    <nav className="sticky top-4 m-4 p-3 rounded-lg flex justify-between items-center bg-[#100030] border border-sky-600 shadow-lg shadow-sky-600 w-[97.2vw]">
      <div className="ml-4 flex flex-row items-center justify-center">
        <img src="/images/favicon.png" alt="logo" className="w-9 h-9" />
        <h1 className="font-bold ml-2 text-2xl tracking-widest select-none">
          INFINITY
        </h1>
      </div>
      <ul className="font-normal text-lg flex flex-row justify-between">
        <a
          href="#home_page"
          className="text-white transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 hover:text-sky-200"
        >
          <li className="mx-5">Home</li>
        </a>
        <a
          href="#about"
          className="text-white transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 hover:text-sky-200"
        >
          <li className="mx-5">About</li>
        </a>
        <a
          href="#our_Service"
          className="text-white transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 hover:text-sky-200"
        >
          <li className="mx-5">Services</li>
        </a>
        <a
          href="#contact"
          className="text-white transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 hover:text-sky-200"
        >
          <li className="mx-5">Contact</li>
        </a>
      </ul>
      <div className="flex flex-row-reverse items-center mr-4">
        <div className="relative">
          <span className="absolute -right-1 -top-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
          <img
            src="/images/profile.png"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </nav>
  )
}
