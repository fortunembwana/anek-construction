"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Lilongwe Water Board Data Center",
      desc: "High-quality construction of a steel container plinth.",
    },
    {
      title: "Sewerage Network Projects",
      desc: "Efficient construction of sewer lines and infrastructure.",
    },
    {
      title: "Girls Secondary School",
      desc: "Modern educational facility construction.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* HERO */}
      <section className="relative flex items-center justify-center text-center h-[80vh] bg-gradient-to-br from-[#0B335A] to-[#007BFF] text-white">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Building the Future with Excellence
          </h1>
          <p className="text-lg opacity-90">
            Malawi’s trusted leader in civil engineering and construction,
            delivering quality infrastructure and innovative building solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/about">Learn More</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact" className="text-black">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* QUICK LINKS / SERVICES PREVIEW */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          {[
            { title: "Services", link: "/services" },
            { title: "Projects", link: "/projects" },
            { title: "About Us", link: "/about" },
            { title: "Contact", link: "/contact" },
          ].map((item, i) => (
            <Card
              key={i}
              className="hover:shadow-xl transition cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#007BFF]">
                  {item.title}
                </h3>
                <p className="text-sm mt-2 text-gray-600">
                  Explore more about {item.title.toLowerCase()}.
                </p>
                <Link href={item.link}>
                  <Button className="mt-4">View</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PROJECTS SLIDER */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#007BFF] mb-6">
            Featured Projects
          </h2>

          <Card className="p-6">
            <CardContent>
              <h3 className="text-xl font-semibold">
                {slides[currentSlide].title}
              </h3>
              <p className="text-gray-600 mt-2">
                {slides[currentSlide].desc}
              </p>

              <div className="flex justify-center gap-4 mt-6">
                <Button
                  variant="outline"
                  onClick={() =>
                    setCurrentSlide(
                      (currentSlide - 1 + slides.length) % slides.length
                    )
                  }
                >
                  Prev
                </Button>
                <Button
                  onClick={() =>
                    setCurrentSlide((currentSlide + 1) % slides.length)
                  }
                >
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0B335A] text-white py-16 text-center">
        <h2 className="text-2xl font-bold">
          Ready to Start Your Project?
        </h2>
        <p className="mt-2 opacity-80">
          Let’s build something great together.
        </p>
        <Button className="mt-6" asChild>
          <Link href="/contact">Request a Quote</Link>
        </Button>
      </section>
    </div>
  );
}
