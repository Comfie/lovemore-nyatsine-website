import Image from "next/image";
import { ContactEmail } from "./ContactEmail";
import { NewsletterForm } from "./NewsletterForm";

const books = [
  {
    title: "Hunt Like a Buffalo Hunter",
    slug: "buffalo-hunter",
    status: "Available now",
    image: "/books/buffalo-hunter.jpeg",
    alt: "Cover artwork for Hunt Like a Buffalo Hunter by Lovemore Nyatsine",
    note: "Precision, patience, and power.",
    description:
      "A reflective leadership work on patience, discipline, resilience, and the long game of meaningful pursuit.",
    cta: "Buy the book",
    href: "#contact",
  },
  {
    title: "Dagga Boy",
    slug: "dagga-boy",
    status: "Coming soon",
    image: "/books/dagga-boy.jpeg",
    alt: "Cover artwork for Dagga Boy by Lovemore Nyatsine",
    note: "Not loudly. Not quickly. But fully.",
    description:
      "A deeper, more personal work on strength, solitude, survival, and the quiet weight a man learns to carry.",
    cta: "Notify me on release",
    href: "#email",
  },
  {
    title: "Mantles & Titles",
    slug: "mantles-and-titles",
    status: "In development",
    image: "/books/mantles-and-titles.jpeg",
    alt: "Cover artwork for Mantles and Titles by Lovemore Nyatsine",
    note: "It is not what you are called. It is what you answer to.",
    description:
      "A meditation on calling, identity, responsibility, and the difference between what is conferred and what is formed in you.",
    cta: "Notify me on release",
    href: "#email",
  },
];

const contentStreams = [
  "Leadership",
  "Endurance & the long game",
  "Strategy & execution",
  "Book excerpts",
  "Features & interviews",
];

const roles = [
  "Author",
  "Coach",
  "Strategist",
  "Speaker",
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Books", href: "#books" },
  { label: "Writing", href: "#writing" },
  { label: "Platform", href: "#platform" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="site-glow site-glow-left" />
      <div className="site-glow site-glow-right" />

      <header className="topbar">
        <div className="container topbar-inner">
          <div>
            <a href="#hero" className="brand-mark">
              Lovemore Nyatsine
            </a>
            <p className="brand-subtitle">
              Author, coach, speaker, and executive leader
            </p>
          </div>

          <nav className="nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">Becoming, deliberately.</span>
            <h1>Books, leadership, and the long work of becoming.</h1>
            <p className="hero-lead">
              I write, coach, and lead at the intersection of discipline,
              endurance, and quiet conviction. This is where the books live, the
              ideas gather, and the work stays.
            </p>

            <div className="hero-signature">
              <p>
                Books that endure. Ideas that compound. Leadership that carries
                weight.
              </p>
            </div>

            <div className="hero-actions">
              <a href="#books" className="button button-primary">
                Explore the books
              </a>
              <a href="#writing" className="button button-secondary">
                Read the writing
              </a>
            </div>

            <div className="role-list">
              {roles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
          </div>

          <div className="hero-panel reveal reveal-delay">
            <div className="hero-panel-frame">
              <h2>
                Not a résumé. A body of work — shaped by discipline, strategy,
                and earned perspective.
              </h2>
              <p>
                Less motivational noise. More weight, clarity, and conviction.
              </p>
            </div>

            <div className="hero-note">
              <span className="stat-value">3</span>
              <span className="stat-label">Three books. One throughline.</span>
            </div>

            <div className="hero-quote">
              <span className="hero-quote-label">Signature thought</span>
              <p>
                “Social platforms create momentum. A home like this lets the
                work stay — so ideas can gather meaning, and readers can return
                to them.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container section-grid">
          <div className="section-heading reveal">
            <span className="eyebrow">About</span>
            <h2>About Lovemore</h2>
            <div className="about-portrait">
              <Image
                src="/lovemore_image.jpg"
                alt="Lovemore Nyatsine in conversation on stage"
                fill
                sizes="(max-width: 767px) 100vw, 45vw"
              />
            </div>
          </div>

          <div className="about-card reveal reveal-delay">
            <p className="about-intro">
              Lovemore Nyatsine is an author, coach, and strategist writing on
              leadership, endurance, and the long work of becoming. His
              perspective is shaped by years of senior executive responsibility
              — carrying real weight, making real decisions, and learning what
              holds up under pressure.
            </p>
            <p>
              His writing is deliberately unhurried. Less performance, more
              substance. Less commentary, more conviction. It speaks to leaders,
              builders, and quiet strivers who are more interested in what
              endures than in what trends.
            </p>
            <div className="about-metrics">
              <div>
                <span>Writing</span>
                <strong>
                  Books, essays, and reflections on leadership and becoming.
                </strong>
              </div>
              <div>
                <span>Coaching</span>
                <strong>
                  Selective one-to-one work with leaders ready for deeper
                  execution.
                </strong>
              </div>
              <div>
                <span>Advisory</span>
                <strong>Strategic advisory through Katalytic.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="books" className="section section-books">
        <div className="container">
          <div className="section-row reveal">
            <div className="section-heading compact books-heading">
              <span className="eyebrow">Books</span>
              <h2>The Books</h2>
            </div>
            <p className="section-copy">
              Three works tracing one throughline — how a man is formed, what
              he carries, and what he answers to.
            </p>
          </div>

          <div className="book-grid">
            {books.map((book, index) => (
              <article
                key={book.title}
                className={`book-card book-card-${book.slug} reveal reveal-step-${index + 1}`}
              >
                <div className="book-card-media">
                  <Image
                    src={book.image}
                    alt={book.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  />
                  <div className="book-status">{book.status}</div>
                </div>
                <div className="book-card-body">
                  <span className="book-card-note">{book.note}</span>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                  <a href={book.href} className="text-link">
                    {book.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="writing" className="section section-writing">
        <div className="container writing-grid">
          <div className="writing-copy reveal">
            <span className="eyebrow">Writing and ideas</span>
            <h2>Writing & Ideas</h2>
            <p>
              Essays and reflections on leadership, endurance, execution, and
              becoming — gathered here so they can be returned to, not just
              scrolled past.
            </p>
          </div>

          <div className="writing-panel reveal reveal-delay">
            <div className="writing-panel-header">
              <span>Categories</span>
              <strong>Ready to fill</strong>
            </div>

            <div className="tag-grid">
              {contentStreams.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <span id="platform" className="anchor-target" aria-hidden="true" />

      <section id="email" className="section">
        <div className="container newsletter-card reveal">
          <div>
            <span className="eyebrow">Email list</span>
            <h2>Stay close to the work.</h2>
            <p>
              A monthly letter with new essays, book updates, and reflections on
              leadership and becoming. No noise. No filler. Unsubscribe any
              time.
            </p>
          </div>

          <NewsletterForm />
        </div>
      </section>

      <section id="contact" className="section section-contact">
        <div className="container contact-grid">
          <div className="section-heading reveal">
            <span className="eyebrow">Contact</span>
            <h2>Get in touch</h2>
            <p className="section-copy">
              For speaking, media, advisory, and book enquiries.
            </p>
          </div>

          <div className="contact-card reveal reveal-delay">
            <div>
              <span>Speaking & media</span>
              <strong>Selected conversations, interviews, and features.</strong>
            </div>
            <div>
              <span>Books</span>
              <strong>Launches, excerpts, and reader engagement.</strong>
            </div>
            <div>
              <span>Advisory</span>
              <strong>Strategic advisory through Katalytic</strong>
            </div>
            <ContactEmail />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="brand-mark brand-mark-footer">Lovemore Nyatsine</div>
            <p className="brand-subtitle">Becoming, deliberately.</p>
          </div>
          <div className="footer-social" aria-label="Social links">
            <span>Social</span>
            <div>
              <a
                href="https://www.linkedin.com/in/lovemorenyatsine/"
                target="_blank"
                rel="noreferrer"
                aria-label="Lovemore Nyatsine on LinkedIn"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.3 8h4.4v15H.3V8Zm7.2 0h4.2v2.05h.06c.58-1.1 2-2.25 4.13-2.25 4.42 0 5.24 2.9 5.24 6.68V23h-4.4v-7.55c0-1.8-.03-4.12-2.5-4.12-2.52 0-2.9 1.97-2.9 4V23H7.5V8Z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/lovemore.nyatsine"
                target="_blank"
                rel="noreferrer"
                aria-label="Lovemore Nyatsine on Facebook"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.5c-1.49 0-1.95.93-1.95 1.88v2.28h3.32l-.53 3.49H13.9V24C19.61 23.1 24 18.1 24 12.07Z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
          <p className="footer-copy">
            © 2026 Lovemore Nyatsine. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
