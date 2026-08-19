"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { TALLY_EMBED_URL, TALLY_FORM_ID } from "@/config/tally";
import { CheckIcon } from "./Icons";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

type TallyMessage = {
  event?: string;
  payload?: { formId?: string };
};

const emailFallback = (
  <div className="tally-fallback" role="status">
    <p>Having trouble with the form?</p>
    <span>Email us directly at:</span>
    <a href="mailto:contact@codense.in">contact@codense.in</a>
  </div>
);

export function TallyContactForm() {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!TALLY_FORM_ID) return;

    const handleMessage = (message: MessageEvent) => {
      if (message.origin !== "https://tally.so" || typeof message.data !== "string") return;
      if (!message.data.includes("Tally.Form")) return;

      try {
        const data = JSON.parse(message.data) as TallyMessage;
        if (data.payload?.formId !== TALLY_FORM_ID) return;
        if (data.event === "Tally.FormLoaded") setLoaded(true);
        if (data.event === "Tally.FormSubmitted") setSubmitted(true);
      } catch {
        // Ignore unrelated or malformed cross-window messages.
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (!TALLY_FORM_ID) return emailFallback;

  if (submitted) {
    return (
      <div className="tally-success" role="status" aria-live="polite">
        <span><CheckIcon /></span>
        <h3>Thanks — we&apos;ve got it.</h3>
        <p>We&apos;ll review what you&apos;ve shared and get back to you if it looks like Codense can help.</p>
      </div>
    );
  }

  if (failed) return emailFallback;

  return (
    <div className={`tally-shell ${loaded ? "is-loaded" : ""}`}>
      {!loaded && <div className="tally-loading" role="status"><i /> <span>Loading inquiry form…</span></div>}
      <iframe
        className="tally-embed"
        data-tally-src={TALLY_EMBED_URL}
        title="Codense project inquiry"
        loading="lazy"
        width="100%"
        height="560"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        onError={() => setFailed(true)}
      />
      <Script
        id="tally-embed-script"
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.Tally?.loadEmbeds()}
        onError={() => setFailed(true)}
      />
      <noscript>{emailFallback}</noscript>
    </div>
  );
}
