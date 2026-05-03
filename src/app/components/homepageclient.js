"use client"

import { SocialIcons } from "./socialicons";
import AnimatedText from "./animatedtext";
import { motion } from "motion/react";
import { useState } from "react";
import { MobileView, BrowserView, isMobile } from "react-device-detect";
import Image from "next/image";

export function ClientHomepage() {
  const [hmm, setHmm] = useState(null);

  function HandleHoverVid(value) {
    setHmm(value);
  }


  return (
    <>
      <motion.div
        initial={{ rotate: isMobile ? 0 : 150, scale: 0, opacity: 0 }}
        transition={{
          duration: 0.75,
          type: "spring",
          bounce: isMobile ? 0.2 : 0.3,
        }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: isMobile ? 0 : -150, scale: 0, opacity: 0 }}
      >
        <div className="min-h-screen bg-[#1d1e25] text-white text-center font-sans flex flex-col items-center w-full py-[5vh]">
          <h1 className="font-bolditalic-exo mb-4 text-3xl md:text-5xl text-[#ffd000]">
            Areg
          </h1>

          <h4 className="font-thin text-md md:text-xl text-[#cccccc] mb-[3vh]">
            A smol web dev who likes open source stuff, and programming. <br />
            Computers are cool :)
          </h4>

          <div className="bg-[#26262a] rounded-[5vh] pb-[5vh] pt-[3vh] mt-[3vh] max-w-150 w-[90%] mx-auto lg:max-w-175 lg:mt-[2vh] lg:pt-[2vh]">
            <div className="flex justify-center items-center mb-4">
              <motion.div
                initial={{ scale: 0.2, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeatType: "reverse",
                  type: "spring",
                  bounce: 1,
                  delay: 1,
                  bounceStiffness: 360,
                  bounceDamping: 5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  transition={{
                    duration: 7,
                    repeatType: "loop",
                    ease: "linear",
                    repeat: Infinity,
                    delay: 1,
                  }}
                  animate={{ rotate: 360 }}
                >
                  <Image
                    className="w-16 h-16 rounded-full"
                    src="https://utfs.io/f/thKihuQxhYcPw3n5zcEF1bloKXeA0d3pP7RDCmGxkgNhTjMa"
                    alt="Profile Picture"
                    width={1000}
                    height={1000}
                    loading="eager"
                    onMouseEnter={() => HandleHoverVid(10)}
                    onMouseLeave={() => HandleHoverVid(null)}
                  />
                </motion.div>
              </motion.div>
            </div>

            <div className="relative h-8 w-full flex items-center justify-center">
              <BrowserView>
                {hmm ? (
                  <motion.h2
                    className="text-[3vh] mt-2 text-center font-bold text-[#ffd000]"
                    key={hmm}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {(hmm === 1 && "YouTube") ||
                      (hmm === 3 && "X") ||
                      (hmm === 4 && "BlueSky") ||
                      (hmm === 5 && "Discord") ||
                      (hmm === 6 && "GitHub") ||
                      (hmm === 7 && "Contact") ||
                      (hmm === 8 && "Ocean+ Trailer") ||
                      (hmm === 9 && "Doing the Hackathon") ||
                      (hmm === 10 && ":3") ||
                      (hmm === 11 && "🦜")}
                  </motion.h2>
                ) : (
                  <div className="absolute inset-0 flex items-center mb-4 justify-center">
                    <AnimatedText />
                  </div>
                )}
              </BrowserView>
              <MobileView>
                <div className="flex items-center mb-4 justify-center">
                  <AnimatedText />
                </div>
              </MobileView>
            </div>
            <SocialIcons useHmm={setHmm} />
            <div className="flex flex-col items-center justify-center ml-[9%] md:ml-[7%]">
              <div
                onMouseLeave={() => HandleHoverVid(null)}
                className="flex flex-col md:flex-row gap-4"
              >
                <div className="flex flex-col items-center justify-end w-[90%] md:w-[45%]">
                  <video
                    controls
                    onMouseEnter={() => HandleHoverVid(8)}
                    poster="https://file.garden/Zp_ExamEPnCWgsNn/Screenshot%202025-10-09%20at%2009-34-24%20Areg.png"
                  >
                    <source
                      src="https://file.garden/Zp_ExamEPnCWgsNn/Ocean%2B%20full%20trailer.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <MobileView>
                    <p className="font-regular-exo mt-auto pt-4">
                      Ocean+ trailer
                    </p>
                  </MobileView>
                </div>
                <div className="flex flex-col items-center justify-end w-[90%] md:w-[45%]">
                  <video
                    controls
                    onMouseEnter={() => HandleHoverVid(9)}
                    poster="https://file.garden/Zp_ExamEPnCWgsNn/Screenshot%202025-10-09%20at%2009-29-43%20Areg.png"
                  >
                    <source
                      src="https://file.garden/Zp_ExamEPnCWgsNn/Doing%20the%20hackathon!.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <MobileView>
                    <p className="font-regular-exo mt-auto pt-4">
                      Doing the Hackathon
                    </p>
                  </MobileView>
                </div>
              </div>
            </div>
            <div className="gap-4 flex flex-col lg:flex-row justify-center mt-8">
              <a href="https://ultrafastparrot.net/prev/areg">
                <motion.button
                  className="border-black cursor-pointer border-2 bg-indigo-300 rounded-2xl w-52 lg:w-20 text-black h-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Prev
                </motion.button>
              </a>
              <a href="https://ultrafastparrot.net/">
                <motion.button
                  className="border-black cursor-pointer border-2 bg-indigo-300 rounded-2xl w-52 lg:w-52 text-black h-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onMouseEnter={() => HandleHoverVid(11)}
                  onMouseLeave={() => HandleHoverVid(null)}
                >
                  Ultra fast parrot
                </motion.button>
              </a>
              <a href="https://ultrafastparrot.net/next/areg">
                <motion.button
                  className="border-black cursor-pointer border-2 bg-indigo-300 rounded-2xl w-52 lg:w-20 text-black h-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Next
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
