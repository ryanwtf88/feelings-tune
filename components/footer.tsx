import Link from "next/link";
import { FaYoutube, FaFacebook, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Feelings Tune</h3>
            <p className="text-sm text-muted-foreground">
              অনুভূতির সুর - Bengali music and cultural content channel dedicated to bringing you the finest Islamic songs and cultural performances.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-muted-foreground hover:text-primary">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-primary">
                  Support Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://youtube.com/@feelingstune"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <FaYoutube className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/FeelingsOfTune"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/OporupShilpiGosthi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <FaPhone className="mr-2 h-4 w-4" />
              <span>+880 1795-583950</span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Feelings Tune. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
