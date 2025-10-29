import React from "react";

export default function LabCard({ Icon, title, description, link }) {
  return (
    <a
      href={link}
      className="flex flex-col items-start p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200 w-full md:w-80"
    >
      <div className="text-3xl mb-4 text-blue-500">
        <Icon />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
}
