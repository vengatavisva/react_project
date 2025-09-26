import React from "react";
import { Phone, Mail, MapPin, Globe, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <main className="mt-20 font-sans">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-10">
              We're here to help and answer any questions you might have.
              We look forward to hearing from you.
            </p>

            <div className="flex items-center mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-4">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-gray-700 font-medium">Phone</p>
                <p className="text-gray-600">+1-555-123-4567</p>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-4">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-gray-700 font-medium">Email</p>
                <p className="text-gray-600">support@connect.com</p>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-4">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-gray-700 font-medium">Address</p>
                <p className="text-gray-600">
                  123 Connect St, Tech City, 12345
                </p>
              </div>
            </div>

            <div className="mt-6">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.51346879374!2d76.88483340409108!3d11.013957788114709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1758890875015!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md shadow"
            />
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-6 bg-gray-100 text-center text-gray-600 text-sm">
        © 2024 Connect. All rights reserved.
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="text-gray-500 hover:text-blue-600">
            <Globe size={18} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600">
            <Twitter size={18} />
          </a>
        </div>
      </footer>
    </main>
  );
}
