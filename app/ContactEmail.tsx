"use client";

import { useState } from "react";

const email = "lovemore@lovemorenyatsine.com";

export function ContactEmail() {
  const [copied, setCopied] = useState(false);

  function showCopied() {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function copyWithFallback() {
    const textarea = document.createElement("textarea");
    textarea.value = email;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        showCopied();
      } else {
        window.location.href = `mailto:${email}`;
      }
    } finally {
      document.body.removeChild(textarea);
    }
  }

  async function copyEmail() {
    if (!navigator.clipboard) {
      copyWithFallback();
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      showCopied();
    } catch {
      copyWithFallback();
    }
  }

  function openEmail() {
    window.setTimeout(() => {
      if (document.visibilityState === "visible") {
        copyEmail();
      }
    }, 500);
  }

  function emailLovemore() {
    window.location.href = `mailto:${email}?subject=Enquiry%20for%20Lovemore%20Nyatsine`;
    openEmail();
  }

  function handleCopy() {
    copyEmail();
  }

  function handleEmailButton() {
    emailLovemore();
  }

  return (
    <div className="contact-email">
      <button
        type="button"
        className="button button-primary"
        onClick={handleEmailButton}
      >
        Email Lovemore
      </button>
      <button type="button" className="contact-email-copy" onClick={handleCopy}>
        {copied ? "Email copied" : email}
      </button>
    </div>
  );
}
