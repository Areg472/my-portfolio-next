"use client";

import Image from "next/image";

function Btn({ src, alt, href, hoverFunc, hoverVal }) {
  return (
    <a href={href} target="_blank">
      <Image
        src={src}
        alt={alt}
        title={alt}
        width={88}
        height={31}
        className="cursor-pointer"
        onMouseEnter={() => hoverFunc(hoverVal)}
      />
    </a>
  );
}

function BtnCols({ buttons, hoverFunc }) {
  return (
    <div className="flex flex-col space-y-4">
      {buttons.map((button) => (
        <Btn key={button.alt} {...button} hoverFunc={hoverFunc} />
      ))}
    </div>
  );
}

const buttonRows = [
  [
    [
      {
        src: "https://file.garden/Zp_ExamEPnCWgsNn/areg88x31.png",
        alt: "Areg's site",
        hoverVal: 20,
        href: "https://aregus.me",
      },
      {
        src: "https://file.garden/Zp_ExamEPnCWgsNn/fedora2.gif",
        alt: "Fedora Linux",
        hoverVal: 21,
        href: "https://fedoraproject.org",
      },
      {
        src: "https://file.garden/Zp_ExamEPnCWgsNn/88x31/ingo.png",
        alt: "Ingo's site",
        hoverVal: 22,
        href: "https://ingo.au",
      },
    ],
    [
      {
        src: "https://www.trulle123.se/88x31.png",
        alt: "Trulle's site",
        hoverVal: 23,
        href: "https://www.trulle123.se/",
      },
      {
        src: "https://cdn.adityan.dev/88x31",
        alt: "Aditya's site",
        hoverVal: 24,
        href: "https://adityan.dev",
      },
      {
        src: "https://cdn.hackclub.com/019eb7f6-9096-7359-9ae6-b5d5c4bfa22f/gateway.png",
        alt: "Alex's site",
        hoverVal: 25,
        href: "https://alexanderisashy.one/",
      },
    ],
  ],
  [
    [
      {
        src: "https://file.garden/Zp_ExamEPnCWgsNn/88x31/mateishomepage.png",
        alt: "Matei's site",
        hoverVal: 26,
        href: "https://mateishome.page/",
      },
      {
        src: "https://file.garden/Zp_ExamEPnCWgsNn/88x31/hackclub.gif",
        alt: "Hack Club",
        hoverVal: 27,
        href: "https://hackclub.com/",
      },
      {
        src: "https://file.garden/Zp_ExamEPnCWgsNn/88x31/open_source_88x31.png",
        alt: "Github Repo",
        hoverVal: 28,
        href: "https://github.com/Areg472/my-portfolio-next",
      },
    ],
    [
      {
        src: "https://file.garden/Zp_ExamEPnCWgsNn/88x31/javascript_1.gif",
        alt: "JavaScript",
        hoverVal: 29,
        href: "https://www.w3schools.com/Js/",
      },
    ],
  ],
];

export default function BtnRow({ row, hoverFunc }) {
  return (
    <div className="flex flex-col md:flex-row space-y-4 space-x-4">
      {buttonRows[row].map((buttons, index) => (
        <BtnCols key={index} buttons={buttons} hoverFunc={hoverFunc} />
      ))}
    </div>
  );
}
