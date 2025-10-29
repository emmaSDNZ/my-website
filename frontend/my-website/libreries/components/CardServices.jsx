import React from 'react'


export default function Card({Icon, title, description}) {
  return (
    <div className="
      group 
      flex flex-col items-center text-center 
      gap-3 p-6 w-64
      rounded-2xl shadow-sm 
      border border-slate-200 
      bg-white 
      transition-all duration-300 
      hover:shadow-lg hover:-translate-y-1 hover:border-slate-300
    ">
      {/* Ícono */}
      <div className="
        text-4xl 
        text-slate-600
        group-hover:text-slate-800 
        transition-colors">
        {<Icon />}
      </div>

      {/* Título */}
      <h3 className="font-semibold text-lg text-slate-800">
        {title} 
      </h3>

      {/* Descripción */}
      <p className="text-sm text-slate-500">
        {description}
      </p>
    </div>
  )
}
