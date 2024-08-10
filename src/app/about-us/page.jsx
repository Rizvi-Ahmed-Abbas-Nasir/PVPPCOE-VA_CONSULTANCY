import Footer from "@/components/Footer";

export default function Page() {
  // Array of team members
  const teamMembers = [
    { name: "John Doe", position: "CEO & Founder" },
    { name: "Jane Smith", position: "CTO" },
    { name: "Alice Johnson", position: "VP of Client Relations" },
    { name: "Michael Brown", position: "Lead Designer" },
    // Add more team members as needed
  ];

  // Array of expertise areas
  const expertiseAreas = [
    {
      title: "UI/UX Design",
      description:
        "Crafting visually stunning and user-friendly designs that enhance user engagement and satisfaction.",
    },
    {
      title: "Web Development",
      description:
        "Building robust and scalable web applications using the latest technologies and best practices.",
    },
    {
      title: "Mobile Apps",
      description:
        "Developing innovative mobile applications that deliver seamless user experiences across all platforms.",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Creating comprehensive e-commerce platforms that drive sales and growth for your business.",
    },
    {
      title: "Digital Strategy",
      description:
        "Designing digital strategies that align with your business goals and maximize online presence.",
    },
    {
      title: "Consulting",
      description:
        "Providing expert consulting services to guide your digital transformation and innovation efforts.",
    },
    // Add more expertise areas as needed
  ];

  return (
    <>
      <div className="h-full bg-gradient-to-b from-blue-900 to-indigo-900 text-white flex flex-col items-center py-10">
        <section className="max-w-3xl text-center mb-12 m-5">
          <h1 className="text-5xl font-extrabold mb-8 mt-20">About Us</h1>
          <p className="text-xl leading-relaxed">
            Welcome to VPPCOE Consultancy, where innovation meets expertise! We
            are a team of skilled students with diverse backgrounds in software
            development, design, and digital strategy. Our mission is to empower
            businesses by delivering customized digital solutions that enhance
            efficiency, drive growth, and improve user experience.
          </p>
        </section>

        <section className="max-w-4xl mb-12 m-5">
          <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((expertise, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  {expertise.title}
                </h3>
                <p className="leading-relaxed">{expertise.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl text-center mb-12 m-5">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-lg leading-relaxed">
            We are a group of passionate students with diverse skills and
            interests, dedicated to delivering exceptional results and helping
            our clients succeed in the digital landscape.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gray-700 mb-4 flex justify-center items-center">
                  Avatar
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm">{member.position}</p>
              </div>
            ))}
          </div>
        </section>

        {/* <section className="max-w-4xl text-center m-5">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg leading-relaxed">
            We are always seeking talented people with passion, experience, and
            the ability to make a difference for our clients. If you are
            interested in joining the VPPCOE Consultancy team, send your resume
            and cover letter to jobs@vppcoe.com.
          </p>
        </section> */}
      </div>
      <Footer />
    </>
  );
}
