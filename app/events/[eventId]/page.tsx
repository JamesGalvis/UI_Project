import { Podcast } from "@/components/dinamic/events/podcast"
import { Clapperboard } from "lucide-react"
import Image from "next/image"
import { EventImages } from "./components/event-images"
import { getEvent } from "@/actions/get-events"
import { formatDate } from "@/utils/format-date"

export default async function EventPage({ params }: { params: { eventId: string } }) {
  const eventId = params.eventId
  const event = await getEvent(eventId)

  const startDate = formatDate(new Date(event.startDate))
  const endDate = formatDate(new Date(event.endDate))

  return (
    <div className="min-h-full bg-zinc-100/30">
      <header className="relative h-96">
        <Image
          src={event?.billboard!}
          alt="Imagen de fondo del evento"
          fill
          priority
          className="absolute object-cover inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            {event?.title}
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-8 max-w-screen-lg mx-auto">
        <div className="">
          {/* Left Column */}
          <div className="mb-8 lg:mb-0">
            <section className="shadow-lg rounded-lg p-6 mb-8 lg:mb-6  bg-white">
              <h2 className="text-2xl font-bold mb-4">{event?.title}</h2>
              <p className="text-gray-600 mb-4">{event?.description}</p>
              <div className="mb-4 space-y-1">
                <div className="flex gap-1">
                  <h3 className="font-semibold">Inicio: <span className="font-normal">{startDate}</span></h3>
                </div>
                <div className="flex gap-1">
                  <h3 className="font-semibold">Fin: <span className="font-normal">{endDate}</span></h3>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-semibold">Ubicación:</h3>
                  <p>{event.address}</p>
                </div>
              </div>
            </section>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Podcast */}
              <Podcast url={event.podcastUrl} />

              {/* YouTube Video */}
              <section className="mb-8 lg:mb-6 shadow-lg rounded-lg p-6 bg-white">
                <h2 className="text-2xl font-bold mb-4">
                  <Clapperboard className="size-5 mr-3 inline-block" /> Video
                </h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={event.videoUrl}
                    // frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[300px] md:h-[200px]"
                  ></iframe>
                </div>
              </section>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Event Images */}
            <section className="">
              <h2 className="text-2xl font-bold mb-4">Imágenes del Evento</h2>
              <EventImages images={event.images} />
              {/* <div className="grid xs:grid-cols-2 gap-4">
                <Image
                  src={event?.billboard!}
                  alt="Imagen del evento 1"
                  width={400}
                  height={300}
                  className="rounded-lg aspect-square object-cover"
                />
                <Image
                  src={event?.billboard!}
                  alt="Imagen del evento 2"
                  width={400}
                  height={300}
                  className="rounded-lg aspect-square object-cover"
                />
                <Image
                  src={event?.billboard!}
                  alt="Imagen del evento 3"
                  width={400}
                  height={300}
                  className="rounded-lg aspect-square object-cover"
                />
                <Image
                  src={event?.billboard!}
                  alt="Imagen del evento 4"
                  width={400}
                  height={300}
                  className="rounded-lg aspect-square object-cover"
                />
              </div> */}
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
