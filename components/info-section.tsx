import { cn } from "@/lib/utils"
import Image from "next/image"

interface InfoSectionProps {
  reverse?: boolean
  imageSrc: string
  title: string
  description: string
  label?: string
  className?: string
}

export default function InfoSection({
  reverse,
  imageSrc,
  label,
  description,
  title,
  className,
}: InfoSectionProps) {
  return (
    <div
      className={cn(
        "md:grid flex flex-col max-w-screen-2xl mx-auto md:grid-cols-2 grid-cols-1",
        className
      )}
      style={{
        gridTemplateAreas: reverse ? "'content image'" : "'image content'",
      }}
    >
      <div className="relative [grid-area:image] w-full h-[620px] max-md:h-[450px] max-sm:h-[300px]">
        <Image
          src={imageSrc}
          alt="Info Image"
          fill
          priority
          className={cn(
            "object-cover size-full",
            reverse ? "sm:mr-auto" : "sm:ml-auto"
          )}
        />
      </div>
      <div
        className={cn(
          "[grid-area:content] w-full flex-1 flex items-center justify-center sm:p-12 py-4 md:px-4 px-6",
          reverse && "max-sm:text-right"
        )}
      >
        <div className="lg:w-[80%] md:w-[85%] max-sm:text-start w-full space-y-4 max-sm:py-4">
          <h2 className="text-3xl max-lg:text-[26px] font-bold">{title}</h2>
          <p className="text-foreground/70 lg:text-lg max-lg:text-[16px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
