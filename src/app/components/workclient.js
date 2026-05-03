"use client"

import { motion } from "motion/react";
import { isMobile } from "react-device-detect";
import WorkGrid from "./workgrid.js";

const workCards = [
  {
    id: "ocean-plus",
    title: "Ocean+",
    description: "The ultimate Vyond and GoAnimate streaming platform!",
    link: "https://oceanbluestream.com/",
    image_alt: "Ocean+ logo",
    image_link: "https://file.garden/Zp_ExamEPnCWgsNn/logo.jpg",
  },
  {
    id: "codedex-winter-hackathon-2024",
    title: "Codédex Winter Hackathon 2024",
    description: "A 2 day hackathon run by Codédex in December :D",
    link: "https://new-year-hackathon.aregus.me/",
    image_link:
      "https://file.garden/Zp_ExamEPnCWgsNn/Screenshot%202025-10-09%20at%2009-42-40%20Areg%20travels.png",
    image_alt: "A screenshot of my hackathon project website",
  },
  {
    id: "fun-quiz",
    title: "Fun Quiz",
    description: "A fun quiz for the hack club flavortown ysws!",
    link: "https://fun-quiz.aregus.me/",
    image_link:
      "https://file.garden/Zp_ExamEPnCWgsNn/Screenshot%202026-01-11%20at%2020-27-16%20Fun%20quiz!.png",
    image_alt: "A screenshot of my fun quiz website",
  },
  {
    id: "spotimetro",
    title: "SpotiMetro",
    description: "A website that generates a tracklist based on your metro route!",
    link: "https://spotify-metro.aregus.me/",
    image_link:
      "https://file.garden/Zp_ExamEPnCWgsNn/Screenshot%202026-04-24%20at%2022-03-44%20Paris%20Metro%20-%20Metro%20Spotify%20Generator.png",
    image_alt: "A screenshot of my spotimetro website",
  },
];

export function WorkClient() {
  return(
  <motion.div
    initial={{ rotate: isMobile ? 0 : 150, scale: 0, opacity: 0 }}
    transition={{
      duration: 0.75,
      type: "spring",
      bounce: isMobile ? 0.2 : 0.3,
    }}
    animate={{ rotate: 0, scale: 1, opacity: 1 }}
  >
    <div className="w-full mt-10 font-regularExo px-4 mb-16">
      <WorkGrid cards={workCards} />
    </div>
  </motion.div>
  )
}