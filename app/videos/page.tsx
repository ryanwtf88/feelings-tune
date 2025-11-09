import { FaPlay, FaYoutube } from "react-icons/fa";

export default function VideosPage() {
  const videoCategories = [
    {
      id: 1,
      title: "জনপ্রিয় ইসলামী সংগীত | Popular Nasheed",
      videos: [
        { 
          id: 1, 
          title: "বুবুগো তুমি একি করিলা😄", 
          views: "7.1M", 
          duration: "3:59",
          thumbnail: "https://i.ytimg.com/vi/Nn0GzKWh_Wg/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/watch?v=Nn0GzKWh_Wg"
        },
        { 
          id: 2, 
          title: "পিছনের ঐ দরজা দিয়া পালায় হাসিনা😄", 
          views: "365K", 
          duration: "3:51",
          thumbnail: "https://i.ytimg.com/vi/gNyG1dJO8M0/mqdefault.jpg",
          videoUrl: "https://www.youtube.com/watch?v=gNyG1dJO8M0"
        },
        { 
          id: 3, 
          title: "বর্তমান ছেলে মেয়েদের পরিস্থিতি নিয়ে সমসাময়ীক সংগীত | Haram Relation", 
          views: "212K", 
          duration: "4:03",
          thumbnail: "https://i.ytimg.com/vi/dkX6wRMHUw0/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/watch?v=dkX6wRMHUw0"
        },
        { 
          id: 4, 
          title: "Ami Banglay Gaan Gai | আমি বাংলায় গান গাই", 
          views: "13K", 
          duration: "5:14",
          thumbnail: "https://i.ytimg.com/vi/UvfiMmqHeq4/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/watch?v=UvfiMmqHeq4"
        },
      ],
    },
    {
      id: 2,
      title: "Latest Uploads",
      videos: [
        { 
          id: 5, 
          title: "ভোটের গান | নতুন বাংলাদেশ", 
          views: "1.7K", 
          duration: "2:57",
          thumbnail: "https://i.ytimg.com/vi/7eFk9IFQIUU/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/watch?v=7eFk9IFQIUU"
        },
        { 
          id: 6, 
          title: "হৃদয়বিদারক গান | লাশের পোড়া গন্ধ 🥲", 
          views: "1.6K", 
          duration: "2:49",
          thumbnail: "https://i.ytimg.com/vi/h-dSl5waijI/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/watch?v=h-dSl5waijI"
        },
        { 
          id: 7, 
          title: "Ami Notun Chor", 
          views: "2.8K", 
          duration: "3:30",
          thumbnail: "https://i.ytimg.com/vi/q8Pkuf_5ZZo/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/watch?v=q8Pkuf_5ZZo"
        },
      ],
    },
    {
      id: 3,
      title: "Cultural & Social Songs",
      videos: [
        { 
          id: 8, 
          title: "Fakhrul Saber Bashay Na Giya KOi palai Roila Kawago", 
          views: "6K", 
          duration: "7:24",
          thumbnail: "https://i.ytimg.com/vi/CbbheE2mpNE/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/watch?v=CbbheE2mpNE"
        },
        { 
          id: 9, 
          title: "জালাময়ী পরাধীনতার গান || আমি দেখিনি ৫২, আমি দেখিনি ৭১", 
          views: "N/A", 
          duration: "3:39",
          thumbnail: "https://i.ytimg.com/vi/DmHK97nk26o/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/watch?v=DmHK97nk26o"
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Our Videos</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Explore our collection of Islamic songs, cultural performances, and more
            </p>
            <a
              href="https://youtube.com/@feelingstune"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <FaYoutube className="h-6 w-6" />
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {videoCategories.map((category) => (
            <div key={category.id} className="mb-16">
              <h2 className="mb-6 text-2xl font-bold">{category.title}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.videos.map((video) => (
                  <a
                    key={video.id}
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg"
                  >
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                        <FaPlay className="h-16 w-16 text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-1 text-xs text-white">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-semibold line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{video.views} views</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 rounded-lg border bg-card p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Want to See More?</h2>
            <p className="mb-6 text-muted-foreground">
              Subscribe to our YouTube channel for the latest videos and updates
            </p>
            <a
              href="https://youtube.com/@feelingstune?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <FaYoutube className="h-6 w-6" />
              Subscribe Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
