"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.service ||
      !form.message
    ) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Message submitted successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="bg-white text-gray-800">

      {/* HEADER STRIP */}
      <section className="py-12 text-center bg-gradient-to-r from-[#0B335A]/10 to-[#007BFF]/10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B335A]">
          Contact Us
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          We are ready to help you with project inquiries, quotations, and support.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-[#0B335A]">
          Our Office
        </h2>

        <p className="mt-4 text-gray-600">
          Anek Construction, P.O. Box X92, Lilongwe, Malawi
        </p>

        <p className="mt-2 text-gray-600">
          Phone:{" "}
          <a className="text-[#007BFF]" href="tel:+265999300826">
            +265 999 300 826
          </a>{" "}
          /{" "}
          <a className="text-[#007BFF]" href="tel:+265888917233">
            +265 888 917 233
          </a>
        </p>

        <p className="mt-2 text-gray-600">
          Email:{" "}
          <a className="text-[#007BFF]" href="mailto:info@anek.mw">
            info@anek.mw
          </a>
        </p>
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        <Card className="shadow-lg">
          <CardContent className="p-6">

            <h2 className="text-xl font-bold text-center text-[#007BFF] mb-6">
              Send a Message / Request Quote
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Select Service</option>
                <option value="Civil Works">Civil Works</option>
                <option value="Building Construction">Building Construction</option>
                <option value="Road Maintenance">Road Maintenance</option>
                <option value="Supply & Installation">Supply & Installation</option>
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg h-32"
              />

              <button
                type="submit"
                className="w-full bg-[#007BFF] text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>

            </form>
          </CardContent>
        </Card>
      </section>

      {/* MAP SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-12 grid md:grid-cols-2 gap-4">
        <iframe
          className="w-full h-80 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
          loading="lazy"
        />
        <iframe
          className="w-full h-80 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
          loading="lazy"
        />
      </section>

      {/* 🔵 CONSISTENT BRAND BASE (FIXED FOOTER CONNECTOR) */}
      <section className="h-24 bg-[#0B335A]" />

    </div>
  );
}