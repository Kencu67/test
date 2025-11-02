import React from "react";
import { Github, Twitter, Instagram, Linkedin, Play } from "lucide-react";

// Single-file React component for a composer's portfolio website.
// Uses Tailwind CSS for styling. Default export is the page component.

export default function ComposerWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-xl font-semibold tracking-tight">Your Name</div>
            <div className="text-sm text-gray-600">Composer • Sound Designer</div>
          </div>

          {/* Socials only — no contact form or email */}
          <nav className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="hover:text-blue-500">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-700">
              <Github size={18} />
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-28">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Your Name — Composer</h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">Cinematic, hybrid, and experimental scores for film, theatre and games.</p>

            <div className="mt-6 flex items-center gap-3">
              <a href="#works" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border font-medium hover:bg-gray-100">
                <Play size={16} /> Listen
              </a>
              <a href="#about" className="text-sm text-gray-600 hover:underline">About</a>
            </div>
          </div>

          {/* Visual / Cover */}
          <div className="w-full h-64 md:h-80 rounded-2xl bg-gradient-to-tr from-gray-200 to-gray-100 flex items-center justify-center border">
            <div className="text-center">
              <div className="text-sm text-gray-500">Album / Cue cover</div>
              <div className="mt-4 w-40 h-40 bg-gray-300 rounded-lg flex items-center justify-center">Artwork</div>
            </div>
          </div>
        </section>

        {/* Works / Featured */}
        <section id="works" className="border-t py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-semibold">Selected Works</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <article key={i} className="p-4 bg-white rounded-2xl shadow-sm border">
                  <div className="w-full h-40 rounded-lg bg-gray-100 flex items-center justify-center">Artwork</div>
                  <h3 className="mt-4 font-medium">Cue Title #{i + 1}</h3>
                  <p className="mt-2 text-sm text-gray-600">Short description of the cue and where it was used — film, theatre or game.</p>
                  <div className="mt-4 flex items-center gap-3">
                    <a href="#" className="text-sm font-medium hover:underline">Play</a>
                    <a href="#" className="text-sm text-gray-500">More</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About / Bio */}
        <section id="about" className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-semibold">About</h2>
            <div className="mt-6 bg-white border rounded-2xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed">
                Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Genres</h4>
                  <p className="mt-1 text-sm text-gray-700">Cinematic · Hybrid · Orchestral · Electronic</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Credits</h4>
                  <p className="mt-1 text-sm text-gray-700">Short list of notable projects — film titles, theatre, games.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News / Updates */}
        <section className="py-16 border-t">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-semibold">News & Updates</h2>
            <ul className="mt-6 space-y-4">
              <li className="bg-white border rounded-lg p-4">Release: New single — details coming soon.</li>
              <li className="bg-white border rounded-lg p-4">Premiere: Live performance at XYZ Theatre.</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Your Name</div>
          <div className="text-sm text-gray-600">Built with care.</div>
        </div>
      </footer>
    </div>
  );
}
