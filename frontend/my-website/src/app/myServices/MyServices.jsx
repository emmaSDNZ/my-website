import React from 'react'
import CardServices from '../../../libreries/components/CardServices'
import { diccMyServices } from '../../../libreries/services/diccMyServices'

export default function MyServices() {
  return (
    <div className="flex flex-col items-center gap-10 w-full">

      {/* Encabezado */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900">My Services</h2>
        <p className="text-slate-600">Lo que hago y con lo que puedo ayudarte</p>
      </div>
      
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
