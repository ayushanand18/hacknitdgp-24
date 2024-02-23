"use client";
import { motion } from "framer-motion";
import RightArrow from "@/components/RightArrow";
import Link from "next/link";

interface Event {
  title: string;
  description: string;
}

const Events: Array<Event> = [
  {
    title: "AI for Social Good",
    description:
      "Develop AI solutions to tackle social issues like healthcare access,\
    environmental sustainability, or education equality.",
  },
  {
    title: "Web3 Track",
    description:
      "Utilize Web3 tools to solve challenges from other tracks, integrating decentralized technologies like blockchain, smart contracts, or decentralized finance.",
  },
  {
    title: "HealthTech Solutions",
    description:
      "Develop tech to improve healthcare delivery, patient care, disease prevention, or mental wellness.",
  },
  {
    title: "Fintech Innovation",
    description:
      "Revolutionize finance with apps, blockchain solutions, digital wallets, or algorithmic trading tools.",
  },
  {
    title: "Cybersecurity Challenges",
    description:
      "Design solutions to safeguard data, privacy, networks, or systems from cyber threats.",
  },
  {
    title: "Open Innovation Challenge",
    description:
      "Work on any project of choice, fostering creativity, experimentation, and interdisciplinary collaboration.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-[url('https://assets.squarespace.com/universal/images-v6/parking-page/black-grid-1500w.avif')]">
      <div className="z-10 max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="md:fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-2 md:pb-6 md:pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Link href="/">NITDGP Hacks 1.0</Link>
        </p>
        <div className="md:fixed bottom-0 left-0 flex h-12 md:h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-0 md:p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.istenitdgp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By
            <div className="font-bold">
              ISTE Students&apos; Chapter NIT Durgapur
            </div>
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.95,
          ease: [0.165, 0.84, 0.44, 1],
        }}
        className="flex flex-col z-10 max-w-6xl w-full items-start justify-between text-sm lg:flex my-8"
      >
        <p className="md:fixed left-0 top-0 font-bold text-white text-7xl md:text-8xl max-w-2xl justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur dark:border-neutral-800 lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4">
          Tracks
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.95,
          ease: [0.165, 0.84, 0.44, 1],
        }}
        className="flex lg:px-12 md:flex-row flex-wrap gap-4"
      >
        {Events.map((event, index) => (
          <div
            key={index}
            className="md:fixed left-0 top-0 backdrop-blur md:min-w-[10em] max-w-sm gap-4 md:gap-6
             flex flex-row  font-normal text-white text-lg max-w-2xl justify-center border-b border-gray-300 
             p-2 md:p-6 dark:border-neutral-800 lg:static lg:w-auto  lg:rounded-xl lg:border"
          >
            <p className="font-bold text-lg underline underline-offset-8">
              {event.title}
            </p>
            <p className="text-sm text-slate-200">{event.description}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.95,
          ease: [0.165, 0.84, 0.44, 1],
        }}
        className="my-24 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"
      >
        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Register{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <RightArrow />
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Registrations will open shortly, make sure to check us out soon.
          </p>
        </a>

        <a
          href="/tracks"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Tracks{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <RightArrow />
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn more about the hackathon and the greater good that lies
            within.
          </p>
        </a>

        <a
          href="https://www.istenitdgp.com/events"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Past Events{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <RightArrow />
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            We have created better opportunities for 3000+ students across India
            with top-notch events.
          </p>
        </a>

        <a
          href="/sponsorship-docs-nitdgp-hacks.pdf"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Sponsor Us{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <RightArrow />
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Want to get your brand noticed here, partner with us!
          </p>
        </a>
      </motion.div>
    </main>
  );
}
