import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSenseProps {
  slot: string;
  style?: React.CSSProperties;
}

export default function AdSense({ slot, style }: AdSenseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;

    const tryLoad = () => {
      const el = containerRef.current;
      if (!el) return;

      const width = el.offsetWidth;

      // Só carrega quando o container tiver largura real
      if (width > 0) {
        try {
          window.adsbygoogle = window.adsbygoogle || [];
          window.adsbygoogle.push({});
          loaded.current = true;
        } catch (e) {
          console.error("AdSense error:", e);
        }
      } else {
        requestAnimationFrame(tryLoad);
      }
    };

    tryLoad();
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", ...style }}
        data-ad-client="ca-pub-2286318823423521"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}