"use client";

import React from "react";

import { diccLabs } from "../../../libreries/services/diccLabs";
import LabCard from "../../../libreries/components/LabsCards";

export default function Labs() {
  return (
    <div className="flex flex-col items-center w-full py-16 px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Laboratorios y Proyectos</h1>
      <p className="text-gray-600 mb-12 max-w-3xl text-center">
        Aquí encontrarás mis laboratorios académicos, investigaciones y demostraciones de agentes de IA y LLMs aplicados a procesos empresariales.
      </p>

      <div className="flex flex-wrap justify-center gap-10 w-full max-w-6xl">
        {Object.keys(diccLabs).map((key) => {
          const { Icon, title, description, link } = diccLabs[key];
          return (
            <LabCard
              key={key}
              Icon={Icon}
              title={title}
              description={description}
              link={link}
            />
          );
        })}
      </div>
    </div>
  );
}