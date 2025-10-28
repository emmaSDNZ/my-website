import React from 'react'
import Image from 'next/image';
export default function Content() {
    
    const texto = "Software Developer & Data Science Specialist — solving complex real-world problems with intelligent systems";
  return (
    <>
        <div>
          <p>{texto}</p>
        </div>
        <div>
            <Image
            src="/image.jpg"
            alt="Profile Picture"
            width={500}   // ancho en px
            height={500}  // alto en px
            />

        </div>
    </>
  )
}
