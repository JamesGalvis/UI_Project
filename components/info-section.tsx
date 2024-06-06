import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface InfoSectionProps {
  reverse?: boolean
  imageSrc: string
  title: string
  paragraph: string
  label: string
  className?: string
}
//  sm:h-[620px] h-[300px]
export default function InfoSection({
  reverse,
  imageSrc,
  label,
  paragraph,
  title,
  className,
}: InfoSectionProps) {
  return (
    <div
      className={cn(
        'sm:grid flex flex-col max-w-screen-xl mx-auto sm:grid-cols-2 grid-cols-1',
        className
      )}
      style={{
        gridTemplateAreas: reverse ? "'content image'" : "'image content'",
      }}
    >
      <div
        className="[grid-area:image] w-full"
        // style={{
        //   backgroundImage: `url(${imageSrc})`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: '50% 50%',
        // }}
      >
        <Image
          src={imageSrc}
          alt="Info Image"
          width={570}
          height={620}
          className={cn(
            'object-cover w-[570px] h-[620px] max-sm:w-full max-sm:h-[300px]',
            reverse ? 'sm:mr-auto' : 'sm:ml-auto'
          )}
        />
      </div>
      <div
        className={cn(
          '[grid-area:content] w-full flex-1 flex items-center justify-center sm:p-12 py-4 md:px-4 px-6',
          reverse && 'max-sm:text-right'
        )}
      >
        <div className="lg:w-[70%] md:w-[85%] w-full space-y-4 max-sm:py-4">
          <span className="font-bold text-base">{label}</span>
          <h2 className="text-3xl max-md:text-[26px] font-bold">{title}</h2>
          <p className="text-foreground/70 lg:text-lg max-md:text-[15px]">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  )
}
