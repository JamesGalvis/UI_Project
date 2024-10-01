export interface Billboard {
  id: string
  title: string
  description: string
  image: string
  buttonLabel: string
  href: string
  createdAt: Date
  updatedAt: Date
}

export interface AboutUsInfo {
  id: string
  title: string
  description: string
  image: string
  reverse: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Event {
  id: string
  title: string
  description: string
  startDate: Date
  endDate: Date
  address: string
  billboard: string // Imagen del evento
  images: string[]
  podcastUrl: string
  videoUrl: string
  createdAt: Date
  updatedAt: Date
}

export type Testimony = {
  feedback: string
  name: string
  position: string
  imageSrc: string
}

export type NavLinks = {
  label: string
  href: string
}

export type NavbarNews = {
  label: string
  href: string
  imageSrc: string
}
