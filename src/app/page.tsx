"use client"; 
//Marks this component as a Client Component so React hooks and DOM APIs can run in the browser

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from 'react';
//Imports Next/React utilities and hooks
import { useState } from "react";
import SnakeGameLauncher from "@/app/components/SnakeGame";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
//The main page component exported for the route /.
  const containerRef = useRef<HTMLDivElement>(null);
  //Holds a reference to the <main> container so we can append leaf <img> nodes to it.

  useEffect(() => {
    //Runs once on mount (client-side) to spawn and animate leaves. Nothing here runs on the server.

    if (typeof window === "undefined") return; 
    //Safety guard: only execute in the browser (prevents SSR issues).

    const container = containerRef.current;
    if(!container) return;
    //Get the DOM(Document Object Model) element and abort if it isn’t available yet

    const leaves: HTMLImageElement[] = [];
    //Optional tracking array (handy if you want to inspect or clean up later).
    
    {/*
    You’re creating an array named leaves to store references to every leaf image that gets created.
    Each time you call createLeaf(), you do this:
        leaves.push(leaf);
    So now the array holds a list of all <img> elements you added to the page 
    */}

    function createLeaf() {
      const containerEl = containerRef.current; 
      if (!containerEl) return;
      //Defines how a single leaf is created; re-reads the ref inside the function so TypeScript is convinced it’s non-null at use time.

      const leaf = document.createElement("img");
      leaf.src = "/leaf.png";
      leaf.className = "absolute w-6 h-6 leaf";
      //Creates an <img> element, sets its source, and assigns Tailwind + a .leaf class (global animation styles live in globals.css).
      leaf.style.left = Math.random() * 100 + "vw";
      leaf.style.top = Math.random() * -20 + "vh";
      //Random horizontal start across the viewport (vw), and above top of screen (-20vh) so leaves “enter” from off-screen.
      //1vw = 1% of viewport width, 1vh = 1% of viewport height.
    
      leaf.style.animationDuration = 10 + Math.random() * 2 + "s"; 
      //Per-leaf fall time between 3–5s to avoid uniform, robotic motion.

      containerEl.appendChild(leaf);
      leaves.push(leaf);
      //Adds the leaf to the page and records it.


      leaf.addEventListener("animationend", () => {
        leaf.style.animation = "none";
        leaf.style.top = "55vh";
        leaf.style.transform = "rotate(360deg)";
      });
      //When its CSS animation finishes, freeze the leaf in place near the bottom so it stays there (no jitter, no reflows).


      leaf.addEventListener("mouseover", () => {
        const randomX = (Math.random() - 0.5) * 100;
        const randomY = (Math.random() - 0.5) * 50;
        leaf.style.transform = `translate(${randomX}px, ${randomY}px)`;
        leaf.style.transition = "transform 0.3s ease";
      });
      //Interactivity: on hover, nudge the leaf slightly with a smooth transition.
    }

    const spawnInterval = setInterval(createLeaf, 150);
    //Start spawning a new leaf every 150 ms (≈ 6–7 leaves/sec).

    const stopSpawning = setTimeout(() => clearInterval(spawnInterval), 4000);
    // stop at 4 seconds. No new leaves after this. Existing ones finish falling.
    return () => {
      clearInterval(spawnInterval);
      clearTimeout(stopSpawning);
    };
    //Cleanup on unmount to avoid timers running after navigation

  }, []);
  //Run this effect only once on mount



  return (
    <main 
    ref={containerRef}
    className="min-h-screen bg-black text-white p-10 overflow-hidden"
    >
      <section className="flex flex-col items-center text-center my-16">
        

        <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6">
          <Image
            src="/me.jpg"
            alt="Hande Naz Kavas"
            fill
            className="objec-cover"
          />
          </div>
          <h1 className="text-4xl font-bold">Hande Naz Kavas</h1>
          <p className="mt-4 max-w-2xl text-lg">
            Computer Science student passionate about brain-computer interfaces, AI, sustainability, and software engineering. Building systems that merge neuroscience and computation, and writing about emerging technology.
          </p>
          
          
      </section>
      <section className="flex flex-wrap items-center justify-between gap-4">
        {/* Email */}
        <a
          href="mailto:hande_naz.kavas@tufts.edu"
          className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
        >
          {/* Simple envelope icon using text – you can replace with an SVG/Icon later */}
          <span className="text-lg">✉️</span>
          <span>hande_naz.kavas@tufts.edu</span>
        </a>
        {/*snake game */}
        <div className="mt-6">
        <SnakeGameLauncher />
       </div>
        {/* Resume button */}
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 rounded-full border border-gray-500 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-100 hover:text-black transition-colors"
        >
          <span>View résumé</span>
          <span className="text-xs">↗</span>
        </Link>
      </section>


      

      <section className="my-20">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div
            onClick={() => setIsOpen(true)}
            className="border rounded-xl p-6 hover:shadow-lg cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2">
              YOLO vs Faster R-CNN Adversarial Research
            </h3>
            <p>
              Empirical study comparing adversarial vulnerabilities in autonomous
              vehicle perception pipelines.
            </p>

          </div>
          <Link href="/audia" className="border rounded-xl p-6 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Audia</h3>
            <p>
            A mood-based music recommendation system powered by EEG data and
            machine learning.
            </p>
          </Link> 

          {/* <Link href="#" className="border rounded-xl p-6 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">YOLO vs Faster R-CNN Adversarial Research</h3>
            <p>
            Empirical study comparing adversarial vulnerabilities in autonomous
            vehicle perception pipelines.
            </p>
          </Link> */}

          <Link href="http://gonullubul.com" className="border rounded-xl p-6 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Gonullubul</h3>
            <p>
            MERN volunteering platform connecting NGOs with youth communities.
            </p>
          </Link>
          <Link href="/photography" className="border rounded-xl p-6 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Photography Portfolio</h3>
            <p>
            170k+ views on Pexels showcasing social storytelling through
            documentary photography.
            </p>
          </Link>
        </div>
      </section>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        >
          {/* Stop propagation so clicks inside modal don’t close it */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl p-4 w-[90%] md:w-[70%] lg:w-[60%] h-[80%] relative"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-black text-xl font-bold hover:text-gray-700"
            >
              
            </button>

            {/* PDF Viewer */}
            <iframe
              src="/research.pdf"
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      )}

      <section className="my-20">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-3xl font-bold">Articles</h2>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            13+ published pieces
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* 1 */}
          <article className="group rounded-xl border border-gray-800/60 bg-black/40 p-4 transition hover:border-gray-400/80 hover:bg-black/70">
            <Link
              href="https://pub.aimind.so/decrypting-words-using-muse-2-c3a3da632219"
              className="flex items-start justify-between gap-3"
              target="_blank"
            >
              <div>
                <h3 className="text-sm font-medium leading-snug group-hover:underline">
                  Decrypting Words Using Muse-2
                </h3>
                <p className="mt-1 inline-flex items-center rounded-full bg-gray-800/70 px-2 py-0.5 text-xs font-light italic text-gray-200">
                  Published in AI Mind
                </p>
              </div>
              <span className="mt-1 text-xs opacity-0 transition group-hover:opacity-100">
                ↗
              </span>
            </Link>
          </article>

          {/* 2 */}
          <article className="group rounded-xl border border-gray-800/60 bg-black/40 p-4 transition hover:border-gray-400/80 hover:bg-black/70">
            <Link
              href="https://medium.com/gitconnected/fooling-autonomous-cars-via-white-box-attacks-2774174c478e"
              className="flex items-start justify-between gap-3"
              target="_blank"
            >
              <div>
                <h3 className="text-sm font-medium leading-snug group-hover:underline">
                  Fooling Autonomous Cars Via White Box Attacks
                </h3>
                <p className="mt-1 inline-flex items-center rounded-full bg-gray-800/70 px-2 py-0.5 text-xs font-light italic text-gray-200">
                  Published in Level Up Coding
                </p>
              </div>
              <span className="mt-1 text-xs opacity-0 transition group-hover:opacity-100">
                ↗
              </span>
            </Link>
          </article>

          {/* 3 */}
          <article className="group rounded-xl border border-gray-800/60 bg-black/40 p-4 transition hover:border-gray-400/80 hover:bg-black/70">
            <Link
              href="https://www.tuftsdaily.com/article/2025/10/accessible-low-cost-biomedical-innovations-at-tufts-research-lab"
              className="flex items-start justify-between gap-3"
              target="_blank"
            >
              <div>
                <h3 className="text-sm font-medium leading-snug group-hover:underline">
                  Accessible, low-cost biomedical innovations at Tufts’ research lab
                </h3>
                <p className="mt-1 inline-flex items-center rounded-full bg-gray-800/70 px-2 py-0.5 text-xs font-light italic text-gray-200">
                  Published in Tufts Daily
                </p>
              </div>
              <span className="mt-1 text-xs opacity-0 transition group-hover:opacity-100">
                ↗
              </span>
            </Link>
          </article>

          {/* 4 */}
          <article className="group rounded-xl border border-gray-800/60 bg-black/40 p-4 transition hover:border-gray-400/80 hover:bg-black/70">
            <Link
              href="https://www.tuftsdaily.com/article/2025/09/keeping-inner-thoughts-private"
              className="flex items-start justify-between gap-3"
              target="_blank"
            >
              <div>
                <h3 className="text-sm font-medium leading-snug group-hover:underline">
                  Keeping inner thoughts ‘private’
                </h3>
                <p className="mt-1 inline-flex items-center rounded-full bg-gray-800/70 px-2 py-0.5 text-xs font-light italic text-gray-200">
                  Published in Tufts Daily
                </p>
              </div>
              <span className="mt-1 text-xs opacity-0 transition group-hover:opacity-100">
                ↗
              </span>
            </Link>
          </article>

          {/* 5 */}
          <article className="group rounded-xl border border-gray-800/60 bg-black/40 p-4 transition hover:border-gray-400/80 hover:bg-black/70">
            <Link
              href="https://medium.com/merging-synapses/what-is-optogenetics-c7f7ae296494"
              className="flex items-start justify-between gap-3"
              target="_blank"
            >
              <div>
                <h3 className="text-sm font-medium leading-snug group-hover:underline">
                  What is Optogenetics?
                </h3>
                <p className="mt-1 inline-flex items-center rounded-full bg-gray-800/70 px-2 py-0.5 text-xs font-light italic text-gray-200">
                  Published in Merging Synapses
                </p>
              </div>
              <span className="mt-1 text-xs opacity-0 transition group-hover:opacity-100">
                ↗
              </span>
            </Link>
          </article>

          {/* 6 */}
          <article className="group rounded-xl border border-gray-800/60 bg-black/40 p-4 transition hover:border-gray-400/80 hover:bg-black/70">
            <Link
              href="https://medium.com/merging-synapses/technical-review-of-bci-part-1-fnirs-76711bf5a32f"
              className="flex items-start justify-between gap-3"
              target="_blank"
            >
              <div>
                <h3 className="text-sm font-medium leading-snug group-hover:underline">
                  Technical Review of BCI — Part 1: fNIRS
                </h3>
                <p className="mt-1 inline-flex items-center rounded-full bg-gray-800/70 px-2 py-0.5 text-xs font-light italic text-gray-200">
                  Published in Merging Synapses
                </p>
              </div>
              <span className="mt-1 text-xs opacity-0 transition group-hover:opacity-100">
                ↗
              </span>
            </Link>
          </article>

          {/* 7 */}
          <article className="group rounded-xl border border-gray-800/60 bg-black/40 p-4 transition hover:border-gray-400/80 hover:bg-black/70">
            <Link
              href="https://medium.com/@handenazkavas/figure-3-0-would-you-like-a-robot-maid-1a338b07d066"
              className="flex items-start justify-between gap-3"
              target="_blank"
            >
              <div>
                <h3 className="text-sm font-medium leading-snug group-hover:underline">
                  Figure 3.0 — Would you like a ‘Robot Maid’?
                </h3>
                <p className="mt-1 inline-flex items-center rounded-full bg-gray-800/70 px-2 py-0.5 text-xs font-light italic text-gray-200">
                  Self-published
                </p>
              </div>
              <span className="mt-1 text-xs opacity-0 transition group-hover:opacity-100">
                ↗
              </span>
            </Link>
          </article>

          {/* 8 */}
          <article className="group rounded-xl border border-gray-800/60 bg-black/40 p-4 transition hover:border-gray-400/80 hover:bg-black/70">
            <Link
              href="https://medium.com/@handenazkavas/thought-communications-decoding-inner-speech-80cbae2fcba5"
              className="flex items-start justify-between gap-3"
              target="_blank"
            >
              <div>
                <h3 className="text-sm font-medium leading-snug group-hover:underline">
                  Thought Communications: Decoding Inner Speech
                </h3>
                <p className="mt-1 inline-flex items-center rounded-full bg-gray-800/70 px-2 py-0.5 text-xs font-light italic text-gray-200">
                  Self-published
                </p>
              </div>
              <span className="mt-1 text-xs opacity-0 transition group-hover:opacity-100">
                ↗
              </span>
            </Link>
          </article>

          {/* 9 */}
          <article className="group rounded-xl border border-gray-800/60 bg-black/40 p-4 transition hover:border-gray-400/80 hover:bg-black/70">
            <Link
              href="https://medium.com/@handenazkavas/can-code-replace-the-human-body-neuroprosthetics-92c05578e824"
              className="flex items-start justify-between gap-3"
              target="_blank"
            >
              <div>
                <h3 className="text-sm font-medium leading-snug group-hover:underline">
                  Can code replace the human body? — Neuroprosthetics
                </h3>
                <p className="mt-1 inline-flex items-center rounded-full bg-gray-800/70 px-2 py-0.5 text-xs font-light italic text-gray-200">
                  Self-published
                </p>
              </div>
              <span className="mt-1 text-xs opacity-0 transition group-hover:opacity-100">
                ↗
              </span>
            </Link>
          </article>

          {/* 10 */}
          <article className="group rounded-xl border border-gray-800/60 bg-black/40 p-4 transition hover:border-gray-400/80 hover:bg-black/70">
            <Link
              href="https://medium.com/@handenazkavas/breaking-with-the-past-how-knowledge-benefits-from-letting-go-801667dc0930"
              className="flex items-start justify-between gap-3"
              target="_blank"
            >
              <div>
                <h3 className="text-sm font-medium leading-snug group-hover:underline">
                  Breaking with the Past: How Knowledge Benefits from Letting Go
                </h3>
                <p className="mt-1 inline-flex items-center rounded-full bg-gray-800/70 px-2 py-0.5 text-xs font-light italic text-gray-200">
                  Self-published
                </p>
              </div>
              <span className="mt-1 text-xs opacity-0 transition group-hover:opacity-100">
                ↗
              </span>
            </Link>
          </article>

          {/* 11 */}
          <article className="group rounded-xl border border-gray-800/60 bg-black/40 p-4 transition hover:border-gray-400/80 hover:bg-black/70">
            <Link
              href="https://medium.com/@handenazkavas/how-i-used-vector-math-and-trigonometry-to-plan-a-real-life-transatlantic-sailing-trip-a3892f48c495"
              className="flex items-start justify-between gap-3"
              target="_blank"
            >
              <div>
                <h3 className="text-sm font-medium leading-snug group-hover:underline">
                  How I Used Vector Math and Trigonometry to Plan a Real-Life Transatlantic Sailing Trip
                </h3>
                <p className="mt-1 inline-flex items-center rounded-full bg-gray-800/70 px-2 py-0.5 text-xs font-light italic text-gray-200">
                  Self-published
                </p>
              </div>
              <span className="mt-1 text-xs opacity-0 transition group-hover:opacity-100">
                ↗
              </span>
            </Link>
          </article>

          {/* 12 */}
          <article className="group rounded-xl border border-gray-800/60 bg-black/40 p-4 transition hover:border-gray-400/80 hover:bg-black/70">
            <Link
              href="https://medium.com/@handenazkavas/understanding-the-vulnerabilities-of-ai-systems-661ae7e43a13"
              className="flex items-start justify-between gap-3"
              target="_blank"
            >
              <div>
                <h3 className="text-sm font-medium leading-snug group-hover:underline">
                  Adversarial Attacks and CNN Manipulations: Understanding the Vulnerabilities of AI
                  Systems
                </h3>
                <p className="mt-1 inline-flex items-center rounded-full bg-gray-800/70 px-2 py-0.5 text-xs font-light italic text-gray-200">
                  Self-published
                </p>
              </div>
              <span className="mt-1 text-xs opacity-0 transition group-hover:opacity-100">
                ↗
              </span>
            </Link>
          </article>

          {/* 13 */}
          <article className="group rounded-xl border border-gray-800/60 bg-black/40 p-4 transition hover:border-gray-400/80 hover:bg-black/70">
            <Link
              href="https://medium.com/@handenazkavas/what-are-brain-computer-interfaces-e485a2284652"
              className="flex items-start justify-between gap-3"
              target="_blank"
            >
              <div>
                <h3 className="text-sm font-medium leading-snug group-hover:underline">
                  What are Brain-Computer Interfaces
                </h3>
                <p className="mt-1 inline-flex items-center rounded-full bg-gray-800/70 px-2 py-0.5 text-xs font-light italic text-gray-200">
                  Self-published
                </p>
              </div>
              <span className="mt-1 text-xs opacity-0 transition group-hover:opacity-100">
                ↗
              </span>
            </Link>
          </article>
        </div>
      </section>

     <section className="border-t border-gray-900 pt-8 text-center space-y-3">
        <p className="text-sm text-gray-300">
          Even though most of it is human-made, Chat GPT 5.1 has been of help for debugging and designing this website. 
        </p>
       
      </section>

    </main>
  )
}
