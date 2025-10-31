import React from 'react'
import Image from 'next/image';
import { diccHome } from '../services/diccHome';
export default function Home() {
  
  return (
    <>
        <div>
          <p>{diccHome.description}</p>
        </div>
        <div>
            <Image
            src={diccHome.imagen.img}
            alt={diccHome.imagen.alt}
            width={diccHome.imagen.width}
            height={diccHome.imagen.height}
            />

        </div>
    </>
  )
}
