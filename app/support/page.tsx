"use client";

import { FaPhone, FaHandHoldingHeart, FaHeart, FaYoutube } from "react-icons/fa";
import { toast } from "sonner";

export default function SupportPage() {
  const phoneNumber = "+8801795583950";

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    toast.success("Phone number copied to clipboard!");
  };

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FaHandHoldingHeart className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Support Us</h1>
            <p className="text-xl text-muted-foreground">
              Help us continue creating quality content for you
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 rounded-lg border bg-card p-8">
              <h2 className="mb-6 text-2xl font-bold">আমাদের সহায়তা করুন</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  আসসালামু আলাইকুম। প্রিয় ভিউয়ারস,
                </p>
                <p>
                  উন্নত এবং সুন্দর ভিডিও মেকিং এর জন্য স্পন্সর এবং ডোনেশন একটা ফ্যাক্ট। 
                  আমাদের আয়োজনগুলো তৈরিতে এর শূন্যতা ভীষণ।
                </p>
                <p>
                  আল্লাহর রহমত, নিজেদের প্রচেষ্টা এবং আপনাদের অব্যাহত ভালোবাসায় আমাদের এগিয়ে চলা। 
                  আশাকরি আপনার সুযোগ থাকলে ভিডিও তৈরিতে স্পন্সর অথবা ডোনেট করে এ পথচলাকে বেগবান 
                  করবেন ইনশাআল্লাহ।
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-8">
                <FaPhone className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-4 text-xl font-bold">Contact for Donation</h3>
                <p className="mb-4 text-muted-foreground">
                  For sponsorship or donation inquiries, please contact us:
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">{phoneNumber}</span>
                  <button
                    onClick={copyPhoneNumber}
                    className="rounded-md bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-8">
                <FaHeart className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-4 text-xl font-bold">Other Ways to Support</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>Subscribe to our YouTube channel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>Like and share our videos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>Follow us on Facebook</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>Leave positive comments and feedback</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold">জাযাকাল্লাহু খাইরান</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Thank you for your support and love. May Allah bless you all.
              </p>
              <a
                href="https://youtube.com/@feelingstune?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <FaYoutube className="h-5 w-5" />
                Subscribe to Our Channel
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
