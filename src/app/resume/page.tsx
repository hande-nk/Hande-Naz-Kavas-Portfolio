import Image from "next/image";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 space-y-10">
      {/* Header */}
      <header className="flex items-center gap-6">
        {/* Optional profile image – replace /profile.jpg with your own path or remove this block */}
        {/* 
        <div className="relative h-24 w-24 overflow-hidden rounded-full">
          <Image
            src="/profile.jpg"
            alt="Hande Naz Kavas"
            fill
            className="object-cover"
          />
        </div>
        */}
        <div>
          <h1 className="text-3xl font-semibold">Hande Naz Kavas</h1>
          <p className="text-sm text-gray-600">
            Bachelor of Science in Computer Science · Tufts University, School of Engineering
          </p>
        </div>
      </header>

      {/* Education */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">Education</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm font-semibold">
              <span>TUFTS UNIVERSITY</span>
              <span>Medford, MA · 2025–2029</span>
            </div>
            <p className="text-sm italic">
              Bachelor of Sciences in Computer Science, School of Engineering
            </p>
            <p className="mt-1 text-sm">
              Relevant Courses: MATH42: Calc III; FMS65: Film Theory; EN1: Application in
              Engineering; PHY11: General Physics w/Lab
            </p>
          </div>

          <div>
            <div className="flex justify-between text-sm font-semibold">
              <span>USKUDAR AMERICAN ACADEMY</span>
              <span>Istanbul, Turkey · 2020–2025</span>
            </div>
            <p className="text-sm italic">
              International Baccalaureate Diploma Programme
            </p>
            <p className="mt-1 text-sm">
              Relevant Courses: Math A&amp;A HL, Physics HL, CS HL, Theory of Knowledge,
              Turkish A: Lit SL, English A: Lit SL, Turkey in the 20th Century SL
            </p>
          </div>
        </div>
      </section>

      {/* Research and Work Experience */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">Research and Work Experience</h2>
        <div className="space-y-4 text-sm">
          <div>
            <div className="flex justify-between font-semibold">
              <span>Non-Trivial — Research Foundations</span>
              <span>Remote · Sept 2022 – Jul 2024</span>
            </div>
            <p className="italic">
              Brain–computer interface research proposal
            </p>
            <ul className="mt-1 list-disc pl-5">
              <li>
                Spent 4 weeks researching motor neuron disease and building a feasible research
                proposal.
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-semibold">
              <span>The Knowledge Society — Student Researcher</span>
              <span>Remote · Sept 2022 – Jul 2024</span>
            </div>
            <p className="italic">
              Practiced consulting and tech research
            </p>
            <ul className="mt-1 list-disc pl-5">
              <li>
                Analyzed business case studies weekly with a director (ex-regional CEO of BrainCO),
                learning fundamentals of structured thinking, cold outreach, and project management.
              </li>
              <li>
                Contributed to consulting studies with MasterCard Foundation and CNBC.
              </li>
              <li>
                Awarded a $4,750 yearly scholarship for two years.
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-semibold">
              <span>
                <Link
                  href="https://www.linkedin.com/company/exportalturkiye/about/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Exportal
                </Link>{" "}
                — Intern
              </span>
              <span>Istanbul, Turkey · Jun – Jul 2023</span>
            </div>
            <p className="italic">
              Dataset creation for AI training
            </p>
            <ul className="mt-1 list-disc pl-5">
              <li>Gathered, compiled, and labeled data to train supervised AI models.</li>
              <li>Learned the pipeline for building and improving supervised AI systems.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">Projects</h2>
        <div className="space-y-4 text-sm">
          <div>
            <div className="flex justify-between font-semibold">
              <span>Creating Speech Decoding BCI</span>
              <span>March 2023</span>
            </div>
            <ul className="mt-1 list-disc pl-5">
              <li>
                Used a Muse-2 brain–computer interface to detect frontal and temporal lobe signals.
              </li>
              <li>
                Built software to read input from the device and detect Morse-code-like patterns in
                encrypted blinking.
              </li>
              <li>
                Wrote an article that reached people with speech disabilities, helping them
                communicate without using any muscles.
              </li>
              <li>
                Article link:{" "}
                <Link
                  href="https://bit.ly/bciproject"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  bit.ly/bciproject
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-semibold">
              <span>Creating Dignifying and Fulfilling Jobs in Ghana</span>
              <span>March 2023</span>
            </div>
            <ul className="mt-1 list-disc pl-5">
              <li>
                Designed a recommendation deck for MasterCard Foundation to create job
                opportunities for youth in the agriculture sector in Ghana.
              </li>
              <li>
                Developed recommendations as part of The Knowledge Society Impact Challenge.
              </li>
              <li>
                Slide deck:{" "}
                <Link
                  href="https://bit.ly/3M552ta"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  bit.ly/3M552ta
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-semibold">
              <span>Bringing CIBC to Gen Z</span>
              <span>January 2023</span>
            </div>
            <ul className="mt-1 list-disc pl-5">
              <li>
                Proposed a plan leveraging AI and RPAs to help CIBC grow as a futuristic bank and
                better target Gen Z customers.
              </li>
              <li>
                Validated the concept with a director at enpara.com (Turkey’s first fully digital
                bank) and potential Gen Z customers.
              </li>
              <li>
                Slide deck:{" "}
                <Link
                  href="https://bit.ly/47aCMyk"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  bit.ly/47aCMyk
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">Skills & Certifications</h2>
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Languages:</span> Turkish, English, Spanish (A2 DELE).
          </p>
          <p>
            <span className="font-semibold">Media:</span>{" "}
            <Link
              href="https://medium.com"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Medium
            </Link>{" "}
            (tech writing blog, 1K+ reads);{" "}
            <Link
              href="https://www.pexels.com"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Pexels
            </Link>{" "}
            (photography blog, 280K+ views).
          </p>
          <p>
            <span className="font-semibold">Certificates:</span> ABRSM Piano Grade 4 Examination;
            Beaver Computing Challenge (74/90); TÜBİTAK Istanbul Science Olympiad (Computer
            category) — 29th in 2020 and 84th in 2024 (one of five female finalists).
          </p>
        </div>
      </section>
    </main>
  );
}
