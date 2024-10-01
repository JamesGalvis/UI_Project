import { getAboutUsInfo } from "@/actions/get-about-us-info"
import InfoSection from "../info-section"

export async function AboutUs() {
  const aboutUsInfo = await getAboutUsInfo()

  return (
    <div className="mb-12">
      {aboutUsInfo.map((info, i) => (
        <InfoSection
          key={i}
          title={info.title}
          description={info.description}
          imageSrc={info.image}
          reverse={info.reverse}
        />
      ))}
    </div>
  )
}
