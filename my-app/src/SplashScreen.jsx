import { useEffect, useState } from "react";
import BobbingImage from "./BobbingImage";

export default function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const displayTimer = setTimeout(() => setFadeOut(true), 2500);
    const removeTimer = setTimeout(() => { if (onFinish) onFinish(); }, 3500);
    return () => { clearTimeout(displayTimer); clearTimeout(removeTimer); };
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
        <BobbingImage
          image="logo2"
          left={isMobile ? 30 : 40}
          top={isMobile ? 180 : 120}
          size={isMobile ? 300 : 400}
          bobDelay={-2}
        />
        <BobbingImage
          image="logo1"
          left={isMobile ? 70 : 58}
          top={isMobile ? 240 : 180}
          size={isMobile ? 300 : 400}
          bobDelay={-1}
        />
      </div>
    </>
  );
}