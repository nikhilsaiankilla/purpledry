import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { MapPin, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceProviders() {
  // Mock data for laundry providers in Hyderabad
  const providersData = [
    {
      id: 1,
      name: "Sparkle Wash",
      logo: "https://tumbledry.in/wp-content/uploads/2022/03/Tumbledrys-live-laundry-stores-1024x600.jpg",
      services: ["Dry Cleaning", "Steam Iron", "Shoe Cleaning"],
      rating: 4.8,
      reviews: 120,
      turnaroundTime: "Same Day",
    },
    {
      id: 2,
      name: "Quick Clean",
      logo: "https://tumbledry.in/wp-content/uploads/2022/03/Tumbledrys-live-laundry-stores-1024x600.jpg",
      services: ["Washing", "Ironing"],
      rating: 4.5,
      reviews: 90,
      turnaroundTime: "Same Day",
    },
    {
      id: 3,
      name: "Eco Fresh Laundry",
      logo: "https://tumbledry.in/wp-content/uploads/2022/03/Tumbledrys-live-laundry-stores-1024x600.jpg",
      services: ["Dry Cleaning", "Wash & Fold"],
      rating: 4.7,
      reviews: 110,
      turnaroundTime: "Same Day",
    },
  ];

  // Function to generate star ratings
  const getStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center">
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <Star key={index} size={16} className="text-amber-400" />
          ))}
        {hasHalfStar && <StarHalf size={16} className="text-amber-400" />}
      </div>
    );
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="w-full min-h-[55vh] flex items-center justify-center flex-col gap-4 padding">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Our Trusted Laundry Partners in Hyderabad
          </h1>
          <p className="text-lg text-center text-gray-600 max-w-2xl">
            We partner with top-rated laundries to provide the best service. Order via WhatsApp, and we&apos;ll handle everything!
          </p>
          <Button href="https://play.google.com/store/apps/details?id=your-app-id">
            Book Service
          </Button>
        </section>

        {/* Service Providers Grid */}
        <section className="w-full py-10 padding" >
          <h2 className="text-center text-3xl md:text-4xl font-bold text-primary">
            Our Service Providers
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {providersData.map((provider) => (
              <Link
                href={`/serviceProvider/${provider?.id}`}
                key={provider.id}
                className="bg-white shadow-xl rounded-lg p-4 group"
              >
                {/* Provider Image */}
                <div className="w-full aspect-video relative rounded-sm overflow-hidden">
                  <Image
                    src={provider.logo}
                    alt={provider.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-sm group-hover:scale-[1.1] transition-all duration-350 ease-in-out"
                  />
                </div>

                {/* Provider Details */}
                <div className="w-full mt-4">
                  <h3 className="text-xl font-semibold">{provider.name}</h3>
                  <p className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin size={18} className="text-red-700 mr-1" />
                    Hyderabad, Telangana
                  </p>

                  {/* Star Ratings */}
                  <div className="flex items-center gap-2 mt-2">
                    {getStars(provider.rating)}
                    <p className="text-sm text-amber-400">{provider.reviews}+ Reviews</p>
                  </div>

                  {/* Services */}
                  <p className="text-sm text-gray-600 mt-2">
                    {provider.services.join(" | ")}
                  </p>

                  {/* Turnaround Time */}
                  <p className="text-sm text-gray-500 mt-1">
                    {provider.turnaroundTime}
                  </p>

                  {/* CTA Button */}
                  <Button
                    href={`https://wa.me/919876543210?text=I'm%20interested%20in%20booking%20laundry%20service%20from%20${provider.name}`}
                    className="w-full! text-center! mt-3 rounded-sm!"
                  >
                    Book with PurpleDry
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
