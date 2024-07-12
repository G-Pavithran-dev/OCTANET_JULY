export default function Home() {
  return (
    <div className="w-[97vw] scroll-mt-[70px]" id="home_page">
      <div className="p-4 flex flex-row items-center h-[87.5vh] w-full">
        <div className="w-1/2 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-normal mb-4">Welcome to</h1>
          <h1 className="text-6xl font-medium">INFINITY !!!</h1>
          <p className="text-2xl mt-4">We are here to help you.</p>
          <p className="text-2xl my-1">
            The platform built by students, for students.
          </p>
          <p className="text-2xl my-1">
            Ready to ignite your passion and build the future?
          </p>
          <button className="bg-blue-900 text-white font-bold text-xl px-4 py-2 rounded-md mt-6">Join our Team</button>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <img src="/images/home-image-1.png" alt="IMAGE" />
        </div>
      </div>
    </div>
  )
}
