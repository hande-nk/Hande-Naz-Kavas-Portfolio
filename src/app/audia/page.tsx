"use client";

import Link from "next/link";

export default function AudiaPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 space-y-16">
        <div className="mb-6">
        <Link
          href="/"
          className="underline hover:text-gray-400 text-sm mt-4 block"
        >
          ← Back to Portfolio
        </Link>
      </div>
      {/* Hero */}
      <section className="space-y-6 text-center">
        
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-4 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          Pre-launch · Concept stage
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Audia
        </h1>
        <p className="mx-auto max-w-2xl text-sm md:text-base text-gray-300">
          A brain-computer interface–powered music companion that detects your
          mood in real time and curates a dynamic playlist for focus, rest, or
          late-night grind sessions.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2 text-xs md:text-sm font-medium text-black hover:bg-emerald-300 transition">
            Join the waitlist (soon)
          </button>
          <a
            href="#idea"
            className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-xs md:text-sm text-gray-200 hover:border-gray-500 hover:text-white transition"
          >
            Learn more
            <span className="text-xs">↓</span>
          </a>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-800 bg-black/40 p-6">
          <h2 className="mb-3 text-lg font-semibold">The problem</h2>
          <p className="text-sm text-gray-300">
            We get stuck in the same playlists. You might be looping a genre for
            too long, or you know you want different energy—but you can’t quite
            put your finger on the exact song.
          </p>
          <p className="mt-3 text-sm text-gray-300">
            Manually searching, skipping, and tweaking playlists breaks focus,
            kills flow, and often leaves you more frustrated than when you
            started.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/40 bg-emerald-400/5 p-6">
          <h2 className="mb-3 text-lg font-semibold">The solution · Audia</h2>
          <p className="text-sm text-gray-200">
            Audia uses a small, non-invasive brain–computer interface (BCI) that
            you can easily put on your head. It detects your mood and cognitive
            state, suggests a few songs, learns your preferences, and builds a
            dynamic playlist around you.
          </p>
          <p className="mt-3 text-sm text-gray-200">
            Whether you&apos;re on a 5-minute class break, a 4-hour lock-in
            study session, or a 5 AM workout, Audia continuously adapts the BPM,
            intensity, and style of your music in real time—so you don&apos;t
            have to.
          </p>
        </div>
      </section>

      {/* Founder–idea fit */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Why Hande × Audia is a strong founder–idea fit
        </h2>
        <div className="grid gap-4 md:grid-cols-3 text-sm">
          <div className="rounded-2xl border border-gray-800 bg-black/40 p-4">
            <h3 className="mb-1 text-sm font-medium">BCI experience</h3>
            <p className="text-gray-300">
              Hands-on work with the Muse-2 headset and previous brain–computer
              interface projects builds intuition for what&apos;s feasible in
              non-invasive neurotechnology.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-black/40 p-4">
            <h3 className="mb-1 text-sm font-medium">Product &amp; dev</h3>
            <p className="text-gray-300">
              Prior experience building a Swift iOS app and a MERN web app
              lowers the friction of prototyping Audia&apos;s first product
              across mobile and web.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-black/40 p-4">
            <h3 className="mb-1 text-sm font-medium">User testing &amp; outreach</h3>
            <p className="text-gray-300">
              Consulting work with MasterCard Foundation and other projects
              builds skills in user research, structured experimentation, and
              talking to early adopters.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Core values</h2>
        <div className="flex flex-wrap gap-3 text-xs md:text-sm">
          <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-3 py-1 text-purple-200 border border-purple-500/40">
            🧶 Personalized
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 px-3 py-1 text-sky-200 border border-sky-500/40">
            🪼 Unique
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1 text-amber-200 border border-amber-500/40">
            🦦 Dynamic
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-500/10 px-3 py-1 text-slate-200 border border-slate-500/40">
            🧥 Private (by design)
          </span>
        </div>
        <p className="max-w-xl text-xs md:text-sm text-gray-400">
          Audia aims to be emotionally aware, context-sensitive, and
          privacy-preserving—tuned to your brain and your goals, not just your
          streaming history.
        </p>
      </section>

      {/* The idea – software / hardware */}
      <section id="idea" className="space-y-8">
        <h2 className="text-xl font-semibold">The idea · First principles</h2>

        {/* Software */}
        <div className="rounded-2xl border border-gray-800 bg-black/40 p-6 space-y-4">
          <h3 className="text-lg font-medium">Software: decoding mood &amp; preference</h3>
          <p className="text-sm text-gray-300">
            Long-term goal: build a model that learns the relationship between a
            user&apos;s brain activity and their response to different songs,
            without requiring constant manual feedback.
          </p>
          <ul className="mt-2 grid gap-3 text-xs md:text-sm md:grid-cols-2">
            <li className="space-y-1">
              <p className="font-medium text-gray-200">Model questions</p>
              <ul className="list-disc pl-4 text-gray-300">
                <li>Which brain regions should we target?</li>
                <li>What should be unsupervised vs. supervised?</li>
                <li>How should the architecture encode temporal EEG patterns?</li>
              </ul>
            </li>
            <li className="space-y-1">
              <p className="font-medium text-gray-200">Song features to explore</p>
              <ul className="list-disc pl-4 text-gray-300">
                <li>Genre, BPM, language, era</li>
                <li>Context tags (study, breakup, workout, etc.)</li>
                <li>Per-user &amp; cross-user like rate</li>
                <li>Linking songs to specific memories (e.g. films)</li>
              </ul>
            </li>
          </ul>

          <div className="mt-3 grid gap-3 text-xs md:text-sm md:grid-cols-2">
            <div>
              <p className="font-medium text-gray-200">
                Brain-state signals to decode
              </p>
              <ul className="mt-1 list-disc pl-4 text-gray-300">
                <li>Concentration vs. stress vs. drowsiness</li>
                <li>Positive vs. negative affect during a song</li>
                <li>
                  Annoyance/friction signals when something isn&apos;t working
                </li>
                <li>
                  Alignment with desired state (e.g. “more energy” vs. “calm”)
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-200">
                Example dataset: myBrainTunes
              </p>
              <p className="mt-1 text-gray-300">
                A study from Imperial College London recorded EEG responses of{" "}
                721 subjects to 30 songs using Emotiv EPOC+ headsets (14
                channels, 256 Hz). This kind of dataset can inform Audia&apos;s
                early modeling directions.
              </p>
              <Link
                href="https://mybraintunes.doc.ic.ac.uk/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex text-emerald-300 hover:text-emerald-200"
              >
                Read about myBrainTunes ↗
              </Link>
            </div>
          </div>
        </div>

        {/* Hardware */}
        <div className="rounded-2xl border border-gray-800 bg-black/40 p-6 space-y-4">
          <h3 className="text-lg font-medium">Hardware: headset or headphone?</h3>
          <p className="text-sm text-gray-300">
            Audia is envisioned as a small, comfortable, non-invasive BCI:
            something closer to headphones than lab equipment.
          </p>
          <ul className="mt-2 grid gap-3 text-xs md:text-sm md:grid-cols-2">
            <li className="space-y-1">
              <p className="font-medium text-gray-200">Key decisions</p>
              <ul className="list-disc pl-4 text-gray-300">
                <li>
                  Build custom hardware vs. leverage existing BCI platforms
                  (e.g. Emotiv, Muse).
                </li>
                <li>Headset vs. in-ear (AirPods-style) form factor.</li>
                <li>Which cortical regions to cover for music &amp; mood.</li>
              </ul>
            </li>
            <li className="space-y-1">
              <p className="font-medium text-gray-200">Inspiration &amp; references</p>
              <ul className="list-disc pl-4 text-gray-300">
                <li>Apple&apos;s BCI-related patents for audio devices.</li>
                <li>
                  Emotiv&apos;s headset lineup:{" "}
                  <Link
                    href="https://www.emotiv.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    emotiv.com
                  </Link>
                  .
                </li>
                <li>
                  Research on designing BCIs that bridge neurons and digital
                  systems.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* Competitive landscape – Endel */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Current landscape · Where Audia fits</h2>

        <div className="rounded-2xl border border-gray-800 bg-black/40 p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-medium">Endel</h3>
              <p className="text-xs uppercase tracking-wide text-gray-400">
                Personalized soundscapes · No BCI
              </p>
            </div>
            <Link
              href="https://endel.io"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-emerald-300 hover:text-emerald-200"
            >
              Visit Endel ↗
            </Link>
          </div>

          <p className="text-sm text-gray-300">
            Endel creates real-time adaptive soundscapes for focus, relaxation,
            and sleep, using inputs like time of day, weather, heart rate, and
            location. It&apos;s a popular and well-designed tool for
            productivity and wellness.
          </p>

          <div className="grid gap-4 text-xs md:text-sm md:grid-cols-2">
            <div>
              <p className="font-medium text-gray-200">The gap</p>
              <ul className="mt-1 list-disc pl-4 text-gray-300">
                <li>No brain–computer interface integration.</li>
                <li>
                  Limited access to the user&apos;s real cognitive state beyond
                  proxies (time, weather, heart rate).
                </li>
                <li>
                  Uses proprietary soundscapes rather than deeply personalized
                  music tied to a user&apos;s brain responses.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-200">Audia&apos;s angle</p>
              <ul className="mt-1 list-disc pl-4 text-gray-300">
                <li>
                  Directly links EEG signals to music response and preference.
                </li>
                <li>
                  Aims for highly personalized playlists, not just generic
                  soundscapes.
                </li>
                <li>
                  Designed for dynamic adjustments: if a track starts to break
                  focus, Audia adapts in real time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Links / Appendix */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Research notes &amp; reading list</h2>
        <p className="text-xs md:text-sm text-gray-400">
          Early ideation is grounded in existing research on music, focus, and
          brain–computer interfaces:
        </p>
        <div className="grid gap-3 text-xs md:text-sm md:grid-cols-2">
          <Link
            href="https://shamay.com/music-for-productivity-brainwaves/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-gray-800 bg-black/40 p-3 hover:border-gray-500 transition"
          >
            How music helps with concentration ↗
          </Link>
          <Link
            href="https://magazine.hms.harvard.edu/articles/designing-brain-computer-interfaces-connect-neurons-digital-world"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-gray-800 bg-black/40 p-3 hover:border-gray-500 transition"
          >
            Designing brain–computer interfaces (Harvard Medicine) ↗
          </Link>
          <Link
            href="https://www.cs.tufts.edu/~jacob/papers/workshop.chi18.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-gray-800 bg-black/40 p-3 hover:border-gray-500 transition"
          >
            BCI &amp; interaction research (Tufts) ↗
          </Link>
          <Link
            href="https://www.google.com/search?q=Mihaly+Csikszentmihalyi"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-gray-800 bg-black/40 p-3 hover:border-gray-500 transition"
          >
            Flow theory · Mihaly Csikszentmihalyi ↗
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-gray-900 pt-8 text-center space-y-3">
        <p className="text-sm text-gray-300">
          Audia is currently in the exploration phase. The next step is to talk
          to listeners, students, developers, and BCI researchers.
        </p>
        <p className="text-xs text-gray-400">
          Want to collaborate, share datasets, or just jam on the idea?
        </p>
        <a
          href="mailto:hande_naz.kavas@tufts.edu?subject=Audia%20–%20BCI%20music%20idea"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs md:text-sm text-emerald-100 hover:bg-emerald-400/20 transition"
        >
          Email Hande about Audia
        </a>
      </section>
    </main>
  );
}
