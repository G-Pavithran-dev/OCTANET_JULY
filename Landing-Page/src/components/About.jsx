
export default function About() {
    return (
        <div className="m-4 h-[87.5vh] flex flex-col justify-evenly scroll-mt-[70px]" id="about">
          <h1 className="text-4xl font-normal my-8 mx-4">
            About INFINITY
          </h1>
          <div className="flex flex-row items-center justify-center h-3/4 m-2">
            <img src="/images/team of.gif" alt="Team LOGO" />
            <ul className="p-6">
              <li>
                <h1 className="text-4xl mb-4 font-medium">◌ Who we are</h1>
                <p className="text-2xl pl-7 text-justify">
                  Orchestrated INFINITY is a dynamic and passionate
                  student-driven innovation team. We believe in the power of
                  collaboration, creativity, and cutting-edge technology to
                  shape the future. Our diverse team brings together web
                  developers, designers, and innovators who share a common goal:
                  to create impactful solutions that push boundaries.
                </p>
              </li>
              <li className="my-6">
                <h1 className="text-4xl mb-4 font-medium">◌ Our mission</h1>
                <p className="text-2xl pl-7 text-justify">
                  Our mission is simple yet ambitious: ignite passion and build
                  the future. We thrive on challenges, embrace curiosity, and
                  constantly seek innovative ways to make a difference. Whether
                  it’s through hackathons, projects, or community initiatives,
                  we strive to leave a lasting impact on the world.
                </p>
                <br />
              </li>
            </ul>
          </div>
        </div>
    )
}