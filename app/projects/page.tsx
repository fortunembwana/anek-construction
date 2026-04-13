"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "1",
      title: "Lilongwe Water Board Data Center",
      desc: "High-quality construction of a steel container plinth.",
      category: "civil",
      tag: "Featured Project",
      image: "/images/projects/project1.jpg",
    },
    {
      id: "2",
      title: "Sewerage Network Projects",
      desc: "Efficient construction of sewer lines and infrastructure.",
      category: "infrastructure",
      tag: "Major Infrastructure",
      image: "/images/projects/project2.jpg",
    },
    {
      id: "3",
      title: "Girls Secondary School",
      desc: "Modern educational facility construction.",
      category: "building",
      tag: "Education Project",
      image: "/images/projects/project3.jpg",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-white text-gray-800">
      {/* HEADER */}
      <section className="py-12 text-center bg-gradient-to-r from-[#0B335A]/10 to-[#007BFF]/10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B335A]">
          Our Projects
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of completed and ongoing projects.
        </p>
      </section>

      {/* FILTER */}
      <section className="py-8 text-center">
        <div className="flex flex-wrap justify-center gap-3">
          {["all", "civil", "building", "infrastructure"].map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="hover:shadow-xl transition">
            <CardContent className="p-4">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <span className="inline-block mt-3 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                {project.tag}
              </span>

              <h3 className="mt-3 text-lg font-semibold text-[#007BFF]">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {project.desc}
              </p>

              <Link href={`/projects/${project.id}`}>
                <Button className="mt-4 w-full">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* BLUE CONNECTOR */}
      <section className="bg-[#0B335A] text-white py-16 text-center">
        <h2 className="text-2xl font-bold">Have a Project in Mind?</h2>
        <p className="mt-2 opacity-80">
          Let’s bring your vision to life with our expertise.
        </p>
        <Button className="mt-6" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>
    </div>
  );
}