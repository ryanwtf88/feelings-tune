import { FaYoutube, FaFacebook, FaHeart, FaMusic, FaUsers } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">About Feelings Tune</h1>
            <p className="text-xl text-muted-foreground">সুরের-অনুভূতি</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold">Discover Our Islamic Music Brand</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Proin vulputate soluta class nostrum exercitationem ratione hac facere! Phasellus, distinctio unde urna officiis torquent sapien felis ornare pede occaecati netus sollicitudin impedit hendrerit nostrud orci voluptate hic sapien. Cupiditate reprehenderit quod massess.
                </p>
                <p>
                  আসসালামু আলাইকুম। প্রিয় ভিউয়ারস, Feelings Tune হলো একটি বাংলা সাংস্কৃতিক এবং ইসলামিক 
                  কন্টেন্ট চ্যানেল যা আপনাদের জন্য উন্নতমানের ভিডিও কন্টেন্ট তৈরি করে থাকে।
                </p>
                <p>
                  উন্নত এবং সুন্দর ভিডিও মেকিং এর জন্য স্পন্সর এবং ডোনেশন একটা ফ্যাক্ট। আমাদের আয়োজনগুলো 
                  তৈরিতে এর শূন্যতা ভীষণ। আল্লাহর রহমত, নিজেদের প্রচেষ্টা এবং আপনাদের অব্যাহত ভালোবাসায় 
                  আমাদের এগিয়ে চলা।
                </p>
                <p>
                  আশাকরি আপনার সুযোগ থাকলে ভিডিও তৈরিতে স্পন্সর অথবা ডোনেট করে এ পথচলাকে বেগবান করবেন ইনশাআল্লাহ।
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <FaMusic className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Certified Instructors</h3>
                <p className="text-muted-foreground">
                  Inceptos gravida odit excepteur cade distinctio, mollitia delectus erat.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <FaHeart className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Holistic Approach</h3>
                <p className="text-muted-foreground">
                  Inceptos gravida odit excepteur cade distinctio, mollitia delectus erat.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-lg border bg-card p-8">
              <h2 className="mb-6 text-2xl font-bold">Connect With Us</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaYoutube className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">YouTube Channel</p>
                    <a
                      href="https://youtube.com/@feelingstune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @feelingstune
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaFacebook className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Facebook Page - Feelings Of Tune</p>
                    <a
                      href="https://www.facebook.com/FeelingsOfTune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      www.facebook.com/FeelingsOfTune
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaFacebook className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Facebook Page - Oporup Shilpi Gosthi</p>
                    <a
                      href="https://www.facebook.com/OporupShilpiGosthi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      www.facebook.com/OporupShilpiGosthi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
