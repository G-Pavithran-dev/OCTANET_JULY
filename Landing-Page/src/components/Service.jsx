export default function Service() {
  const Services = [
    {
      title: 'Web Development',
      content:
        'We specialize in creating dynamic and user-friendly websites that leave a lasting impression. Our team of skilled developers and designers collaborates closely with clients to bring their vision to life. Whether you need a simple portfolio site, an e-commerce platform, or a custom web application, we’ve got you covered.',
      img: '/images/web-development.webp',
    },
    {
      title: 'Innovative Solutions',
      content:
        'we thrive on creativity and cutting-edge thinking. Our innovative solutions are designed to address complex challenges and drive meaningful impact. Whether you’re a startup, an established business, or an individual with a vision, we’ve got the expertise to transform ideas into reality.',
      img: '/images/innovation.webp',
    },
    {
      title: 'Artificial Intelligence',
      content:
        'we’re passionate about the potential of artificial intelligence (AI) to revolutionize industries, enhance user experiences, and drive innovation. While our AI solutions are currently in the training phase, we’re excited about the possibilities they hold.',
      img: '/images/artificial_intelligence.webp',
    },
  ]
  return (
    <div
      className="h-[89.5vh] m-4 scroll-mt-[100px] flex flex-col items-center justify-evenly"
      id="our_Service"
    >
      <div className="text-4xl font-normal self-start mx-4">Our Services</div>
      <div className="flex flex-row items-center justify-evenly h-3/4 w-full my-12">
        {Services.map((Service, index) => (
          <>
            <section
              className="card w-96 h-[485px] border rounded-xl border-sky-400"
              key={index}
            >
              <img
                src={Service.img}
                alt="website-1"
                className="w-96 h-52 object-cover rounded-t-xl"
              />
              <div className="card-content">
                <h1 className="text-2xl font-bold p-2">{Service.title}</h1>
                <p className="text-lg mb-4 px-2">{Service.content}</p>
              </div>
            </section>
          </>
        ))}
      </div>
    </div>
  )
}
