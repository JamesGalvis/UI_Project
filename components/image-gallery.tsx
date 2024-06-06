'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const images = [
  '/images/composition-7.svg',
  '/images/composition-1.svg', // Cambia esto a las rutas de tus imágenes
  '/images/composition-2.svg',
  '/images/composition-3.svg',
  '/images/composition-4.svg',
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="flex max-sm:flex-col justify-center gap-4 p-4">
      <div
        className="sm:flex-1 relative lg:w-[740px] xl:w-[768px] max-w-screen-md max-sm:h-[60vh] rounded-md bg-red-500"
        // style={{ maxHeight: '80vh' }}
      >
        <Image
          src={selectedImage}
          alt="Selected"
          fill
          className="absolute w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="sm:grid sm:grid-cols-[repeat(auto-fill,minmax(100px,1fr))] sm:gap-2 flex max-sm:space-x-2 max-sm:overflow-x-auto">
        {images.map((image, index) => (
          <Button
            variant="ghost"
            key={index}
            className={cn('group grow relative w-24 h-20 min-w-24 min-h-20 sm:w-32 lg:w-40 lg:h-24 overflow-hidden transition-shadow hover:shadow-lg', selectedImage === image && 'border-2 border-blue-500')}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              fill
              className={cn(
                'absolute w-full h-full object-cover rounded-sm transition-transform duration-300 group-hover:scale-[1.3]',
                // selectedImage === image && 'border-2 border-blue-500'
              )}
            />
          </Button>
        ))}
      </div>
    </div>
  )
}
