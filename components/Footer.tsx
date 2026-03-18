import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Elevate. All rights reserved.
        </div>

        {/* CENTER LINKS */}
        <div className="flex gap-6 text-sm text-gray-600">
          <Link href="#" className="hover:text-black transition">
            About
          </Link>
          <Link href="#" className="hover:text-black transition">
            Services
          </Link>
          <Link href="#" className="hover:text-black transition">
            Projects
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-black transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-black transition">
            Twitter
          </a>
          <a href="#" className="hover:text-black transition">
            GitHub
          </a>
        </div>

      </div>

    </footer>
  );
}