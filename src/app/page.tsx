"use client"; 
//Marks this component as a Client Component so React hooks and DOM APIs can run in the browser

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from 'react';
//Imports Next/React utilities and hooks
import { useState } from "react";

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
            Computer Science student passionate about brain-computer interfaces, AI, sustainability, and software engineering. Building systems that merge neuroscience and computation, and writingabout emerging technology.
          </p>
          
          
      </section>
      <section>
        <div className="relative w-100 h-10 text-gray-300 text-xl text-left">
            <p> hande_naz.kavas@tuft.edu</p>
          </div>
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

          <Link href="#" className="border rounded-xl p-6 hover:shadow-lg">
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
        <h2 className="text-3xl font-bold mb-6">Articles</h2>
        <div className="flex flex-col md:flex-row items-start gap-8">
         
          <ul className="md:w-1/2 w-full space-y-4">
            <li>
              <Link href="https://pub.aimind.so/decrypting-words-using-muse-2-c3a3da632219" className="underline hover:text-gray-600">
              Decrypting Words Using Muse-2
              </Link>
              <p className="text-s font-thin italic">
                Published in AI Mind
              </p>
            </li>
            <li>
              <Link href="https://medium.com/gitconnected/fooling-autonomous-cars-via-white-box-attacks-2774174c478e" className="underline hover:text-gray-600">
              Fooling Autonomous Cars Via White Box Attacks
              </Link>
              <p className="text-s font-thin italic">
                Published in Level Up Coding
              </p>
            </li>
            <li>
              <Link href="https://www.tuftsdaily.com/article/2025/10/accessible-low-cost-biomedical-innovations-at-tufts-research-lab" className="underline hover:text-gray-600">
              Accessible, low-cost biomedical innovations at Tufts’ research lab
              </Link>
              <p className="text-s font-thin italic">
                Published in Tufts Daily
              </p>
            </li>
            <li>
              <Link href="https://www.tuftsdaily.com/article/2025/09/keeping-inner-thoughts-private" className="underline hover:text-gray-600">
              Keeping inner thoughts ‘private’
              </Link>
              <p className="text-s font-thin italic">
                Published in Tufts Daily
              </p>
            </li>
            <li>
              <Link href="https://medium.com/merging-synapses/what-is-optogenetics-c7f7ae296494" className="underline hover:text-gray-600">
              What is Optogenetics?
              </Link>
              <p className="text-s font-thin italic">
                Published in Merging Synapses
              </p>
            </li>
            <li>
              <Link href="https://medium.com/merging-synapses/technical-review-of-bci-part-1-fnirs-76711bf5a32f" className="underline hover:text-gray-600">
              Technical Review of BCI — Part 1: fNIRS
              </Link>
              <p className="text-s font-thin italic">
                Published in Merging Synapses
              </p>
            </li>
            <li>
              <Link href="https://medium.com/@handenazkavas/figure-3-0-would-you-like-a-robot-maid-1a338b07d066" className="underline hover:text-gray-600">
              Figure 3.0 — Would you like a ‘Robot Maid’?
              </Link>
              <p className="text-s font-thin italic">
                self published
              </p>
            </li>
            <li>
              <Link href="https://medium.com/@handenazkavas/thought-communications-decoding-inner-speech-80cbae2fcba5" className="underline hover:text-gray-600">
              Thought Communications: Decoding Inner Speech
              </Link>
              <p className="text-s font-thin italic">
                self published
              </p>
            </li>
            <li>
              <Link href="https://medium.com/@handenazkavas/can-code-replace-the-human-body-neuroprosthetics-92c05578e824" className="underline hover:text-gray-600">
              Can code replace the human body? — Neuroprosthetics
              </Link>
              <p className="text-s font-thin italic">
                self published
              </p>
            </li>
            <li>
              <Link href="https://medium.com/@handenazkavas/breaking-with-the-past-how-knowledge-benefits-from-letting-go-801667dc0930" className="underline hover:text-gray-600">
              Breaking with the Past: How Knowledge Benefits from Letting Go
              </Link>
              <p className="text-s font-thin italic">
                self published
              </p>
            </li>
            <li>
              <Link href="https://medium.com/@handenazkavas/how-i-used-vector-math-and-trigonometry-to-plan-a-real-life-transatlantic-sailing-trip-a3892f48c495" className="underline hover:text-gray-600">
              How I Used Vector Math and Trigonometry to Plan a Real-Life Transatlantic Sailing Trip
              </Link>
              <p className="text-s font-thin italic">
                self published
              </p>
            </li>
            <li>
              <Link href="https://medium.com/@handenazkavas/understanding-the-vulnerabilities-of-ai-systems-661ae7e43a13" className="underline hover:text-gray-600">
              Adversarial Attacks and CNN Manipulations: Understanding the Vulnerabilities of AI Systems
              </Link>
              <p className="text-s font-thin italic">
                self published
              </p>
            </li>
            <li>
              <Link href="https://medium.com/@handenazkavas/what-are-brain-computer-interfaces-e485a2284652" className="underline hover:text-gray-600">
              What are Brain-Computer Interfaces
              </Link>
              <p className="text-s font-thin italic">
                self published
              </p>
            </li>



          </ul>
        <div className="md:w-1/2 w-full">
          <Image 
            src="/placeholder.jpeg"
            alt="Art by me"
            width={600}
            height={400}
            className="rounded-xl object-cover shadow-lg"
          />
        </div>
        </div>

      </section>
     

    </main>
  )
}
