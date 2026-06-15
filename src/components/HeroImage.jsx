import { useEffect, useState } from "react";

export default function HeroImage({ src, alt = "Hero image", className = "" }) {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    let isActive = true;

    async function loadHtml() {
      if (!src || !src.endsWith(".html")) {
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
  }, [src]);

  return (
    <div className={`h-128 w-64 flex-shrink-0 rounded-lg ${className}`}>
      {htmlContent ? (
        <iframe
          title={alt}
          srcDoc={htmlContent}
          className="h-full w-full border-0 bg-transparent"
          style={{ zoom: 0.45 }}
          scrolling="no"
          aria-label={alt}
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