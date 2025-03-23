"use client";
import RightArrow from "@/components/RightArrow";
import { motion } from "framer-motion";
import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Hourglass, MapPin } from "lucide-react";
import ETHLogo from "@/assets/ethindia-light.png";
import DevfolioLogo from "@/assets/Devfolio_Logo-White.png";
import PolygonLogo from "@/assets/Polygon_Logo-White@2x.png";
import BannerImage from "@/assets/main banner.jpg";
import IsteLogo from "@/assets/white iste logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  // React.useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://apply.devfolio.co/v2/sdk.js";
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  const prizes = [
    {
      title: "Winner",
      subtitle: "All Tracks",
      description:
        "FREE Domain Name for an year. Host your website on your custom domain using a GoDaddy Domain.",
    },
    {
      title: "Best hack built on Polygon: $200",
      subtitle: "Web3 Track",
      description:
        "Read about the bounty details and find code templates for Polygon here: https://nsb.dev/polygon-bounty.",
    },
    {
      title: "Best hack built on Ethereum: $100",
      subtitle: "Web3 Track",
      description:
        "Select this track if you're building on Ethereum to be eligible for the prizes!",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-[url('https://assets.squarespace.com/universal/images-v6/parking-page/black-grid-1500w.avif')]">
      <nav className="rounded-lg w-full bg-opacity-50 bg-black text-white py-4 px-8 flex justify-between items-center">
        <Image
          alt="Logo"
          className="h-12"
          height="50"
          src={IsteLogo}
          style={{
            aspectRatio: "50/50",
            objectFit: "cover",
          }}
          width="50"
        />
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <a className="hover:text-blue-500" href="/">
            Home
          </a>
          <a className="hover:text-blue-500" href="/tracks">
            Tracks
          </a>
          <a
            className="hover:text-blue-500"
            href="https://www.istenitdgp.com/events"
          >
            Events
          </a>
          <a
            className="hover:text-blue-500"
            href="https://www.istenitdgp.com/team"
          >
            Team
          </a>
          <Link href="https://nitdgp-hacks.devfolio.co/">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Register
            </Button>
          </Link>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.95,
          ease: [0.165, 0.84, 0.44, 1],
        }}
        className="flex flex-col z-10 max-w-6xl w-full items-center text-center justify-between text-sm lg:flex my-8"
      >
        <p className="md:fixed left-0 top-0 font-bold text-white text-7xl md:text-8xl max-w-2xl justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur dark:border-neutral-800 lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4">
          Innovate For{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
            Greater Good
          </span>
        </p>
        <p className="md:fixed left-0 top-0 flex font-normal text-white text-lg max-w-2xl justify-center border-b border-gray-300 pb-6 pt-8 dark:border-neutral-800 lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4">
          Join the innovation spree for a better future this March with the second edition of NITDGP
          Hacks 2.0, one of Eastern India&apos;s largest Hackathon.
        </p>

        <p className="md:fixed left-0 top-0 flex flex-col items-center font-bold text-white text-lg max-w-2xl justify-center border-b border-gray-300 dark:border-neutral-800 lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4">
          <span className="py-4">
            <div
              className="apply-button"
              data-hackathon-slug="nitdgp-hacks"
              data-button-theme="light"
              style={{ height: "44px", width: "312px" }}
            ></div>
          </span>

          <span className="text-2xl font-bold">
            March 29 - 30<sup>th</sup>, 2025
          </span>

          <div className="flex flex-row">
            <MapPin className="h-8 w-8 my-2" />
            <div className="flex flex-col">
              <span className="text-lg font-light text-center  max-w-[12em]">
                National Institute of Technology Durgapur
              </span>
            </div>
          </div>
        </p>
      </motion.div>

      <div className="w-full px-4 items-center flex flex-col flex-wrap">
        {/* <Image
          src={BannerImage}
          height="300"
          width="800"
          alt="hackathon banner"
        /> */}
      </div>
      <div className="flex flex-col w-full p-10 py-14 justify-center gap-12">
        <h3 className="text-whte text-4xl font-black">Call for Sponsors</h3>
        {/* <div className="flex flex-row gap-6">
          <Image
            height="100"
            alt="DEVFOLIO LOGO"
            width="320"
            className="p-4"
            src={DevfolioLogo}
          />
          <Image
            height="140"
            alt="POLYGON LOGO"
            width="300"
            className="p-4"
            src={PolygonLogo}
          />
          <Image
            height="140"
            alt="ETHINDIA LOGO"
            className="p-4"
            width="300"
            src={ETHLogo}
          />
        </div> */}
        <Link href="/Sponsorship docs - NITDGP Hacks 2.0.pdf">
          <Button className="bg-white text-black max-w-fit">
            Checkout Sponsorship Docs
            <ArrowUpRight />
          </Button>
        </Link>
      </div>

      <div className="flex flex-col w-full p-10 justify-center gap-12">
        <h3 className="text-whte text-4xl font-black">Prizes</h3>
        <div className="flex flex-col space-y-6">
          <Button className="bg-white text-black max-w-fit">
            Prizes to be declared soon.
            <Hourglass />
          </Button>
          {/* {prizes.map((prize, index) => (
            <div key={index} className="flex items-center space-x-4 ">
              <div className="w-1 h-36 bg-gradient-to-b from-purple-500 to-pink-500" />
              <div className="gap-y-2 flex flex-col">
                <h3 className="text-2xl py-2 font-semibold underline underline-offset-8">
                  {prize.title}
                </h3>
                <h4 className="text-lg text-slate-200">{prize.subtitle}</h4>
                <p className="text-sm text-slate-200 max-w-md">
                  {prize.description}
                </p>
              </div>
            </div>
          ))} */}
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
          href="https://nitdgp-hacks.devfolio.co/"
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
          href="/Sponsorship docs - NITDGP Hacks 2.0.pdf"
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
