import Link from "next/link";
import { FaYoutube, FaPlay, FaHeart, FaHandHoldingHeart } from "react-icons/fa";

export default function Home() {
  const featuredVideos = [
    {
      id: 1,
      title: "বুবুগো তুমি একি করিলা😄",
      description: "7.1M+ views - Most popular nasheed",
      thumbnail: "https://i.ytimg.com/vi/Nn0GzKWh_Wg/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=Nn0GzKWh_Wg",
    },
    {
      id: 2,
      title: "পিছনের ঐ দরজা দিয়া পালায় হাসিনা😄",
      description: "365K+ views - Popular nasheed",
      thumbnail: "https://i.ytimg.com/vi/gNyG1dJO8M0/sddefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=gNyG1dJO8M0",
    },
    {
      id: 3,
      title: "বর্তমান ছেলে মেয়েদের পরিস্থিতি নিয়ে সমসাময়ীক সংগীত | Haram Relation",
      description: "212K+ views - Social awareness song",
      thumbnail: "https://i.ytimg.com/vi/dkX6wRMHUw0/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dkX6wRMHUw0",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-primary via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                Feelings Tune
              </span>
            </h1>
            <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">অনুভূতির সুর</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              আসসালামু আলাইকুম। প্রিয় ভিউয়ারস, উন্নত এবং সুন্দর ভিডিও মেকিং এর জন্য স্পন্সর এবং ডোনেশন একটা ফ্যাক্ট।
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://youtube.com/@feelingstune"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <FaYoutube className="h-6 w-6" />
                Visit Our Channel
              </a>
              <Link
                href="/support"
                className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 text-lg font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                <FaHandHoldingHeart className="h-5 w-5" />
                Support Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Featured Content</h2>
            <p className="text-muted-foreground">
              Explore our latest videos and cultural performances
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredVideos.map((video) => (
              <a
                key={video.id}
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <FaPlay className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/videos"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              View All Videos
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FaHeart className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              আল্লাহর রহমত, নিজেদের প্রচেষ্টা এবং আপনাদের অব্যাহত ভালোবাসায় আমাদের এগিয়ে চলা। 
              আশাকরি আপনার সুযোগ থাকলে ভিডিও তৈরিতে স্পন্সর অথবা ডোনেট করে এ পথচলাকে বেগবান করবেন ইনশাআল্লাহ।
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
