import Carousel from "@/components/carousel"
import FlipCard from "@/components/flip-card"
import Footer from "@/components/footer"
import HeaderCard from "@/components/header-card"
import CarouselHeader from "@/components/dinamic/carousel-header"
import ImageGallery from "@/components/image-gallery"
import InfoSection from "@/components/info-section"
import InfoTabs from "@/components/info-tabs"
import Navbar from "@/components/navbar"
import NewsSection from "@/components/news-section"
import PresentationSupport from "@/components/presentation-support"
import StepCard from "@/components/step-card"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import { headersInfo } from "@/constants"
import { AboutUs } from "@/components/dinamic/about-us"
import { Events } from "@/components/dinamic/events/events"

export default function Home() {
  return (
    <div className="relative">
      <main>
        <CarouselHeader />

        <Events />

        <AboutUs />

        <ImageGallery />

        <div className="py-12 space-y-12 px-4">
          <h2 className="xs:text-center lg:text-3xl text-[26px] font-bold text-foreground/90 px-5">
            Artículos Relevantes
          </h2>
          <PresentationSupport
            title="Plantilla para la presentación"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni
          hic commodi maxime dolorem excepturi, voluptatum ex sed assumenda,
          porro officia eligendi est dolore esse provident expedita. Assumenda,
          obcaecati a?"
            imageSrc="/images/presentation-1.jpg"
          />
          <PresentationSupport
            title="Plantilla para la presentación"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni
          hic commodi maxime dolorem excepturi, voluptatum ex sed assumenda,
          porro officia eligendi est dolore esse provident expedita. Assumenda,
          obcaecati a?"
            imageSrc="/images/presentation-4.jpg"
            reverse
          />
        </div>

        <div className="md:flex items-center justify-center py-12 px-4 max-w-screen-lg mx-auto">
          <div className="max-md:mb-8 xs:space-y-3">
            <h2 className="max-md:text-center lg:text-3xl text-[26px] font-bold text-foreground/90">
              ¿Cómo funciona?
            </h2>
            <p className="text-lg text-gray-500 max-md:text-center">
              Sigue estos pasos sencillos para comenzar
            </p>
          </div>
          <div className="max-xs:space-y-8 max-md:py-8 max-md:px-4">
            <StepCard
              stepNumber="1"
              title="Registrarse"
              indication="Completa el formulario de registro con tus datos"
            />
            <StepCard
              stepNumber="2"
              title="Verificar correo"
              indication="Revisa tu bandeja de entrada y verifica tu email"
            />
            <StepCard
              stepNumber="3"
              title="Completar perfil"
              indication="Agrega más detalles a tu perfil para una mejor experiencia"
            />
            <StepCard
              stepNumber="4"
              title="Finalizar registro"
              indication="Completa el proceso de registro para acceder a tu cuenta"
            />
          </div>
        </div>

        <Carousel slidesLenght={headersInfo.length}>
          {headersInfo.map((info, i) => (
            <HeaderCard
              key={i}
              contentAlign="items-start"
              textAlign="text-left"
              title={info.title}
              description={info.subtitle}
              buttonLabel={info.buttonLabel}
              imageSrc={info.heroImgSrc}
              buttonHref=""
              className="h-[350px] bg-gray-400/30"
            />
          ))}
        </Carousel>

        <NewsSection />

        {/* <InfoTabs /> */}

        <div className="space-y-12 py-12">
          <h2 className="xs:text-center lg:text-3xl text-[26px] font-bold text-foreground/90 px-5">
            Conoce nuestros eventos especiales
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(263px,1fr))] max-w-screen-lg mx-auto gap-3 px-4 justify-items-center">
            <FlipCard />
            <FlipCard />
            <FlipCard />
            <FlipCard />
          </div>
        </div>

        <div className="py-12">
          <h2 className="xs:text-center lg:text-3xl text-[26px] font-bold text-foreground/90 px-5">
            Testimonios
          </h2>
          <TestimonialsCarousel />
        </div>
      </main>
    </div>
  )
}
