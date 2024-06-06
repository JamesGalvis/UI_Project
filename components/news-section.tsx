import NewsCard from './news-card'

export default function NewsSection() {
  return (
    <section
      key="1"
      className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-6xl mx-auto p-4"
    >
      {/* News 1 */}
      <div className="relative group overflow-hidden rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex flex-col items-start justify-center object-cover w-full  h-[250px] rounded-lg px-5">
            <h2 className="xs:text-center lg:text-3xl text-[26px] font-bold text-foreground/90 italic">
              Noticias
            </h2>
            <p className="text-lg text-gray-500 xs:text-center text-left">
              Encuentra las ultimas novedades
            </p>
          </div>
        </div>

        <NewsCard
          href="#"
          imageSrc="/images/composition-2.svg"
          imageHeight={400}
          imageWidth={600}
          imageAspectRatio="600/400"
          title="Exciting New Product Launch"
          paragraph="Get ready for our latest and greatest product, coming soon!"
          type="Featured"
          mainNews
        />
      </div>

      {/* News 2 */}
      <div className="grid grid-cols-1 ms:grid-cols-2 gap-6">
        <NewsCard
          href="#"
          imageSrc="/images/composition-3.svg"
          title="Introducing Our Latest Feature"
          paragraph="Learn about the exciting new capabilities added."
          type="Culture"
        />

        <NewsCard
          href="#"
          imageSrc="/images/composition-4.svg"
          title="Company Expansion Announcement"
          paragraph="Read about our exciting plans for growth and new locations."
          type="Tecnology"
        />

        <NewsCard
          href="#"
          imageSrc="/images/composition-7.svg"
          title="Upcoming Webinar on Industry Trends"
          paragraph="Sign up now to learn about the latest industry insights."
          type="New"
        />

        <NewsCard
          href="#"
          imageSrc="/images/composition-14.svg"
          title="Customer Success Story Highlight"
          paragraph="Read about how one of our customers achieved amazing results."
          type="Science"
        />
      </div>
    </section>
  )
}

{
  /* <div>
          <Image
            alt="Featured News"
            className="object-cover w-full h-80"
            height="400"
            width="600"
            src="/images/composition-2.svg"
            style={{
              aspectRatio: '600/400',
              objectFit: 'cover',
            }}
          />
          <div className="bg-white p-6 dark:bg-gray-950">
            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
              Featured
            </span>
            <h3 className="font-bold text-2xl mb-2">
              Exciting New Product Launch
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Get ready for our latest and greatest product, coming soon!
            </p>
            <Button size="sm">Learn More</Button>
          </div>
        </div> */
}
