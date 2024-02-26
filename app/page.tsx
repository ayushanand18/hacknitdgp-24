"use client";
import RightArrow from "@/components/RightArrow";
import { motion } from "framer-motion";
import * as React from "react";
import Image from "next/image";

import ETHLogo from "@/assets/ethindia-light.png";
import DevfolioLogo from "@/assets/Devfolio_Logo-White.png";
import PolygonLogo from "@/assets/Polygon_Logo-White@2x.png";

export default function Home() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-[url('https://assets.squarespace.com/universal/images-v6/parking-page/black-grid-1500w.avif')]">
      <div className="z-10 max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="md:fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-2 md:pb-6 md:pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          NITDGP Hacks 1.0
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
          Innovate For{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
            Greater Good
          </span>
        </p>
        <p className="md:fixed left-0 top-0 flex font-normal text-white text-lg max-w-2xl justify-center border-b border-gray-300 pb-6 pt-8 dark:border-neutral-800 lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4">
          Join the innovation spree for a better future this March with NITDGP
          Hacks 1.0 2024, one of Eastern India&apos;s largest Hackathon.
        </p>

        <p className="md:fixed left-0 top-0 flex font-bold gap-4 text-white text-lg max-w-2xl justify-center border-b border-gray-300 dark:border-neutral-800 lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4">
          <span className="font-light">9-10th March 2024</span>
          <span className="">
            <div
              className="apply-button"
              data-hackathon-slug="nitdgp-hacks"
              data-button-theme="light"
              style={{ height: "44px", width: "312px" }}
            ></div>
          </span>
        </p>
      </motion.div>

      <div className="flex flex-col w-full p-10 justify-center gap-12">
        <h3 className="text-whte text-5xl font-black">Sponsors</h3>
        <div className="flex flex-row gap-6">
          <Image
            height="100"
            alt="DEVFOLIO LOGO"
            width="320"
            src={DevfolioLogo}
          />
          <Image
            height="140"
            alt="POLYGON LOGO"
            width="300"
            src={PolygonLogo}
          />
          <Image height="140" alt="ETHINDIA LOGO" width="300" src={ETHLogo} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.95,
          ease: [0.165, 0.84, 0.44, 1],
        }}
        className="my-4 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"
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
