"use client";

import { ReactNode, useEffect, useState } from "react";
import BackSide from "./components/BackSide";
import FRontSide from "./components/FRontSide";
import {
  IconDeviceHeartMonitorFilled,
  IconHeart,
  IconHeartBitcoin,
  IconHeartBolt,
  IconHeartCheck,
  IconHeartCode,
  IconHeartCog,
  IconHeartDiscount,
  IconHeartDollar,
  IconHeartDown,
  IconHeartExclamation,
  IconHeartFilled,
} from "@tabler/icons-react";

type FloatingHeart = {
  id: number;
  left: number;
  top: number;
  size: number;
  icon: ReactNode;
  duration: number;
};

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const [showHearts, setShowHearts] = useState(false);
  const [yesScale, setYesScale] = useState(1);

  useEffect(() => {
    if (!isFlipped) return;

    const icons = [
      <IconHeart key="heart" />,
      <IconHeartBitcoin key="bitcoin" />,
      <IconHeartBolt key="bolt" />,
      <IconHeartCheck key="check" />,
      <IconHeartCode key="code" />,
      <IconHeartDollar key="dollar" />,
      <IconHeartDown key="down" />,
      <IconHeartFilled key="heartFIlled" />,
      <IconHeartCog key="heartFIlled" />,
      <IconHeartDiscount key="heartFIlled" />,
      <IconHeartFilled key="filledheart" />,
      <IconHeartFilled key="filledheart1" />,
      <IconHeartFilled key="filledheart2" />,
      <IconHeartExclamation key="heartFIlled" />,
      <IconDeviceHeartMonitorFilled key="heartFIlled" />,
    ];

    const created: FloatingHeart[] = Array.from({ length: 100 }).map(
      (_, index) => ({
        id: index,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 8 + Math.random() * 40, // 🔹 хэт томоос сэргийлэв
        icon: icons[Math.floor(Math.random() * icons.length)],
        duration: 2 + Math.random() * 2,
      }),
    );

    Promise.resolve().then(() => {
      setHearts(created);
      setShowHearts(true);
    });
  }, [isFlipped]);

  const handleYesClick = () => {
    if (isFlipped) return;
    setIsFlipped(true);
  };

  const moveNoButton = () => {
    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 70;

    setYesScale((p) => Math.min(p + 0.015, 1.6));

    setNoOffset({
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    });
  };
  const handleNoHover = () => {
    if (isFlipped) return;
    moveNoButton();
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-linear-to-b from-pink-200 via-pink-100 to-pink-200 px-4 py-10 font-sans">
      {showHearts && hearts.length > 0 && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          {hearts.map((heart) => (
            <span
              key={heart.id}
              // className={`absolute animate-bounce text-pink-400/90`}
              className="absolute animate-ping text-pink-400/90"
              style={{
                left: `${heart.left}%`,
                top: `${heart.top}%`,
                fontSize: `${heart.size}px`,
                animationDuration: `${heart.duration ?? 3}s`,
              }}
            >
              {heart.icon}
            </span>
          ))}
        </div>
      )}
      <main className="w-full h-full">
        <section className="mx-auto max-w-4xl perspective-[2000px]">
          <div
            className="min-h-min w-full transition-transform duration-500 ease-in-out transform-3d"
            style={{
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <FRontSide
              handleNoHover={handleNoHover}
              handleYesClick={handleYesClick}
              moveNoButton={moveNoButton}
              noOffset={noOffset}
              yesScale={yesScale}
            />
            <BackSide />
          </div>
        </section>
      </main>
    </div>
  );
}
