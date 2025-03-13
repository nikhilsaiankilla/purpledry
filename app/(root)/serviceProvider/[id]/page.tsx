import Image from "next/image";
import { MapPin, Star, StarHalf, TruckIcon, WashingMachine } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

// Dummy Data (Replace this with API/Database fetch)
const providersData = [
  {
    id: "1",
    name: "Sparkle Wash",
    logo: "https://tumbledry.in/wp-content/uploads/2022/03/Tumbledrys-live-laundry-stores-1024x600.jpg",
    services: ["Dry Cleaning", "Steam Iron", "Shoe Cleaning"],
    rating: 4.8,
    reviews: 120,
    turnaroundTime: "Same Day",
    location: "17.3850,78.4867", // Hyderabad Latitude & Longitude
  },
  {
    id: "2",
    name: "Quick Clean",
    logo: "https://tumbledry.in/wp-content/uploads/2022/03/Tumbledrys-live-laundry-stores-1024x600.jpg",
    services: ["Washing", "Ironing"],
    rating: 4.5,
    reviews: 90,
    turnaroundTime: "Next Day",
    location: "17.3850,78.4867",
  },
];

// ⭐ Function to Generate Stars
const getStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <Star key={index} size={20} className="text-amber-400" />
        ))}
      {hasHalfStar && <StarHalf size={20} className="text-amber-400" />}
    </div>
  );
};

// 🌟 Server Component to Fetch and Display Provider Data
export default async function ProviderPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const provider = providersData.find((p) => p.id === id);

  if (!provider) {
    return <div className="text-center text-xl py-20">Provider not found.</div>;
  }

  return (
    <>
      <div className="container mx-auto py-10 padding">
        {/* Banner Section */}
        <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg">
          <Image src={provider.logo} alt={provider.name} fill className="object-cover" />
        </div>

        {/* Provider Info */}
        <div className="mt-6 flex items-center flex-col md:flex-row md:justify-between">
          <div>
            <h1 className="text-4xl font-bold capitalize">{provider.name}</h1>
            <p className="flex items-center text-gray-600 mt-3">
              <MapPin size={18} className="text-red-700 mr-1" />
              Hyderabad, Telangana
            </p>
            <div className="flex items-center gap-2 mt-2">
              {getStars(provider.rating)}
              <p className="text-sm text-amber-400">{provider.reviews}+ Reviews</p>
            </div>
          </div>

          {/* Ratings */}
          {/* Book Now Button */}
          <div className="text-center mt-6">
            <Link
              href={`https://wa.me/919876543210?text=I'm%20interested%20in%20booking%20laundry%20service%20from%20${provider.name}`}
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white hover:bg-transparent outline-2 hover:outline-primary hover:text-primary py-3 px-6 rounded-lg shadow-lg transition"
            >
              Book Now via WhatsApp
            </Link>
            <p className="text-gray-500 mt-2 text-sm flex items-center gap-2 justify-center"><TruckIcon size={20} className="text-primary" />{provider.turnaroundTime} Delivery</p>
          </div>
        </div>

        {/* Services Section */}
        <h2 className="text-2xl font-semibold mt-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {provider.services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-xl w-full p-5 flex items-center justify-center flex-col gap-3"
            >
              <WashingMachine size={60} className="text-primary" />
              <h3 className="text-xl font-bold">{service}</h3>
              <p className="text-primary text-lg font-medium">50 rs/dress</p>
              <p className="text-sm text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, recusandae? Nulla quisquam cum provident illo distinctio at magnam soluta! Voluptate molestias cupiditate asperiores harum repellendus. Qui quia quaerat natus maxime?</p>
            </div>
          ))}
        </div>

        {/*Google Maps Location */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-left mb-4">Location</h2>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${provider.location}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
