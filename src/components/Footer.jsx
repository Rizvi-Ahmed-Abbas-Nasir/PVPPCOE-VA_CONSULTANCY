"use client";
import Image from "next/image";
import Logo from "../Assets/IMG/Logo.png";

export default function Footer() {
  return (
    <div>
      <div className="flex bg-gradient-to-b from-gray-800 to-gray-900 flex-col md:px-20 py-10">
        <h1 className="text-3xl font-bold text-white p-4 md:p-6 md:text-6xl">Let's Grow Your Brand</h1>

        <div className="flex flex-row flex-wrap">
          {services.map((service, index) => (
            <div key={index} className="text-white p-5 px-6">
              <ul className="border-l px-8">
                <p className="text-2xl md:text-3xl font-semibold pb-5">{service.title}</p>
                {service.items.map((item, idx) => (
                  <li key={idx} className="pb-2 text-slate-100 font-light hover:text-sky-300 cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center mt-6">
          <h1 className="text-4xl font-bold text-white p-6">PVPPCOE Consultancy</h1>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex flex-row flex-wrap text-white mt-4">
          {contacts.map((contact, index) => (
            <p key={index} className="px-8 text-slate-100 font-light">{contact}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
const services = [
  {
    title: "Main Services",
    items: [
      "Custom Web Design",
      "Custom Web Design",
      "Custom Web Design",
      "Custom Web Design",
      "Custom Web Design",
    ],
  },
  {
    title: "Main Services",
    items: [
      "Custom Web Design",
      "Custom Web Design",
      "Custom Web Design",
      "Custom Web Design",
      "Custom Web Design",
    ],
  },
  {
    title: "Main Services",
    items: [
      "Custom Web Design",
      "Custom Web Design",
      "Custom Web Design",
      "Custom Web Design",
      "Custom Web Design",
    ],
  },
  {
    title: "Main Services",
    items: [
      "Custom Web Design",
      "Custom Web Design",
      "Custom Web Design",
      "Custom Web Design",
      "Custom Web Design",
    ],
  },
];

const contacts = [
  "@pvppcoe.ac.in",
  "@pvppcoe.ac.in",
  "@pvppcoe.ac.in",
  "@pvppcoe.ac.in",
];
