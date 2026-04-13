"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function About() {
  const [selected, setSelected] = useState<any>(null);

  const team = [
    {
      name: "Andy Koloko",
      role: "Managing Director",
      desc: "Leads strategic direction and ensures high-quality project delivery.",
      image: "/images/team/andy.jpg",
    },
    {
      name: "Allan Kaukonde",
      role: "Quantity Surveyor",
      desc: "Handles cost estimation and project budgeting efficiently.",
      image: "/images/team/allan.jpg",
    },
    {
      name: "Emmanuel Thawani",
      role: "Contracts Manager",
      desc: "Oversees contracts and ensures compliance and execution.",
      image: "/images/team/emmanuel.jpg",
    },
    {
      name: "Evance Nkorongo",
      role: "Quantity Surveyor",
      desc: "Manages project costs and financial efficiency.",
      image: "/images/team/evance.jpg",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* HEADER */}
      <section className="py-12 text-center bg-gradient-to-r from-[#0B335A]/10 to-[#007BFF]/10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B335A]">
          About Anek Construction
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Committed to quality, sustainable, and safe construction solutions across Malawi.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-[#0B335A]">
          Who We Are
        </h2>

        <p className="mt-6 text-lg text-gray-600 text-center">
          Anek Construction was founded in 2008 and is registered with the
          National Construction Industry Council. We provide innovative,
          high-quality civil and building solutions across Malawi.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="p-6 rounded-2xl bg-gray-50 shadow-sm">
            <h3 className="text-lg font-semibold text-[#007BFF]">
              Our Mission
            </h3>
            <p className="mt-3 text-gray-600">
              To safely deliver projects on time and within budget while
              benefiting customers, employees, and communities.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 shadow-sm">
            <h3 className="text-lg font-semibold text-[#007BFF]">
              Our Vision
            </h3>
            <p className="mt-3 text-gray-600">
              To be Malawi’s most trusted construction partner known for
              excellence, innovation, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#007BFF]">
            Meet Our Core Team
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {team.map((member, i) => (
              <Card
                key={i}
                className="cursor-pointer hover:shadow-xl transition"
                onClick={() => setSelected(member)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto relative rounded-full overflow-hidden border-2 border-[#007BFF]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 font-semibold">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent>
          {selected && (
            <div className="text-center">
              <div className="w-28 h-28 mx-auto relative rounded-full overflow-hidden border-2 border-[#007BFF] mb-4">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{selected.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {selected.role}
              </p>
              <p className="mt-4 text-gray-600">{selected.desc}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* ✅ BLUE CONNECTOR (MATCHES HOME & SERVICES) */}
      <section className="bg-[#0B335A] py-16"></section>
    </div>
  );
}