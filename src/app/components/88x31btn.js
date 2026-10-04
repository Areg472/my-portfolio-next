"use client";

import Image from "next/image";

export default function Btn88x31({ src, alt, href, hoverFunc, hoverVal }) {
  return (
    <a href={href}>
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
