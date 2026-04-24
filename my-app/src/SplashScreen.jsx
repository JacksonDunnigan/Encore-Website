import { useEffect, useState } from "react";
import BobbingImage from "./BobbingImage";

export default function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const displayTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const removeTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3500);

    return () => {
      clearTimeout(displayTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  return (
    <>
      <style>
        {`
          @keyframes bob {
            0%   { transform: translate(-50%, 0px); }
            50%  { transform: translate(-50%, -20px); }
            100% { transform: translate(-50%, 0px); }
          }
        `}
      </style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "var(--surface)",
          overflow: "hidden",
          zIndex: 9999,
          opacity: fadeOut ? 0 : 1,
          transition: "opacity 1s ease",
        }}
      >
        {/* Floating logos */}
        {/* <BobbingImage image="logo1" left={20} top={80} size={180} bobDelay={0} /> */}
        <BobbingImage image="logo2" left={40} top={120} size={400} bobDelay={-2} />
        <BobbingImage image="logo1" left={58} top={180} size={400} bobDelay={-1} />
        {/* <BobbingImage image="logo2" left={35} top={300} size={200} bobDelay={-3} />
        <BobbingImage image="logo1" left={80} top={260} size={140} bobDelay={-0.5} /> */}

        {/* Center text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          {/* <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              margin: 0,
              letterSpacing: "0.1em",
            }}
          >
            DINKUS
          </h1> */}
        </div>
      </div>
    </>
  );
}