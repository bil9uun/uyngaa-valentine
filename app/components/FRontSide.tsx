import { IconHeartFilled } from "@tabler/icons-react";
import Image from "next/image";

const FRontSide = ({
  handleYesClick,
  handleNoHover,
  moveNoButton,
  noOffset,
  yesScale,
}: {
  handleYesClick: () => void;
  handleNoHover: () => void;
  moveNoButton: () => void;
  noOffset: { x: number; y: number };
  yesScale: number;
}) => {
  return (
    <div className="flex flex-col items-center gap-4 h-full w-full rounded-[32px] border border-pink-100 bg-linear-to-b from-pink-50/95 via-white/95 to-pink-50/95 p-6 shadow-[0_28px_80px_rgba(244,63,94,0.35)] backdrop-blur-xl sm:p-10 md:p-14">
      <div className="flex w-full justify-between">
        <div className="pointer-events-none h-8 w-8 items-center justify-center ">
          <IconHeartFilled className="text-pink-400" />
        </div>
        <div className="pointer-events-none h-8 w-8 items-center justify-center ">
          <IconHeartFilled className="text-pink-400" />
        </div>
      </div>
      <div className="flex self-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.25em] text-pink-400">
        <span>From Anbo</span>
      </div>
      <Image
        className="-mb-10"
        width={200}
        height={200}
        src="/me.jpeg"
        alt="me"
      />
      <p className="mt-8 text-sm font-medium uppercase tracking-[0.25em] text-pink-400">
        Dear Uyangaa,
      </p>
      <h1 className="mt-4 max-w-xl text-2xl font-semibold leading-snug text-pink-600 sm:text-3xl md:max-w-2xl md:text-4xl">
        Will you be my Valentine ?
      </h1>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={handleYesClick}
          style={{
            transform: `scale(${yesScale})`,
          }}
          className="rounded-full bg-pink-500 px-10 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-300/70 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-pink-600"
        >
          Yes
        </button>
        <button
          onMouseEnter={handleNoHover}
          onMouseMove={handleNoHover}
          onClick={moveNoButton}
          style={{
            transform: `translate(${noOffset.x}px, ${noOffset.y}px)`,
          }}
          className="rounded-full border border-pink-200 bg-white px-10 py-3 text-sm font-semibold text-pink-500 shadow-sm shadow-pink-100 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-pink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-50"
        >
          No
        </button>
      </div>

      <p className="mt-10 text-[11px] text-pink-300 sm:text-xs">
        &quot;No&quot; seems a bit shy 😈
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
  );
};

export default FRontSide;
