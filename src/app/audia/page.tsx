"use client";

import Image from "next/image";
import Link from "next/link";


export default function AudiaPage() {
    return(
        <main className="bg-amber-200 text-black p-10">
            <section className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-3">
                    Upcoming Project
                </h1>
                <p className="text-lg italic text-shadow-black ">
                    Have you ever imaged a smart headphone. 
                </p>
                <Link href="/" className="underline hover:text-gray-400 text-sm mt-4 block">
                    ← Back to Portfolio
                </Link>
            </section>
            <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            hey
            </section>
        </main>
    );
}