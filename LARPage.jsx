import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <motion.img
          src="/LAR Digital.png"
          alt="LAR Digital Logo"
          className="mx-auto mb-6 w-40"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          LAR Digital – Affordable Web Design That Works
        </motion.h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Professional, simple, and effective websites designed to help your business grow.
        </p>
      </section>

      {/* Services Section */}
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mb-16">
        {[ 
          { title: "Landing Page", price: "£149.99", desc: "A sleek one-page site to showcase your business." },
          { title: "Website Overhaul", price: "£249.99", desc: "Redesign and modernize your existing site." },
          { title: "SEO", price: "£300", desc: "Improve your ranking and visibility online." }
        ].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition bg-slate-800 text-white border border-slate-700">
              <CardContent className="p-6 text-center">
                <h2 className="text-2xl font-semibold mb-2 text-cyan-400">{service.title}</h2>
                <p className="text-gray-300 mb-4">{service.desc}</p>
                <p className="text-xl font-bold mb-4 text-blue-400">{service.price}</p>
                <Button variant="default" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-xl shadow-md">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">Contact Me</h2>
          {/*
            ACTION: Replace "YOUR_FORMSPREE_ID" with your unique form endpoint from Formspree.
          */}
          <form action="https://formspree.io/f/xkgykvjk" method="POST" className="grid gap-4">
            <input type="hidden" name="_subject" value="New LAR Digital Inquiry" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="p-3 border rounded-lg bg-slate-800 border-slate-700 text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="p-3 border rounded-lg bg-slate-800 border-slate-700 text-white"
              required
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="p-3 border rounded-lg bg-slate-800 border-slate-700 text-white"
              required
            >
              <option value="">Select a Service</option>
              <option value="Landing Page">Landing Page (£149.99)</option>
              <option value="Website Overhaul">Website Overhaul (£249.99)</option>
              <option value="SEO">SEO (£300)</option>
            </select>
            <textarea
              name="message"
              placeholder="Tell me a little about your project..."
              value={form.message}
              onChange={handleChange}
              className="p-3 border rounded-lg bg-slate-800 border-slate-700 text-white"
              rows="4"
            />
            <Button type="submit" className="w-full py-3 text-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl shadow-md">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400">
        © {new Date().getFullYear()} LAR Digital. All rights reserved.
      </footer>
    </div>
  );
}
