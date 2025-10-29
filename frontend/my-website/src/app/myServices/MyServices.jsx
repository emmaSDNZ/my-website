import React from 'react'
import CardServices from '../../../libreries/components/CardServices'
import { diccMyServices } from '../../../libreries/services/diccMyServices'

export default function MyServices() {
  return (
    <div className="flex flex-col items-center gap-10 w-full">

 {/* Título */}
      <h2 className="text-4xl font-bold mb-4">My Services</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Arquitectura, integración y automatización basada en IA para soluciones digitales y procesos empresariales.
      </p>
      
      {/* Render dinámico de cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(diccMyServices).map(([key, service]) => (
          <CardServices
            key={key}
            Icon={service.Icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
