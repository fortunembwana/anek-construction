import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Civil Works",
      desc: "Comprehensive civil engineering including earthworks, concrete works, sewer systems, roads, and bridges.",
      example: "Sewerage Network Construction in Lilongwe",
      image: "/images/services/civil.jpg",
    },
    {
      title: "Building Construction",
      desc: "Construction of commercial buildings, schools, and institutional infrastructure projects.",
      example: "Girls Secondary School at Chiwembu Village",
      image: "/images/services/building.jpg",
    },
    {
      title: "Steel Container Installations",
      desc: "Construction of plinths and installation of steel containers for facilities like data centers.",
      example: "Data Center Plinth for Lilongwe Water Board",
      image: "/images/services/container.jpg",
    },
    {
      title: "Road Maintenance",
      desc: "Routine and preventive road maintenance including drainage, grading, and repairs.",
      example: "Kasungu Trunk and District Roads",
      image: "/images/services/road.jpg",
    },
    {
      title: "Supply & Installation",
      desc: "Supply of construction materials such as quarry stone, sand, and structural components.",
      example: "Material supply for large infrastructure projects",
      image: "/images/services/supply.jpg",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* HEADER SECTION (lightweight like About) */}
      <section className="py-12 text-center bg-gradient-to-r from-[#0B335A]/10 to-[#007BFF]/10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B335A]">
          Our Services
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Delivering innovative, reliable, and high-quality construction solutions across Malawi.
        </p>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <p className="text-lg text-gray-600">
          Anek Construction offers a wide range of civil engineering and construction services, from large-scale infrastructure to specialized building works. Our experienced team ensures quality, efficiency, and reliability in every project.
        </p>
      </section>

      {/* SERVICES LIST */}
      <section className="max-w-6xl mx-auto px-4 pb-16 space-y-12">
        {services.map((service, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-xl font-semibold text-[#007BFF]">
                {service.title}
              </h2>
              <p className="mt-3 text-gray-600">{service.desc}</p>
              <p className="mt-2 text-sm italic text-gray-500">
                Example: {service.example}
              </p>

              <Button className="mt-4" asChild>
                <Link href="/contact">Request Service</Link>
              </Button>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#0B335A] text-white py-16 text-center">
        <h2 className="text-2xl font-bold">
          Need a Reliable Construction Partner?
        </h2>
        <p className="mt-2 opacity-80">
          Let’s discuss your project and deliver excellence together.
        </p>
        <Button className="mt-6" asChild>
          <Link href="/contact">Get a Quote</Link>
        </Button>
      </section>
    </div>
  );
}
