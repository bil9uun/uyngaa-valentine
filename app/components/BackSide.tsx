import { IconHeartFilled } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const BackSide = () => {
  return (
    <div className="absolute inset-0 backface-hidden transform-[rotateY(180deg)]">
      <div className="relative flex h-full flex-col overflow-hidden rounded-[32px] border border-pink-100 bg-linear-to-b from-pink-50/95 via-white/95 to-pink-50/95 p-6 text-center shadow-[0_28px_80px_rgba(244,63,94,0.35)] backdrop-blur-xl sm:p-10 md:p-14">
        <div className="flex w-full justify-between">
          <div className="pointer-events-none h-8 w-8 items-center justify-center ">
            <IconHeartFilled className="text-pink-400" />
          </div>
          <div className="pointer-events-none h-8 w-8 items-center justify-center ">
            <IconHeartFilled className="text-pink-400" />
          </div>
        </div>

        <div className="mt-6 flex flex-1 flex-col items-center justify-center">
          <div className="mb-4 ml-4 flex flex-col items-center">
            <Image width={350} height={200} src="/beb.jpeg" alt="beb" />
          </div>
          <p className="mt-4 max-w-md text-sm text-pink-500 sm:text-base">
            You just made Ariunbold very happy!
          </p>
          <p className="mt-2 max-w-md text-sm text-pink-400 sm:text-base">
            Happy Valentine&apos;s Day .❤️
          </p>
        </div>

        <p className="mt-6 text-[10px] uppercase tracking-[0.25em] text-pink-300">
          Let’s keep celebrating every Valentine’s Day together
        </p>
        <div className="flex w-full justify-between">
          <div className="pointer-events-none h-8 w-8 items-center justify-center ">
            <IconHeartFilled className="text-pink-400" />
          </div>
          <div className="pointer-events-none h-8 w-8 items-center justify-center ">
            <IconHeartFilled className="text-pink-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackSide;
