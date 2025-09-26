import React from "react";
import { Search, Monitor, Rocket } from "lucide-react";
import main from "../assets/main.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

export default function Home() {
  return (
    <main className="font-sans">
      <section className="relative">
        <img
          src={main}
          alt="Hero"
          className="w-full h-[550px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/50">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            Empowering Businesses with Innovative Technology
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            We deliver cutting-edge solutions tailored to your unique needs,
            driving growth and efficiency.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
            Explore Our Services
          </button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-14">
          Our Core Values
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
          <img src={img1} alt="Client-Centric" className="w-full h-90 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
              <p className="text-gray-600 mt-2">
                We constantly explore new technologies and approaches to deliver
                groundbreaking solutions.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
            <img src={img2} alt="Client-Centric" className="w-full h-90 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Client-Centric</h3>
              <p className="text-gray-600 mt-2">
                Your success is our priority. We work closely with you to
                understand your goals and deliver tailored solutions.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
          <img src={img3} alt="Client-Centric" className="w-full h-90 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Excellence</h3>
              <p className="text-gray-600 mt-2">
                We are committed to delivering high-quality services and
                solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-14">
          How It Works
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 text-center">
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-blue-100 mb-6">
              <Search className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">1. Discovery</h3>
            <p className="text-gray-600 mt-3">
              We start by understanding your vision, goals, and challenges.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-blue-100 mb-6">
              <Monitor className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              2. Design & Develop
            </h3>
            <p className="text-gray-600 mt-3">
              We craft a bespoke solution, focusing on user experience and robust
              architecture.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-blue-100 mb-6">
              <Rocket className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              3. Deploy & Scale
            </h3>
            <p className="text-gray-600 mt-3">
              We launch your project and provide ongoing support for continuous
              growth.
            </p>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-14">
          Latest Blog Posts
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          <div className="bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
            <img src={img4} alt="AI in Business" className="w-full h-70 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">
                The Future of AI in Business
              </h3>
              <p className="text-gray-600 mt-3">
                Discover how artificial intelligence is reshaping industries and
                what it means for your business.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
            <img src={img5} alt="Secure Transformation" className="w-full h-70 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">
                10 Tips for a Secure Digital Transformation
              </h3>
              <p className="text-gray-600 mt-3">
                Navigate your digital journey with confidence by implementing
                these essential security practices.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
            <img src={img6} alt="Cloud Computing" className="w-full h-70 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">
                The Power of Cloud Computing for Small Businesses
              </h3>
              <p className="text-gray-600 mt-3">
                Learn how leveraging the cloud can provide small businesses with a
                competitive edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 bg-gray-100 text-center text-gray-600 text-sm">
        © 2024 Innovatech Solutions. All rights reserved. |
        <span className="ml-2 cursor-pointer hover:underline">Privacy Policy</span>{" "}
        |{" "}
        <span className="ml-2 cursor-pointer hover:underline">Terms of Service</span>
      </footer>
    </main>
  );
}
