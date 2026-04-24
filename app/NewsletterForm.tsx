"use client";

import { FormEvent, useState } from "react";

const recipient = "lovemore@lovemorenyatsine.com";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  function submitNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent("Newsletter signup");
    const body = encodeURIComponent(
      `Please add this email to Lovemore Nyatsine's monthly letter:\n\n${email}`,
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="newsletter-form" onSubmit={submitNewsletter}>
      <label className="sr-only" htmlFor="email-address">
        Email address
      </label>
      <input
        id="email-address"
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <button type="submit" className="button button-primary">
        Join the letter
      </button>
    </form>
  );
}
