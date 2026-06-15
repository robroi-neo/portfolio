import { useEffect, useState } from "react";

export default function HeroImage({ src, alt = "Hero image", className = "" }) {
  const [htmlContent, setHtmlContent] = useState("");
  const isHtmlSource = typeof src === "string" && src.endsWith(".html");

  useEffect(() => {
    let isActive = true;

    async function loadHtml() {
      if (!isHtmlSource) {
        setHtmlContent("");
        return;
      }

      const response = await fetch(src);
      const html = await response.text();

      if (isActive) {
        setHtmlContent(html);
      }
    }

    loadHtml();

    return () => {
      isActive = false;
    };
  }, [src, isHtmlSource]);

  return (
    <div className={`h-[32rem] w-[32rem] max-w-[90vw] flex-shrink-0 rounded-lg ${className}`}>
      {isHtmlSource && htmlContent ? (
        <iframe
          title={alt}
          srcDoc={htmlContent}
          className="h-full w-full border-0 bg-transparent"
          style={{ zoom: 0.45 }}
          scrolling="no"
          aria-label={alt}
        />
      ) : src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center text-center font-mono text-xs uppercase tracking-[0.3em] text-slate-500"
          aria-label={alt}
          role="img"
        >
          Image coming soon
        </div>
      )}
    </div>
  );
}