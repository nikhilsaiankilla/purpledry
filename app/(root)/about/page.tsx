import Footer from "@/components/Footer";
import Image from "next/image";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
  },
  {
    name: "Jane Smith",
    role: "COO",
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
  },
  {
    name: "Michael Johnson",
    role: "Head of Operations",
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
  },
];

const AboutUs = () => {
  return (
    <>
      <section className="py-7 padding">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-primary mb-4">About PurpleDry</h1>
          <p className="text-gray-600 text-sm max-w-3xl mx-auto">
            At <span className="text-primary font-bold">PurpleDry</span>, we revolutionize the way you experience laundry. Our mission is to make dry cleaning and laundry effortless, affordable, and environmentally friendly.
          </p>

          <p className="text-gray-600 text-sm max-w-3xl mx-auto mt-3" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure hic labore blanditiis tempore maxime voluptatum nobis ipsum placeat. Eligendi dolor, labore numquam pariatur, atque odit excepturi, ut delectus a unde velit ad. Excepturi dicta quidem id corporis voluptatibus sunt rem velit consectetur facilis aspernatur?</p>
        </div>

        {/* Our Story */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm">
            Founded in 2025, <span className="text-primary">PurpleDry</span> started with a vision to provide a hassle-free, high-quality laundry experience. With cutting-edge technology and professional care, we ensure that your clothes receive the treatment they deserve.
          </p>
        </div>

        {/* How It Works */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-left bg-white shadow-lg p-4 rounded-lg">
              <div className="w-full aspect-video">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmwsHU-2mJe0ZycO64XKrQa2J66Loh8k-L-A&s"
                  width={80}
                  height={80}
                  className="w-full aspect-video rounded-lg"
                  alt="Pickup Icon"
                />
              </div>
              <h3 className="text-lg font-medium mt-3 text-primary">Step 1: Schedule a Pickup</h3>
              <p className="text-gray-500 text-sm">Choose a convenient time through our app.</p>
            </div>
            <div className="flex-1 text-left bg-white shadow-lg p-4 rounded-lg">
              <div className="w-full aspect-video">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmwsHU-2mJe0ZycO64XKrQa2J66Loh8k-L-A&s"
                  width={80}
                  height={80}
                  className="w-full aspect-video rounded-lg"
                  alt="Pickup Icon"
                />
              </div>
              <h3 className="text-lg font-medium mt-3 text-primary">Step 2: We Clean with Care</h3>
              <p className="text-gray-500 text-sm">Professional cleaning with eco-friendly products.</p>
            </div>
            <div className="flex-1 text-left bg-white shadow-lg p-4 rounded-lg">
              <div className="w-full aspect-video">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmwsHU-2mJe0ZycO64XKrQa2J66Loh8k-L-A&s"
                  width={80}
                  height={80}
                  className="w-full aspect-video rounded-lg"
                  alt="Pickup Icon"
                />
              </div>
              <h3 className="text-lg font-medium mt-3 text-primary">Step 3: Delivered Fresh</h3>
              <p className="text-gray-500 text-sm">Get your clothes back, fresh and clean!</p>
            </div>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center p-4 shadow-md rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="rounded-full mx-auto"
                />
                <h3 className="mt-4 text-lg font-medium">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
