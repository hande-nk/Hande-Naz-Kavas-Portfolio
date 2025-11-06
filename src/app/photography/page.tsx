"use client";

import Image from "next/image";
import Link from "next/link";

export default function PhotographyPage() {
    const photos = [
        { 
            src: "/p1.jpg", 
            title: "sailling in Porto",
            link: "https://www.pexels.com/photo/sailboat-and-bridge-behind-16938375/"
        },
        { 
            src: "/p2.jpg", 
            title: "vintage shop",
            link: "https://www.pexels.com/photo/vinyl-records-in-box-16232354/"
        },
        { 
            src: "/p3.jpg", 
            title: "istanbul ferry",
            link: "https://www.pexels.com/photo/ship-15659342/"
        },
        { 
            src: "/p4.jpg", 
            title: "ÇOBAN",
            link: "https://www.pexels.com/photo/shepherd-and-sheep-15034750/"
        },
        { 
            src: "/p5.jpg", 
            title: "lonly tree",
            link: "https://www.pexels.com/photo/like-an-island-12626508/"
        },
        { 
            src: "/p6.jpg", 
            title: "the secret island in turkey",
            link: "https://www.pexels.com/photo/photograph-of-a-tree-near-rocks-12602781/"
        },
        { 
            src: "/p7.jpg", 
            title: "random mosque in Istanbul",
            link: "https://www.pexels.com/photo/istanbul-12593658/"
        },
    ];

    return ( 
        <main className="min-h-screen bg-black text-white p-10">
            <section className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-3">Photography Gallery</h1>
                <p className="text-lg italic text-gray-300">
                    Capturing human stories through urban and natural light.
                </p>
                <Link href="/" className="underline hover:text-gray-400 text-sm mt-4 block">
                    ← Back to Portfolio
                </Link>
            </section>
            <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {photos.map((photo, index) => (
                <Link
                    key={index}
                    href={photo.link}
                    target="_blank" // open in new tab
                    rel="noopener noreferrer"
                    className="relative group overflow-hidden rounded-xl"
                >
                    <Image
                    src={photo.src}
                    alt={photo.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white text-center text-sm">{photo.title}</p>
                    </div>
                </Link>
                ))}
            </section>
        </main>
    );
}