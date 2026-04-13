import Image from "next/image";
import { notFound } from "next/navigation";

const projects = [
  {
    id: "1",
    title: "Lilongwe Water Board Data Center",
    desc: "This project involved the construction of a durable steel container plinth designed to support high-performance data infrastructure.",
    image: "/images/projects/project1.jpg",
  },
  {
    id: "2",
    title: "Sewerage Network Projects",
    desc: "Development of efficient sewerage systems including pipeline installation and drainage infrastructure.",
    image: "/images/projects/project2.jpg",
  },
  {
    id: "3",
    title: "Girls Secondary School",
    desc: "Construction of modern educational facilities aimed at improving access to quality education.",
    image: "/images/projects/project3.jpg",
  },
];

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="bg-white text-gray-800">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-[#0B335A]">
          {project.title}
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          {project.desc}
        </p>

        <div className="mt-8">
          <a
            href="/projects"
            className="text-[#007BFF] font-semibold hover:underline"
          >
            ← Back to Projects
          </a>
        </div>
      </section>

      {/* BLUE CONNECTOR */}
      <section className="bg-[#0B335A] text-white py-16 text-center">
        <h2 className="text-2xl font-bold">Start Your Own Project</h2>
        <p className="mt-2 opacity-80">
          Partner with us for reliable and high-quality construction.
        </p>
      </section>
    </div>
  );
}