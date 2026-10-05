"use client";

import { SocialIcons } from "./socialicons";
import AnimatedText from "./animatedtext";
import { motion } from "motion/react";
import { useState } from "react";
import { MobileView, BrowserView, isMobile } from "react-device-detect";
import Image from "next/image";
import Script from "next/script";
import Btn88x31 from "@/app/components/88x31btn";

export function ClientHomepage() {
  const [text, setText] = useState(null);

  function HandleHoverVid(value) {
    setText(value);
  }

  return (
    <>
      <Script
        src="https://pagering.gideon.sh/embed.js"
        strategy="afterInteractive"
      />
      <motion.div
        initial={{ rotate: isMobile ? 0 : 150, scale: 0, opacity: 0 }}
        transition={{
          duration: 0.75,
          type: "spring",
          bounce: isMobile ? 0.2 : 0.3,
        }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
      >
        <div className="min-h-screen bg-[#1d1e25] text-white text-center font-sans flex flex-col items-center w-full py-[5vh]">
          <h1 className="font-bolditalic-exo mb-4 text-3xl md:text-5xl text-[#ffd000]">
            Areg
          </h1>

          <h4 className="font-thin text-md md:text-xl text-[#cccccc] mb-[3vh]">
            A smol web dev who likes open source stuff and programming. <br />
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
                {text ? (
                  <motion.h2
                    className="text-[3vh] mt-2 text-center font-bold text-[#ffd000]"
                    key={text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {(text === 1 && "YouTube") ||
                      (text === 3 && "X") ||
                      (text === 4 && "BlueSky") ||
                      (text === 5 && "Mastodon") ||
                      (text === 6 && "GitHub") ||
                      (text === 7 && "Contact") ||
                      (text === 8 && "Ocean+ Trailer") ||
                      (text === 9 && "Doing the Hackathon") ||
                      (text === 10 && ":3") ||
                      (text === 11 && "🦜") ||
                      (text === 12 && "🪻") ||
                      (text === 13 && "Webrings & Buttons!!!") ||
                      (text === 20 && "Areg's site") ||
                      (text === 21 && "Fedora Linux") ||
                      (text === 22 && "Ingo's site") ||
                      (text === 23 && "Trulle's site") ||
                      (text === 24 && "Aditya's site") ||
                      (text === 25 && "Alex's site") ||
                      (text === 26 && "Matei's site") ||
                      (text === 27 && "Hack Club") ||
                      (text === 28 && "Github") ||
                      (text === 29 && "JavaScript")}
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
            <SocialIcons useText={setText} />
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center md:w-[45%]">
              <video
                controls
                onMouseEnter={() => HandleHoverVid(9)}
                onMouseLeave={() => HandleHoverVid(null)}
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
            <div
              className="mx-auto flex w-fit flex-col items-center justify-center mt-8 space-y-4 rounded-3xl px-6 py-5 shadow-none hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all shadow-gray-500"
              onMouseEnter={() => HandleHoverVid(13)}
              onMouseLeave={() => HandleHoverVid(null)}
            >
              {isMobile && <h3 className="text-lg">Webrings & Buttons!!!</h3>}
              <div className="gap-4 flex flex-col lg:flex-row justify-center">
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
                    onMouseLeave={() => HandleHoverVid(13)}
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
              <div className="flex justify-center">
                <pagering-link
                  theme="dark"
                  onMouseEnter={() => HandleHoverVid(12)}
                  onMouseLeave={() => HandleHoverVid(13)}
                />
              </div>
              <div
                className="flex flex-row space-x-4"
                onMouseLeave={() => HandleHoverVid(13)}
              >
                <div className="flex flex-col md:flex-row space-y-4 space-x-4">
                  <div className="flex flex-col space-y-4">
                    <Btn88x31
                      src="https://file.garden/Zp_ExamEPnCWgsNn/areg88x31.png"
                      alt="Areg's site"
                      hoverFunc={HandleHoverVid}
                      hoverVal={20}
                      href="https://aregus.me"
                    />
                    <Btn88x31
                      src="https://file.garden/Zp_ExamEPnCWgsNn/fedora2.gif"
                      alt="Fedora Linux"
                      hoverFunc={HandleHoverVid}
                      hoverVal={21}
                      href="https://fedoraproject.org"
                    />
                    <Btn88x31
                      src="https://file.garden/Zp_ExamEPnCWgsNn/88x31/ingo.png"
                      alt="Ingo's site"
                      hoverFunc={HandleHoverVid}
                      hoverVal={22}
                      href="https://ingo.au"
                    />
                  </div>
                  <div className="flex flex-col space-y-4">
                    <Btn88x31
                      src="https://www.trulle123.se/88x31.png"
                      alt="Trulle's site"
                      hoverFunc={HandleHoverVid}
                      hoverVal={23}
                      href="https://www.trulle123.se/"
                    />
                    <Btn88x31
                      src="https://cdn.adityan.dev/88x31"
                      alt="Aditya's site"
                      hoverFunc={HandleHoverVid}
                      hoverVal={24}
                      href="https://adityan.dev"
                    />
                    <Btn88x31
                      src="https://cdn.hackclub.com/019eb7f6-9096-7359-9ae6-b5d5c4bfa22f/gateway.png"
                      alt="Alex's site"
                      hoverFunc={HandleHoverVid}
                      hoverVal={25}
                      href="https://alexanderisashy.one/"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 space-x-4">
                  <div className="flex flex-col space-y-4">
                    <Btn88x31
                      src="https://file.garden/Zp_ExamEPnCWgsNn/88x31/mateishomepage.png"
                      alt="Matei's site"
                      hoverFunc={HandleHoverVid}
                      hoverVal={26}
                      href="https://mateishome.page/"
                    />
                    <Btn88x31
                      src="https://file.garden/Zp_ExamEPnCWgsNn/88x31/hackclub.gif"
                      alt="Hack Club"
                      hoverFunc={HandleHoverVid}
                      hoverVal={27}
                      href="https://hackclub.com/"
                    />
                    <Btn88x31
                      src="https://file.garden/Zp_ExamEPnCWgsNn/88x31/open_source_88x31.png"
                      alt="Github"
                      hoverFunc={HandleHoverVid}
                      hoverVal={28}
                      href="https://github.com/"
                    />
                  </div>
                  <div className="flex flex-col space-y-4">
                    <Btn88x31
                      src="https://file.garden/Zp_ExamEPnCWgsNn/88x31/javascript_1.gif"
                      alt="JavaScript"
                      hoverFunc={HandleHoverVid}
                      hoverVal={29}
                      href="https://www.w3schools.com/Js/"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
